// Load environment variables from .env file
import "dotenv/config";

import fs from "node:fs";
import path from "node:path";

// Import database client
import database from "../database/client";

import type { AbstractSeeder } from "../database/fixtures/AbstractSeeder";

const fixturesPath: string = path.join(__dirname, "../database/fixtures");


/**
 * Populate the database with seed data from the `fixtures` directory.
 *
 * This function reads all files in the `fixtures` directory, constructs an
 * instance of each seeder, and sorts them according to their dependencies.
 * Then, it truncates each table and runs each seeder in order of its
 * dependencies. Finally, it closes the database connection.
 *
 */

const seed: () => Promise<void> = async (): Promise<void> => {
  const dependencyMap: { [key: string]: AbstractSeeder } = {};
  
  // Construct each seeder
  const filePaths: string[] = fs
    .readdirSync(fixturesPath)
    .filter((filePath: string): boolean => !filePath.startsWith("Abstract"));
  
  for (const filePath of filePaths) {
    const { default: SeederClass } = await import(path.join(fixturesPath, filePath));
    const seeder = new SeederClass() as AbstractSeeder;
    dependencyMap[SeederClass.toString()] = seeder;
  }
  
  // Sort seeders according to their dependencies
  const sortedSeeders: AbstractSeeder[] = [];
  
  const solveDependencies: (n: AbstractSeeder) => void = (n: AbstractSeeder) => {
    for (const DependencyClass of n.dependencies) {
      const dependency: AbstractSeeder = dependencyMap[DependencyClass.toString()];
      
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
  
  // Truncate tables
  for (const seeder of sortedSeeders.toReversed()) {
    await database.query(`delete from ${seeder.table}`);
  }
  
  // Run each seeder
  for (const seeder of sortedSeeders) {
    seeder.run();
    await Promise.all(seeder.promises);
  }
  
  // Close the database connection
  database.end();
};

// Run the seed function with .then and .catch
seed()
  .then((): void => {
    console.info(
      `${process.env.DB_NAME} filled from '${path.normalize(fixturesPath)}' 🌱`
    );
  })
  .catch((err: unknown): void => {
    if (err instanceof Error) {
      console.error("Error filling the database:", err.message, err.stack);
    } else {
      console.error("Unexpected error:", err);
    }
  });