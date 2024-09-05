// Load environment variables from .env file
import "dotenv/config";

import fs from "node:fs";

import databaseClient from "../database/client";

import type { RowsType } from "../database/client";
import DoneCallback = jest.DoneCallback;

// Close the database connection after all tests have run
afterAll((done: DoneCallback): void => {
  databaseClient.end().then(done);
});

// Test suite for environment installation
describe("Installation", (): void => {
  // Test: Check if the .env file exists
  test("You have created /server/.env", async () => {
    expect(fs.existsSync(`${__dirname}/../.env`)).toBe(true);
  });

  // Test: Check if the .env.sample file exists
  test("You have retained /server/.env.sample", async (): Promise<void> => {
    expect(fs.existsSync(`${__dirname}/../.env.sample`)).toBe(true);
  });

  // Test: Check if the .env file is properly filled with valid database connection information
  test("You have filled /server/.env with valid information to connect to your database", async (): Promise<void> => {
    expect.assertions(0);

    try {
      // Check if the connection is successful
      await databaseClient.getConnection();
    } catch (error) {
      expect(error).toBeDefined();
    }
  });

  // Test: Check if the database migration scripts have been executed
  test("You have executed the db:migrate scripts", async (): Promise<void> => {
    // Query the 'item' table to check if any data has been inserted
    const [rows] = await databaseClient.query<RowsType>("select * from item");

    // Expecting rows to be returned, indicating successful migration
    expect(rows.length).toBeGreaterThanOrEqual(0);
  });
});
