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
          "insert into user(email, hashedPwd, is_admin, avatar) values (?, ?, ?, ?)",
          [
            faker.lorem.words({ min: 1, max: 3 }),
            faker.lorem.words({ min: 1, max: 3 }),
            faker.datatype.boolean() ? 0 : 1,
            faker.lorem.words({ min: 1, max: 3 }),
          ]
        )
      );
    }

    const userAdminQueries = () =>
      database.query(
        "INSERT INTO user(email, hashedPwd, is_admin, avatar) VALUES (?, ?, ?, ?)",
        [
          "creascript@gmail.com",
          "$argon2id$v=19$m=65536,t=5,p=1$QZ8jcG2CDQf2DoFzx4sYWw$GuyTq8SnnrO2WsgzLcfw43o0f9j09og11OrsuHwrESE",
          false,
          "https://images.pexels.com/photos/1152188/pexels-photo-1152188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        ]
      );

    queries.push(userAdminQueries());

    // Wait for all the insertion queries to complete
    await Promise.all(queriesUser);

    // Insert fake data into the 'product' table

    queries.push(
      database.query(
        "insert into product(name, object, price, is_in_card, vouncher) values (?,?,?,?,?)",
        [
          "Prolonger",
          "https://www.lorealprofessionnel.in/-/media/master/in/products/new-packshot-images/pro-longer-_shampoo.png",
          21.24,
          true,
          "Voucher123",
        ]
      )
    );

    queries.push(
      database.query(
        "insert into product(name, object, price, is_in_card, vouncher) values (?,?,?,?,?)",
        [
          "Resistance",
          "https://www.hairgallery.fr/image/cache/data/A_HG013409-500x500.jpg?v=1",
          27.5,
          true,
          "Voucher124",
        ]
      )
    );

    // Wait for all the insertion queries to complete
    await Promise.all(queries);

    // Close the database connection
    database.end();

    console.info(`${database.databaseName} filled from ${__filename} 🌱`);
  } catch (err) {
    console.error("Error filling the database:", err.message);
  }
};

// Run the seed function
seed();
