import mysql from 'mysql2/promise';
export const db = mysql.createConnection.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'test1'
});

