// Load environment variables from .env file
import "dotenv/config";

// Check database connection
// Note: This is optional and can be removed if the database connection
// is not required when starting the application
import "../database/checkConnection";

// Import the Express application from ./app
import app from "./app";

// Get the port from the environment variables
const port: string | undefined = process.env.APP_PORT;

// Start the server and listen on the specified port
app
  .listen(port, (): void => {
    console.info(`Server is listening on port ${port}`);
  })
  .on("error", (err: Error): void => {
    console.error("Error:", err.message);
  });
