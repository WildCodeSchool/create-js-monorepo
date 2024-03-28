// Get variables from .env file for database connection
// const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

// Create a connection pool to the database
const mysql = require("mysql2/promise");

const client = mysql.createPool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// Try to get a connection to the database
client
  .getConnection()
  .then((connection) => {
    console.info(`La base de donnée ${process.env.DB_NAME} fonctionne au poil`);

    connection.release();
  })
  .catch((error) => {
    console.warn(
      "Warning:",
      "Failed to establish a database connection.",
      "Please check your database credentials in the .env file if you need a database access."
    );
    console.error("Error message:", error.message);
  });

// Store database name into client for further uses
client.databaseName = process.env.DB_NAME;

// Ready to export
module.exports = client;
