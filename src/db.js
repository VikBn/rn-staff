import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('client.db');

export class DB {
    static init() {
        return new Promise((resolve, reject) => {
            db.transaction(tx => {
                tx.executeSql(
                    'CREATE TABLE IF NOT EXISTS clients (id INTEGER PRIMARY KEY NOT NULL, firstName TEXT NOT NULL, img TEXT)',
                    [],
                    resolve,
                    (_, error) => reject(error)
                )
            })
        })
    }

    static getClients() {
        return new Promise((resolve, reject) => {
            db.transaction(tx => {
                tx.executeSql(
                    'SELECT * FROM clients',
                    [],
                    (_, result) => resolve(result.rows._array),
                    (_, error) => reject(error)
                )
            })
        })
    }

    static createClient({firstName, img}) {
        return new Promise((resolve, reject) => {
            db.transaction(tx => {
                tx.executeSql(
                    `INSERT INTO clients (firstName, img) VALUES (?, ?)`,
                    [firstName, img],
                    (_, result) => resolve(result.insertId),
                    (_, error) => reject(error)
                )
            })
        })
    }
}