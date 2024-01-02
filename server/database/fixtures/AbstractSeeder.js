/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */

// Import Faker library for generating fake data
const { faker } = require("@faker-js/faker");

// Import database client
const database = require("../client");

const refs = {};

// Provide database access through AbstractSeed class
class AbstractSeeder {
  constructor({ table, truncate = true, dependencies = [] }) {
    // thx https://www.codeheroes.fr/2017/11/08/js-classes-abstraites-et-interfaces/
    if (this.constructor === AbstractSeeder) {
      throw new TypeError(
        "Abstract class 'AbstractSeed' cannot be instantiated directly"
      );
    }

    this.table = table;

    this.truncate = truncate;

    this.dependencies = dependencies;

    this.promises = [];

    this.faker = faker;
    this.refs = refs;
  }

  async #doSave(data, name) {
    // Prepare the SQL statement: "insert into <table>(<fields>) values (<placeholders>)"
    const fields = Object.keys(data).join(",");
    const placeholders = new Array(Object.keys(data).length)
      .fill("?")
      .join(",");

    const sql = `insert into ${this.table}(${fields}) values (${placeholders})`;

    // Perform the query and if applicable store the insert id given the ref
    const [result] = await database.query(sql, Object.values(data));

    if (name != null) {
      const { insertId } = result;

      refs[name] = { ...data, insertId };
    }
  }

  save(data, name) {
    this.promises.push(this.#doSave(data, name));
  }

  // eslint-disable-next-line class-methods-use-this
  run() {
    throw new Error("You must implement this function");
  }

  // eslint-disable-next-line class-methods-use-this
  getRef(name) {
    return refs[name];
  }
}

// Ready to export
module.exports = AbstractSeeder;
