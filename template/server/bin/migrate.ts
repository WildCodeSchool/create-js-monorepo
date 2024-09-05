// Load environment variables from .env file
import "dotenv/config";

import fs from "node:fs";
import path from "node:path";

// Build the path to the schema SQL file
const schema: string = path.join(__dirname, "../../server/database/schema.sql");

// Get database connection details from .env file
const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

// Update the database schema
import mysql from "mysql2/promise";

/**
 * Migrates the database schema to the latest version.
 *
 * This function reads the SQL statements from the file specified in the
 * `schema` variable, creates a connection to the database, drops the existing
 * database if it exists, creates a new one, switches to it, executes the SQL
 * statements to update the schema, and then closes the connection.
 *
 */
const migrate: () => Promise<void> = async () => {
  // Read the SQL statements from the schema file
  const sql: string = fs.readFileSync(schema, "utf8");
  
  // Create a connection to the database
  const database: mysql.Connection = await mysql.createConnection({
    host: DB_HOST,
    port: DB_PORT ? parseInt(DB_PORT, 10) : undefined, // Ensure DB_PORT is a number
    user: DB_USER,
    password: DB_PASSWORD,
    multipleStatements: true, // Allow multiple SQL statements
  });
  
  // Drop the existing database if it exists
  await database.query(`DROP DATABASE IF EXISTS ${DB_NAME}`);
  
  // Create a new database
  await database.query(`CREATE DATABASE ${DB_NAME}`);
  
  // Switch to the newly created database
  await database.query(`USE ${DB_NAME}`);
  
  // Execute the SQL statements to update the schema
  await database.query(sql);
  
  // Close the connection
  await database.end();
};

// Run the migration function with .then and .catch
migrate()
  .then((): void => {
    console.info(`${DB_NAME} updated from '${path.normalize(schema)}' 🆙`);
  })
  .catch((err : unknown): void => {
    const { message, stack } = err as Error;
    console.error("Error updating the database:", message, stack);
  });