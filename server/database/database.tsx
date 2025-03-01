import { enablePromise, openDatabase, SQLiteDatabase } from "react-native-sqlite-storage";

enablePromise(true);

export const connectToDatabase = async (): Promise<SQLiteDatabase> => {
  return new Promise((resolve, reject) => {
    const db = openDatabase(
      { name: "organizer.db", location: "default" },
      () => {
        console.log("✅ Banco de dados aberto com sucesso!");
        resolve(db as SQLiteDatabase);
      },
      (error) => {
        console.error("❌ Erro ao conectar ao banco:", error);
        reject(new Error("Could not connect to database: " + error.message));
      }
    );

    if (!db) {
      console.error("❌ openDatabase retornou null.");
      reject(new Error("openDatabase retornou null"));
    }
  });
};

