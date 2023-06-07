require("dotenv").config();

// eslint-disable-next-line import/no-extraneous-dependencies
const { faker } = require("@faker-js/faker");

// get variables from .env file

const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

// fill the database

const mysql = require("mysql2/promise");

const seed = async () => {
  const database = await mysql.createConnection({
    host: DB_HOST,
    port: DB_PORT,
    user: DB_USER,
    password: DB_PASSWORD,
    multipleStatements: true,
  });

  await database.query(`use ${DB_NAME}`);

  /* ************************************************************************* */
  // that's where you should generate your seed data
  /* ************************************************************************* */

  // optional: truncate tables

  await database.query("truncate item");

  // insert fake data

  const queries = [];

  for (let i = 0; i < 10; i += 1) {
    queries.push(
      database.query("insert into item(title) values (?)", [faker.lorem.word()])
    );
  }

  /* ************************************************************************* */

  await Promise.all(queries);

  database.end();
};

try {
  seed();

  console.info(`${DB_NAME} filled from ${__filename} 🌱`);
} catch (err) {
  console.error(err);
}
