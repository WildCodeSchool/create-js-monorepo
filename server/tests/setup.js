/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */

// Load environment variables from .env file
require("dotenv").config();

const request = require("supertest");

const app = require("../src/app");
const database = require("../database/client");
const tables = require("../database/tables");

afterAll((done) => {
  database.end().then(done);
});

module.exports = { app, database, request, tables };
