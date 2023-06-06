require("dotenv").config();

const fs = require("node:fs");
const path = require("node:path");

// drop database if exists

const databasePath = path.join(
  __dirname,
  "database",
  `${process.env.DB_NAME}.sqlite`
);

if (fs.existsSync(databasePath)) {
  fs.unlinkSync(databasePath);
}

// create database

const sqlite = require("sqlite3").verbose();

const database = new sqlite.Database(databasePath);

// read SQL from schema

const schemaPath = path.join(__dirname, "database", "schema.sql");

const sql = fs.readFileSync(schemaPath, "utf8");

// execute sql to create tables

database.exec(sql, (err) => {
  if (err) {
    console.error(err);
  }
});

// close database

database.close((err) => {
  if (err) {
    console.error(err);
  } else {
    console.info(`${databasePath} updated from ${schemaPath} 🆙`);
  }
});
