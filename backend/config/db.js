const mysql = require("mysql");

const db = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWD,
    database: process.env.DB
});

// test the connection
db.getConnection((err, connection) => {
    if (err) {
        console.error("Error while connecting to database");
        console.error("Error: ", err.code);
    } else {
        console.log("Database connected successfully!");
        connection.release(); // we don't need this connection anymore, it was only used to test
    }
});

module.exports = db;