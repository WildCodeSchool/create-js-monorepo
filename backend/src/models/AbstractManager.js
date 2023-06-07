// get variables from .env file

const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

// create a connection pool to the database

const mysql = require("mysql2/promise");

const database = mysql.createPool({
  host: DB_HOST,
  port: DB_PORT,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
});

// try to get a connection

database
  .getConnection()
  .then(() => {
    console.info(`Connected to database ${DB_NAME}`);
  })
  .catch(() => {
    console.warn(
      "Warning:",
      "Failed to get a DB connection.",
      "Did you create a .env file with valid credentials?",
      "Routes using models won't work as intended"
    );
  });

// provide database through AbstractManager class

class AbstractManager {
  constructor({ table }) {
    this.table = table;
    this.database = database;
  }
}

module.exports = AbstractManager;
