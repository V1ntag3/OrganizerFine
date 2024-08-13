import { SQLiteDatabase } from "react-native-sqlite-storage";

export const createTables = async (db: SQLiteDatabase) => {
  const RevenueSpendings = `CREATE TABLE IF NOT EXISTS RevenueSpendings (
        id TEXT PRIMARY KEY,
        type INTEGER NOT NULL,
        category INTEGER,
        about TEXT NOT NULL,
        value REAL NOT NULL,
        created_at TEXT DEFAULT (datetime('now', '-3 hours')),
        updated_at TEXT DEFAULT (datetime('now', '-3 hours')),
        deleted_at TEXT DEFAULT NULL
    );`;

  const Transactions = `CREATE TABLE IF NOT EXISTS Transactions (
        id TEXT PRIMARY KEY,
        value REAL NOT NULL,
        about TEXT NOT NULL,
        loan_id TEXT NOT NULL,
        created_at TEXT DEFAULT (datetime('now', '-3 hours')),
        updated_at TEXT DEFAULT (datetime('now', '-3 hours')),
        deleted_at TEXT DEFAULT NULL,
        FOREIGN KEY (loan_id) REFERENCES Loans(id)
    );`;

  const Loans = `CREATE TABLE IF NOT EXISTS Loans (
        id TEXT PRIMARY KEY,
        name TEXT NOT NULL,
        about TEXT NOT NULL,
        value REAL NOT NULL,
        amount_paid REAL DEFAULT 0,
        created_at TEXT DEFAULT (datetime('now', '-3 hours')),
        updated_at TEXT DEFAULT (datetime('now', '-3 hours')),
        deleted_at TEXT DEFAULT NULL
    );`;

  try {
    await db.executeSql(RevenueSpendings);
    await db.executeSql(Loans);
    await db.executeSql(Transactions);
  } catch (error) {
    console.error(error);
    throw Error(`Failed to create tables`);
  }
};
