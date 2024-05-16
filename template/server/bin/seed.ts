// Load environment variables from .env file
import "dotenv/config";

import fs from "node:fs";
import path from "node:path";

// Import database client
import database, { databaseName } from "../database/client";

import type { AbstractSeeder } from "../database/fixtures/AbstractSeeder";

const fixtures = path.join(__dirname, "..", "database", "fixtures");

const seed = async () => {
  try {
    const dependencyMap: { [key: string]: AbstractSeeder } = {};

    // Construct each seeder
    const filePaths = fs
      .readdirSync(fixtures)
      .filter((filePath: string) => !filePath.startsWith("Abstract"));

    for (const filePath of filePaths) {
      const { default: SeederClass } = await import(
        path.join(fixtures, filePath)
      );

      const seeder: AbstractSeeder = new SeederClass() as AbstractSeeder;

      dependencyMap[SeederClass.toString()] = seeder;
    }

    // Sort seeders according to their dependencies
    const sortedSeeders: AbstractSeeder[] = [];

    // The recursive solver
    const solveDependencies = (n: AbstractSeeder) => {
      for (const DependencyClass of n.dependencies) {
        const dependency = dependencyMap[DependencyClass.toString()];

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

    // The truncate solver
    const doTruncate = async (stack: AbstractSeeder[]) => {
      if (stack.length === 0) {
        return;
      }

      const firstOut = stack.pop() as AbstractSeeder;

      // Use delete instead of truncate to bypass foreign key constraint
      // Wait for the delete promise to complete
      await database.query(`delete from ${firstOut.table}`);

      await doTruncate(stack);
    };

    await doTruncate([...sortedSeeders]);

    // Run each seeder

    // The run solver
    const doRun = async (queue: AbstractSeeder[]) => {
      if (queue.length === 0) {
        return;
      }

      const firstOut = queue.shift() as AbstractSeeder;

      // Use delete instead of truncate to bypass foreign key constraint
      // Wait for the delete promise to complete
      firstOut.run();

      // Wait for all the insertion promises to complete
      // We do want to wait in a loop to satisfy dependencies
      await Promise.all(firstOut.promises);

      await doRun(queue);
    };

    await doRun(sortedSeeders);

    // Close the database connection
    database.end();

    console.info(
      `${databaseName} filled from '${path.normalize(fixtures)}' 🌱`
    );
  } catch (err) {
    const { message, stack } = err as Error;
    console.error("Error filling the database:", message, stack);
  }
};

// Run the seed function
seed();
