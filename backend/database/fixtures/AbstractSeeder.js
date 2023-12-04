/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */

// Import Faker library for generating fake data
const { faker } = require("@faker-js/faker");

// Import database client
const database = require("../client");

// Provide database access through AbstractSeed class
class AbstractSeeder {
  constructor({ table, truncate }) {
    // thx https://www.codeheroes.fr/2017/11/08/js-classes-abstraites-et-interfaces/
    if (this.constructor === AbstractSeeder) {
      throw new TypeError(
        "Abstract class 'AbstractSeed' cannot be instantiated directly"
      );
    }

    this.table = table;

    this.queries = [];

    // Optional: Truncate tables (remove existing data)
    if (truncate) {
      this.queries.push(database.query(`truncate ${this.table}`));
    }

    this.faker = faker;
  }

  save(data) {
    // Prepare the SQL statement: "insert into <table>(<fields>) values (<some ?>)"
    const commaSeparatedFields = Object.keys(data).join(",");
    const questionMarks = [..."?".repeat(Object.keys(data).length)].join(",");

    const sql = `insert into ${this.table}(${commaSeparatedFields}) values (${questionMarks})`;

    // Perform the query and store the promise
    this.queries.push(database.query(sql, Object.values(data)));
  }

  // eslint-disable-next-line class-methods-use-this
  run() {
    throw new Error("You must implement this function");
  }
}

// Ready to export
module.exports = AbstractSeeder;
