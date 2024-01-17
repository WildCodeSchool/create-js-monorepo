/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */

// Load environment variables from .env file
require("dotenv").config();

// Import Faker library for generating fake data
const { faker } = require("@faker-js/faker");

// Import database client
const database = require("./database/client");

const seed = async () => {
  try {
    // Declare an array to store the query promises
    // See why here: https://eslint.org/docs/latest/rules/no-await-in-loop
    const queries = [];

    /* ************************************************************************* */

    // Generating Seed Data

    // Optional: Truncate tables (remove existing data)

    // await database.query("truncate product");
    // await database.query("truncate user");
    await database.query("truncate item");

    // Insert fake data into the 'item' table
    for (let i = 0; i < 10; i += 1) {
      queries.push(
        database.query("insert into item(title) values (?)", [
          faker.lorem.word(),
        ])
      );
    }

    /* ************************************************************************* */

    // Wait for all the insertion queries to complete
    await Promise.all(queries);

    const queriesUser = [];

    // Insert fake data into the 'user' table
    for (let i = 0; i < 10; i += 1) {
      queriesUser.push(
        database.query(
          "insert into user(email, password, is_admin, avatar) values (?, ?, ?, ?)",
          [
            faker.lorem.words({ min: 1, max: 3 }),
            faker.lorem.words({ min: 1, max: 3 }),
            faker.datatype.boolean() ? 0 : 1,
            faker.lorem.words({ min: 1, max: 3 }),
          ]
        )
      );
    }

    // Wait for all the insertion queries to complete
    await Promise.all(queriesUser);

    const queriesProduct = [];

    // Insert fake data into the 'product' table

    queries.push(
      database.query(
        "insert into product(name, brand, object, price, is_in_card, vouncher) values (?,?,?,?,?,?)",
        [
          faker.lorem.words({ min: 1, max: 3 }),
          faker.lorem.words({ min: 1, max: 3 }),
          faker.lorem.words({ min: 1, max: 3 }),
          faker.number.float({ min: 1, max: 3 }),
          faker.datatype.boolean() ? 0 : 1,
          faker.lorem.words({ min: 1, max: 3 }),
        ]
      )
    );

    // Wait for all the insertion queries to complete
    await Promise.all(queriesProduct);

    // Close the database connection
    database.end();

    console.info(`${database.databaseName} filled from ${__filename} 🌱`);
  } catch (err) {
    console.error("Error filling the database:", err.message);
  }
};

// Run the seed function
seed();
