import mysql from 'mysql';
import dbInfos from './assets/dbConnectInfo.mjs';

const connection = mysql.createConnection(dbInfos);

connection.connect(function(err) {
    if (err) {
        console.error('Error connecting database : ' + err.stack);
        return;
    }
    console.log('Connected to database as id ' + connection.threadId);
});

export default class Database {

    constructor() {}

    query(query) {
        return new Promise((resolve, reject) => {
            connection.query(query, (err, result) => {
                if (err) reject(err);
                resolve(result);
            })
        });
    }

}