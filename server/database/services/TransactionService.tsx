import { connectToDatabase } from "../database";
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

export const listTransactions = async (loanId: string, page = 1, limit = 10) => {

    const offset = (page - 1) * limit;
    const db = await connectToDatabase()
    return new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                `SELECT * FROM Transactions WHERE loan_id = ? AND deleted_at IS NULL  ORDER BY created_at DESC LIMIT ? OFFSET ?`,
                [loanId, limit, offset],
                (_, results) => {
                    const rows = results.rows.raw();
                    resolve(rows);
                },
                (error) => {
                    reject(error);
                }
            );
        });
    })
};

export const createTransaction = async (transaction: { value: number; about: string; loan_id: string; }) => {
    const { value, about, loan_id } = transaction;
    const db = await connectToDatabase();
    const id = uuidv4();

    return new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                `INSERT INTO Transactions (id, value, about, loan_id) VALUES (?, ?, ?, ?)`,
                [id, value, about, loan_id],
                (_, result) => {
                    if (value > 0) {
                        tx.executeSql(
                            `UPDATE Loans SET amount_paid = amount_paid + ? WHERE id = ?`,
                            [value, loan_id],
                            (_, updateResult) => resolve({ transactionId: id, result, updateResult }),
                            (_, updateError) => reject(updateError)
                        );
                    } else {
                        console.log('aqio')
                        tx.executeSql(
                            `UPDATE Loans SET value = value - ? WHERE id = ?`,
                            [value, loan_id],
                            (_, updateResult) => resolve({ transactionId: id, result, updateResult }),
                            (_, updateError) => reject(updateError)
                        );
                    }

                },
                (_, error) => reject(error)
            );
        });
    });
};

export const getTransactionById = async (id: string) => {
    const db = await connectToDatabase()
    return new Promise((resolve, reject) => {

        db.transaction((tx) => {
            tx.executeSql(
                `SELECT * FROM Transactions WHERE id = ? AND deleted_at IS NULL`,
                [id],
                (tx, results) => {
                    const rows = results.rows.raw();
                    resolve(rows[0]);
                },
                error => reject(error)
            );
        });
    })
};

export const updateTransaction = async (transaction: { id: string; value: number; name: string; about: string; }) => {
    const db = await connectToDatabase()

    const setClause = Object.keys(transaction).map(key => `${key} = ?`).join(', ');
    const values = [...Object.values(transaction), transaction.id];

    return new Promise((resolve, reject) => {

        db.transaction((tx) => {
            tx.executeSql(
                `UPDATE Transactions SET ${setClause} WHERE id = ?`,
                values,
                (_, result) => resolve(result),
                (_, error) => reject(error)
            );
        });
    })
};


export const deleteTransaction = async (id: string) => {
    const db = await connectToDatabase();

    return new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                `UPDATE Transactions SET deleted_at = datetime('now', '-3 hours') WHERE id = ?`,
                [id],
                (_, result) => resolve(result),
                (_, error) => reject(error)
            );
        });
    });
};