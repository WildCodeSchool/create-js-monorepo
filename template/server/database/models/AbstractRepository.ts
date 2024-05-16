// Import database client
import database from "../client";

import type { DatabaseClient, Result, Rows } from "../client";

// Provide database access through AbstractRepository class
abstract class AbstractRepository {
  table: string;
  database: DatabaseClient;

  constructor({ table }: { table: string }) {
    // Store the table name
    this.table = table;

    // Provide access to the database client
    this.database = database;
  }
}

// Ready to export
export default AbstractRepository;

export type { Result, Rows };
