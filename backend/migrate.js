require("dotenv").config();

const fs = require("node:fs");
const path = require("node:path");

// build schema path

const schema = path.join(__dirname, "database", "schema.sql");

// get variables from .env file

const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

// update the database

const mysql = require("mysql2/promise");

const migrate = async () => {
  const database = await mysql.createConnection({
    host: DB_HOST,
    port: DB_PORT,
    user: DB_USER,
    password: DB_PASSWORD,
    multipleStatements: true,
  });

  await database.query(`drop database if exists ${DB_NAME}`);
  await database.query(`create database ${DB_NAME}`);
  await database.query(`use ${DB_NAME}`);

  const sql = fs.readFileSync(schema, "utf8");

  await database.query(sql);

  database.end();
};

try {
  migrate();

  console.info(`${DB_NAME} updated from ${schema} 🆙`);
} catch (err) {
  console.error(err);
}
