/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */

// Load environment variables from .env file
require("dotenv").config();

const request = require("supertest");

const app = require("../app/config");
const database = require("../database/client");
const tables = require("../database/tables");

afterEach(() => {
  jest.restoreAllMocks();
});

afterAll((done) => {
  database.end().then(done);
});

module.exports = { app, database, request, tables };
