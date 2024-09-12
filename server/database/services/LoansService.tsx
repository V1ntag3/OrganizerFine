import { connectToDatabase } from '@/server/database/database';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

export const listLoans = async (page = 1, limit = 10) => {
    const offset = (page - 1) * limit;
    const db = await connectToDatabase()
    return new Promise((resolve, reject) => {
        db.transaction((tx: { executeSql: (arg0: string, arg1: number[], arg2: (tx: any, results: any) => void, arg3: (error: any) => void) => void; }) => {
            tx.executeSql(
                `SELECT * FROM Loans WHERE deleted_at IS NULL LIMIT ? OFFSET ?`,
                [limit, offset],
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

export const createLoan = async (loan: { value: number; name: string; about: string; }) => {
    const { value, name, about } = loan;
    const db = await connectToDatabase()

    const id = uuidv4();
    return new Promise((resolve, reject) => {

        db.transaction((tx) => {
            tx.executeSql(
                `INSERT INTO Loans (id, value, name, about ) VALUES (?, ?, ?, ?)`,
                [id, value, name, about],
                (_, result) => resolve(result),
                (_, error) => reject(error)
            );
        });
    })
};

export const getLoanById = async (id: string) => {
    const db = await connectToDatabase()
    return new Promise((resolve, reject) => {

        db.transaction((tx) => {
            tx.executeSql(
                `SELECT * FROM Loans WHERE id = ? AND deleted_at IS NULL`,
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

export const updateLoan = async (loan: { id: string; value: number; name: string; about: string; }) => {
    const db = await connectToDatabase()

    const setClause = Object.keys(loan).map(key => `${key} = ?`).join(', ');
    const values = [...Object.values(loan), loan.id];

    return new Promise((resolve, reject) => {

        db.transaction((tx) => {
            tx.executeSql(
                `UPDATE Loans SET ${setClause} WHERE id = ?`,
                values,
                (_, result) => resolve(result),
                (_, error) => reject(error)
            );
        });
    })
};

export const deleteLoan = async (id: string) => {
    const db = await connectToDatabase()
    return new Promise((resolve, reject) => {

        db.transaction((tx) => {
            tx.executeSql(
                `UPDATE Loans SET deleted_at = datetime('now', '-3 hours') WHERE id = ?`,
                [id],
                (_, result) => resolve(result),
                (_, error) => reject(error)
            );
        });
    })
};