// Load environment variables from .env file
require("dotenv").config();

const fs = require("node:fs");
const path = require("node:path");

// Import database client
const database = require("../database/client");

const fixtures = path.join(__dirname, "..", "database", "fixtures");

const seed = async () => {
  try {
    const queries = [];

    // Run each seeder
    fs.readdirSync(fixtures)
      .filter((filePath) => !filePath.startsWith("Abstract"))
      .forEach((filePath) => {
        // eslint-disable-next-line import/no-dynamic-require, global-require
        const SeederClass = require(path.join(fixtures, filePath));

        const seeder = new SeederClass();

        seeder.run();

        // Store the queries
        queries.push(...seeder.queries);
        console.info(seeder.queries.length);
      });

    // Wait for all the insertion queries to complete
    await Promise.all(queries);

    // Close the database connection
    database.end();

    console.info(
      `${database.databaseName} filled from '${path.normalize(fixtures)}' 🌱`
    );
  } catch (err) {
    console.error("Error filling the database:", err.message);
  }
};

// Run the seed function
seed();
