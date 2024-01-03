import mysql from 'mysql2/promise';

const db = mysql.createPool({
  host: 'localhost',
    user: 'root',
    password: 'vaibhav.aurasoft',
    database: 'schools',
});

export default db;
