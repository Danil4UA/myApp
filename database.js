import mysql from "mysql2";

const pool = mysql.createPool({
    host: "127.0.0.1",
    user: "root",
    password: "24683690d",
    database: "application"
}).promise();

export default pool;