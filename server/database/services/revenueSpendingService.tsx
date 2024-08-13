import { connectToDatabase } from '../database';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

export const listRevenueSpendings = async (month: number, year: number) => {
    const db = await connectToDatabase()
    return new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                `SELECT * FROM RevenueSpendings WHERE strftime('%m', created_at) = ? AND strftime('%Y', created_at) = ?`,
                [month >= 10 ? month : '0' + month, year],
                (tx, results) => {
                    const rows = results.rows.raw();
                    resolve(rows);
                },
                (tx, error) => {
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
                'SELECT * FROM RevenueSpendings WHERE id = ?',
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

export const updateRevenueSpending = async (id: string, updates: { value: number; about: string; category: number; type: number; }) => {
    const db = await connectToDatabase()

    return new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                'UPDATE RevenueSpendings SET value = ?, about = ?, category = ?, type = ? WHERE id = ?',
                [updates.value, updates.about, updates.category, updates.type, id],
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
                'DELETE FROM RevenueSpendings WHERE id = ?',
                [id],
                (_, result) => resolve(result),
                (_, error) => reject(error)
            );
        });
    });
};