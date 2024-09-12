import moment from 'moment';
import { connectToDatabase } from '../database';
import 'react-native-get-random-values';

export const generateLoanReport = async (loanId: string): Promise<any> => {
    const db = await connectToDatabase();

    return new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                `SELECT 
                 l.id AS loan_id,
                 l.name AS loan_name,
                 l.value AS loan_value,
                 l.amount_paid AS amount_paid,
                 t.id AS transaction_id,
                 t.value AS transaction_value,
                 t.about AS transaction_about,
                 t.created_at AS transaction_date
               FROM Loans l
               LEFT JOIN Transactions t ON l.id = t.loan_id
               WHERE l.id = ?
               ORDER BY l.name, t.created_at`,
                [loanId],
                (_, result) => {
                    const loansWithTransactions: any[] = [];

                    // Inicializa um mapa para armazenar empréstimos e suas transações associadas
                    const loanMap: { [key: string]: any } = {};

                    for (let i = 0; i < result.rows.length; i++) {
                        const row = result.rows.item(i);

                        // Se o empréstimo ainda não foi adicionado ao mapa, adicione-o
                        if (!loanMap[row.loan_id]) {
                            loanMap[row.loan_id] = {
                                id: row.loan_id,
                                name: row.loan_name,
                                value: row.loan_value,
                                amount_paid: row.amount_paid,
                                transactions: [] // Array para armazenar transações associadas
                            };
                        }

                        // Se houver uma transação, adicione-a ao array de transações
                        if (row.transaction_id) {
                            loanMap[row.loan_id].transactions.push({
                                transaction_id: row.transaction_id,
                                transaction_value: row.transaction_value,
                                transaction_about: row.transaction_about,
                                transaction_date: row.transaction_date
                            });
                        }
                    }

                    // Converte o mapa para um array
                    for (const key in loanMap) {
                        loansWithTransactions.push(loanMap[key]);
                    }

                    resolve(loansWithTransactions[0]);
                },
                (_, error) => reject(error)
            );
        });
    });
};
