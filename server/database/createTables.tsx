import { SQLiteDatabase } from "react-native-sqlite-storage"

export const createTables = async (db: SQLiteDatabase) => {
    const RevenueSpendings =   `CREATE TABLE IF NOT EXISTS RevenueSpendings (
        id TEXT PRIMARY KEY,
        type INTEGER NOT NULL,
        category INTEGER,
        about TEXT NOT NULL,
        value REAL NOT NULL,
        created_at TEXT,
        deleted_at TEXT,
        updated_at TEXT
    );`

    try {
      await db.executeSql(RevenueSpendings)
    } catch (error) {
      console.error(error)
      throw Error(`Failed to create tables`)
    }
  }