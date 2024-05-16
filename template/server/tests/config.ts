/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */

// Load environment variables from .env file
import "dotenv/config";

// Import the database client and tables from database
import database from "../database/client";

// Restore all mocked functions after each test
afterEach(() => {
  jest.restoreAllMocks();
});

// Close the database connection after all tests have run
afterAll((done) => {
  database.end().then(done);
});

export { database };

export type { Rows, Result } from "../database/client";

export { default as tables } from "../database/tables";

// Import the supertest library for making HTTP requests
import supertest from "supertest";

// Import the Express application from app/config.js
import app from "../app/config";

export const request = supertest(app);
