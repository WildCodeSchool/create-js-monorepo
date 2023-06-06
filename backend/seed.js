require("dotenv").config();

// eslint-disable-next-line import/no-extraneous-dependencies
const { faker } = require("@faker-js/faker");
const fs = require("node:fs");
const path = require("node:path");

// check database exists

const databasePath = path.join(
  __dirname,
  "database",
  `${process.env.DB_NAME}.sqlite`
);

if (!fs.existsSync(databasePath)) {
  throw new Error(`${databasePath} doesn't exists. Did you run 'migrate'?`);
}

// open database

const sqlite = require("sqlite3").verbose();

const database = new sqlite.Database(databasePath);

/* ************************************************************************* */
// that's where you should generate your seed data
/* ************************************************************************* */

// optional: truncate tables

database.run("delete from item");

// insert fake data

for (let i = 0; i < 10; i += 1) {
  database.run(
    "insert into item(title) values (?)",
    [faker.lorem.word()],
    (err) => {
      if (err) {
        console.error(err);
      }
    }
  );
}

/* ************************************************************************* */

// close database

database.close((err) => {
  if (err) {
    console.error(err);
  } else {
    console.info(`${databasePath} filled with seeds 🌱`);
  }
});
