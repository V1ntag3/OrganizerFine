import { connectToDatabase } from '@/server/database/database';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

export const listRevenueSpendings = async (month: number, year: number) => {
    const db = await connectToDatabase()
    return new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                `SELECT * FROM RevenueSpendings WHERE strftime('%m', created_at) = ? AND strftime('%Y', created_at) = ? AND deleted_at IS NULL  ORDER BY created_at DESC `,
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

export const createRevenueSpending = async (spending: { type: number; category: number; about: string; value: number; }) => {
    const db = await connectToDatabase()

    const { type, category, about, value } = spending;
    const createdAt = new Date().toISOString();
    const updatedAt = createdAt;
    const id = uuidv4();
    return new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                'INSERT INTO RevenueSpendings (id, type, category, about, value, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?)',
                [id, type, category, about, value, createdAt, updatedAt],
                (_, result) => resolve(result),
                (_, error) => reject(error)
            );
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