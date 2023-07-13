const mysql = require("mysql");

const db = mysql.createConnection({
   host: "localhost",
   user: "root",
   password: "",
   database: "formulir",
});

db.connect((error) => {
   if (error) throw error;
   console.log("Successfully connected to database!");
});

module.exports = db;
