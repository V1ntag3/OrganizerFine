import { connectToDatabase } from '@/server/database/database';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';


import { SQLiteDatabase } from "react-native-sqlite-storage";

export const paramsRevenueSpendings = async () => {

    const db = await connectToDatabase()

    return new Promise<{ minMonth: string | null; maxMonth: string | null }>((resolve, reject) => {
        db.transaction(tx => {
            // Consulta para obter o menor mês
            tx.executeSql(
                `SELECT strftime('%Y-%m', MIN(date_portion)) AS minMonth FROM RevenueSpendings WHERE date_portion IS NOT NULL;`,
                [],
                (_, { rows: { raw } }) => {
                    const minMonth = raw()[0]?.minMonth ?? null;

                    // Consulta para obter o maior mês
                    tx.executeSql(
                        `SELECT strftime('%Y-%m', MAX(date_portion)) AS maxMonth FROM RevenueSpendings WHERE date_portion IS NOT NULL;`,
                        [],
                        (_, { rows: { raw } }) => {
                            const maxMonth = raw()[0]?.maxMonth ?? null;

                            // Resolve com o resultado
                            resolve({ minMonth, maxMonth });
                        },
                        (_, error) => {
                            console.error("Error fetching maxMonth:", error);
                            reject(error);
                        }
                    );
                },
                (_, error) => {
                    console.error("Error fetching minMonth:", error);
                    reject(error);
                }
            );
        });
    });
};


export const listRevenueSpendings = async (month: number, year: number) => {
    const db = await connectToDatabase()
    return new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                `SELECT * FROM RevenueSpendings WHERE strftime('%m', date_portion) = ? AND strftime('%Y', date_portion) = ? AND deleted_at IS NULL  ORDER BY created_at DESC `,
                [month >= 10 ? month : '0' + month.toString(), year.toString()],
                (tx, results) => {
                    const rows = results.rows.raw();

                    resolve(rows);
                },
                (error) => {
                    reject(error);
                }
            );
        });
    });
};

export const createRevenueSpending = async (spending: {
    type: number;
    category: number;
    about: string;
    value: number;
    portion: number;
}) => {
    const db = await connectToDatabase();

    const { type, category, about, value, portion } = spending;
    const createdAt = new Date().toISOString();
    const updatedAt = createdAt;
    const installmentValue = value / portion;
    const installmentId = uuidv4();

    return new Promise((resolve, reject) => {
        db.transaction(tx => {
            for (let i = 0; i < portion; i++) {
                const id = uuidv4();

                const dueDate = new Date();

                dueDate.setMonth(dueDate.getMonth() + i);

                const dueDateFormatted = dueDate.toISOString();
                const aboutWithInstallment = portion > 1 ? `${about} (parcela ${i + 1}/${portion})` : about;

                tx.executeSql(
                    'INSERT INTO RevenueSpendings (id, installment_id, type, category, about, value, created_at, updated_at, date_portion) VALUES (?, ?, ?, ?, ?, ?, ?, ?,?)',
                    [id, installmentId, type, category, aboutWithInstallment, installmentValue, createdAt, updatedAt, dueDateFormatted],
                    (_, result) => {
                        if (i === portion - 1) { // Resolve quando todas as parcelas forem inseridas
                            resolve(result);
                        }
                    },
                    (_, error) => {
                        reject(error);
                    }
                );
            }
        });
    });
};


export const getRevenueSpendingById = async (id: string) => {
    const db = await connectToDatabase()

    return new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                'SELECT * FROM RevenueSpendings WHERE id = ? AND deleted_at IS NULL',
                [id],
                (tx, results) => {
                    const rows = results.rows.raw();
                    resolve(rows[0]);
                },
                error => reject(error)
            );
        });
    });
};

export const updateRevenueSpending = async (revenueSpending: { id: string, value: number; about: string; category: number; type: number; }) => {
    const db = await connectToDatabase()

    const setClause = Object.keys(revenueSpending).map(key => `${key} = ?`).join(', ');
    const values = [...Object.values(revenueSpending), revenueSpending.id];

    return new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                `UPDATE RevenueSpendings SET ${setClause} WHERE id = ?`,
                values,
                (_, result) => resolve(result),
                (_, error) => reject(error)
            );
        });
    });
};

export const deleteRevenueSpending = async (id: string) => {
    const db = await connectToDatabase()

    return new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                `UPDATE Transactions SET deleted_at = datetime('now', '-3 hours') WHERE id = ?`,
                [id],
                (_, result) => resolve(result),
                (_, error) => reject(error)
            );
        });
    });
};

export const getTotalRevenueSpendings = async (): Promise<number> => {
    const db = await connectToDatabase();

    return new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                `SELECT SUM(
                CASE
                  WHEN type = 1 THEN -value
                  WHEN type = 0 THEN value
                  ELSE 0
                END
              ) AS total
              FROM RevenueSpendings`,
                [],
                (_, result) => {
                    const total = result.rows.item(0).total;
                    resolve(total || 0); // Retorna 0 se total for null ou undefined
                },
                (_, error) => reject(error)
            );
        });
    });
};