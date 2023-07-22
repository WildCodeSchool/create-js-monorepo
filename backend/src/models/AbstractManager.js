// Get variables from .env file for database connection
const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

// Create a connection pool to the database
const mysql = require("mysql2/promise");

const database = mysql.createPool({
  host: DB_HOST,
  port: DB_PORT,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
});

// Try to get a connection to the database
database
  .getConnection()
  .then(() => {
    console.info(`Connected to database ${DB_NAME}`);
  })
  .catch((error) => {
    console.warn(
      "Warning:",
      "Failed to establish a database connection.",
      "Please check your database credentials in the .env file if you need a database access."
    );
    console.error("Error message:", error.message);
  });

// Provide database access through AbstractManager class
class AbstractManager {
  constructor({ table }) {
    this.table = table;
    this.database = database;
  }
}

// Ready to export
module.exports = AbstractManager;
