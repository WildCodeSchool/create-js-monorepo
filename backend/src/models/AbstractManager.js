require("dotenv").config();

const path = require("node:path");

// build database path

const databasePath = path.join(
  __dirname,
  "..",
  "..",
  "database",
  `${process.env.DB_NAME}.sqlite`
);

// open database

const sqlite = require("sqlite3").verbose();

const database = new sqlite.Database(databasePath, (err) => {
  if (err) {
    console.warn(
      "Warning:",
      "Unable to open database file.",
      "Did you create a .env file with a valid DB_NAME?",
      "Routes using models won't work as intended"
    );
  } else {
    console.info(`Using database: ${databasePath}`);
  }
});

class AbstractManager {
  constructor({ table }) {
    this.table = table;
    this.database = database;
  }
}

module.exports = AbstractManager;
