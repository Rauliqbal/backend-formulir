const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const db = require("./connection");
const response = require("./response");
const port = 8000;
const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
   res.send("Hello World");
});

// Get data all
app.get("/user", (req, res) => {
   const sql = "SELECT * FROM users";

   db.query(sql, (error, result) => {
      if (error) throw error;
      response(200, "Succesfully get data users", result, res);
   });
});

// Create data
app.post("/user", (req, res) => {
   const { name, email } = req.body;
   const sql = `INSERT INTO users (name,email) VALUES('${name}', '${email}')`;

   db.query(sql, (error, result) => {
      if (error) response(500, "Failed to create data!", result, res);
      if (result) {
         response(200, "Successfully to created data user!", result, res);
      }
   });
});

app.listen(port, () => console.log("Berjalan"));
