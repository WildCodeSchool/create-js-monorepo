// Import Faker library for generating fake data
import { faker } from "@faker-js/faker";

import type { Faker } from "@faker-js/faker";

// Import database client
import database from "../client";

import type { ResultType } from "../client";

// Declare an object to store created objects from their names
type Ref = object & { insertId: number };

const refs: { [key: string]: Ref } = {};

type SeederOptions = {
  table: string;
  truncate?: boolean;
  dependencies?: (typeof AbstractSeeder)[];
};

// Provide faker access through AbstractSeed class
abstract class AbstractSeeder implements SeederOptions {
  table: string;
  truncate: boolean;
  dependencies: (typeof AbstractSeeder)[];
  promises: Promise<void>[];
  faker: Faker;
  
  protected constructor({
    table,
    truncate = true,
    dependencies = [] as (typeof AbstractSeeder)[],
  }: SeederOptions) {
    this.table = table;

    this.truncate = truncate;

    this.dependencies = dependencies;

    this.promises = [];

    this.faker = faker;
  }

  async #doInsert(data: { refName?: string } & object): Promise<void> {
    // Extract ref name (if it exists)
    const { refName, ...values } = data;

    // Prepare the SQL statement: "insert into <table>(<fields>) values (<placeholders>)"
    const fields: string = Object.keys(values).join(",");
    const placeholders: string = new Array(Object.keys(values).length)
      .fill("?")
      .join(",");

    const sql = `insert into ${this.table}(${fields}) values (${placeholders})`;

    // Perform the query and if applicable store the insert id given the ref name
    const [result] = await database.query<ResultType>(sql, Object.values(values));

    if (refName != null) {
      const { insertId } = result;

      refs[refName] = { ...values, insertId };
    }
  }

  insert(data: { refName?: string } & object): void {
    this.promises.push(this.#doInsert(data));
  }
  
  /**
   * This function should be overridden by child classes and should
   * populate the database table associated with the seeder.
   */
  run(): void {
    throw new Error("You must implement this function");
  }

  /**
   * Get a reference to a created object by its name.
   *
   * @example
   * class UserSeeder extends AbstractSeeder {
   *   run() {
   *     this.insert({ email: "user1@example.com", refName: "user1" });
   *     this.insert({ email: "user2@example.com", refName: "user2" });
   *   }
   * }
   *
   * const user1Ref = userSeeder.getRef("user1");
   * expect(user1Ref).toHaveProperty("email", "user1@example.com");
   * expect(user1Ref).toHaveProperty("insertId", expect.any(Number));
   *
   */
  getRef(name: string): Ref {
    return refs[name];
  }
}

// Ready to export
export default AbstractSeeder;

export type { AbstractSeeder };
