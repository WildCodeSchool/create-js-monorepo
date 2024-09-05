import client from "./client";
import {PoolConnection} from "mysql2/promise";

// Add return type to the client.getConnection() function
const connectionPromise : Promise<PoolConnection> = client.getConnection()

// Try to get a connection to the database
connectionPromise
  .then((connection: PoolConnection): void => {
    console.info(`Using database ${process.env.DB_NAME}`);
    
    // Release the connection after usage
    connection.release();
  })
  .catch((error: unknown): void => {
    // Narrowing the error type to Error
    if (error instanceof Error) {
      console.warn(
        "Warning:",
        "Failed to establish a database connection.",
        "Please check your database credentials in the .env file if you need database access."
      );
      console.warn(error.message);
    } else {
      console.warn("An unexpected error occurred:", error);
    }
  });