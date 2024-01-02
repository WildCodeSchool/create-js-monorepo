// Load environment variables from .env file
require("dotenv").config();

const fs = require("node:fs");
const path = require("node:path");

// Import database client
const database = require("../database/client");

const fixtures = path.join(__dirname, "..", "database", "fixtures");

const seed = async () => {
  try {
    const dependencyMap = {};

    // Construct each seeder
    fs.readdirSync(fixtures)
      .filter((filePath) => !filePath.startsWith("Abstract"))
      .forEach((filePath) => {
        // eslint-disable-next-line import/no-dynamic-require, global-require
        const SeederClass = require(path.join(fixtures, filePath));

        const seeder = new SeederClass();

        dependencyMap[SeederClass] = seeder;
      });

    // Sort seeders according to their dependencies
    const sortedSeeders = [];

    // The recursive solver
    const solveDependencies = (n) => {
      for (const DependencyClass of n.dependencies) {
        const dependency = dependencyMap[DependencyClass];

        if (!sortedSeeders.includes(dependency)) {
          solveDependencies(dependency);
        }
      }

      if (!sortedSeeders.includes(n)) {
        sortedSeeders.push(n);
      }
    };

    // Solve dependencies for each seeder
    for (const seeder of Object.values(dependencyMap)) {
      solveDependencies(seeder);
    }

    // Truncate tables (starting from the depending ones)
    for (const seeder of [...sortedSeeders].reverse()) {
      if (seeder.truncate) {
        // Use delete instead of truncate to bypass foreign key constraint
        // Wait for the delete promise to complete
        // We do want to wait in a loop to satisfy dependencies
        // eslint-disable-next-line no-await-in-loop
        await database.query(`delete from ${seeder.table}`);
      }
    }

    // Run each seeder
    for (const seeder of sortedSeeders) {
      seeder.run();

      // Wait for all the insertion promises to complete
      // We do want to wait in a loop to satisfy dependencies
      // eslint-disable-next-line no-await-in-loop
      await Promise.all(seeder.promises);
    }

    // Close the database connection
    database.end();

    console.info(
      `${database.databaseName} filled from '${path.normalize(fixtures)}' 🌱`
    );
  } catch (err) {
    console.error("Error filling the database:", err.message, err.stack);
  }
};

// Run the seed function
seed();
