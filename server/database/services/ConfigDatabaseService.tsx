import { Alert } from "react-native";
import RNFS from "react-native-fs";
import SQLite from "react-native-sqlite-storage";
import Share from "react-native-share";
import { Platform } from "react-native";
import { createTables } from "../createTables";

const DB_NAME = "organizer.db";

const getDatabasePath = () => {
    return Platform.OS === "ios"
        ? `${RNFS.DocumentDirectoryPath}/../Library/LocalDatabase/${DB_NAME}`
        : `${RNFS.DocumentDirectoryPath}/../databases/${DB_NAME}`;
};

const DB_PATH = getDatabasePath();

// 📂 Função para listar arquivos na pasta Library (Apenas para Debug)
export const listLibraryFiles = async () => {
    try {
        const path = `${RNFS.LibraryDirectoryPath}/LocalDatabase/`;
        const files = await RNFS.readDir(path);
        console.log("📂 Arquivos na pasta Library:", files.map(file => file.name));
    } catch (error) {
        console.error("❌ Erro ao listar arquivos:", error);
    }
};

// 🔄 Função para Compartilhar o Banco de Dados
export const shareDatabase = async () => {
    try {
        const filePath = DB_PATH;

        // Verifica se o banco existe antes de compartilhar
        const fileExists = await RNFS.exists(filePath);
        if (!fileExists) {
            Alert.alert("Erro", "Banco de dados não encontrado.");
            return;
        }

        // Compartilhar arquivo
        await Share.open({
            url: `file://${filePath}`,
            type: "application/octet-stream",
            failOnCancel: false, // Evita erro se o usuário cancelar
            saveToFiles: true, // No iOS, permite salvar no app "Arquivos"
        });

        console.log("✅ Banco de dados compartilhado com sucesso!");
    } catch (error) {
        console.error("❌ Erro ao compartilhar banco:", error);
        Alert.alert("Erro", "Não foi possível compartilhar o banco.");
    }
};

// 🔄 Função para Substituir o Banco de Dados
export const replaceDatabase = async (fileUri: string) => {
    if (!fileUri) {
        Alert.alert("Erro", "Nenhum arquivo selecionado.");
        return;
    }

    try {
        // Verifica se o banco de dados atual existe
        const fileExists = await RNFS.exists(DB_PATH);

        const db = SQLite.openDatabase({ name: DB_NAME, location: "default" });

        if (db) {
            console.log("🛑 Fechando conexão com o banco antes de deletar...");
            (await db).close();
        }

        if (fileExists) {
            console.log("🔄 Removendo banco de dados antigo...");
            await RNFS.unlink(DB_PATH); // Exclui o banco atual antes de substituir
        }

        // Copia o novo banco de dados para o local correto
        await RNFS.copyFile(fileUri, DB_PATH);
        const newDb = await SQLite.openDatabase({ name: DB_NAME, location: "default" });

        console.log("📦 Criando tabelas...");
        await createTables(newDb);
        console.log("✅ Tabelas criadas!");
        Alert.alert("Sucesso", "Banco de dados substituído com sucesso!");
        console.log("✅ Novo banco copiado para:", DB_PATH);
    } catch (error) {
        console.error("❌ Erro ao substituir banco:", error);
        Alert.alert("Erro", "Falha ao substituir o banco de dados.");
    }
};

// 🔄 Função para Resetar o Banco de Dados
export const resetDatabase = async () => {
    try {
        console.log("📂 Resetando banco de dados...");

        const db = SQLite.openDatabase({ name: DB_NAME, location: "default" });

        if (db) {
            console.log("🛑 Fechando conexão com o banco antes de deletar...");
            (await db).close();
        }

        const exists = await RNFS.exists(DB_PATH);
        if (exists) {
            console.log("📁 Removendo banco de dados...");
            await RNFS.unlink(DB_PATH);
            console.log("✅ Banco removido com sucesso!");
        } else {
            console.log("⚠️ O banco já não existia.");
        }

        console.log("📦 Criando um novo banco de dados...");
        const newDb = await SQLite.openDatabase({ name: DB_NAME, location: "default" });

        console.log("📦 Criando tabelas...");
        await createTables(newDb);
        console.log("✅ Tabelas criadas!");

        console.log("✅ Novo banco de dados criado com sucesso!");

    } catch (error) {
        console.error("❌ Erro ao resetar banco:", error);
    }
};
