// Create an empty object to hold data managers for different tables
const tables = {};

/* ************************************************************************* */
// Register Data Managers for Tables
/* ************************************************************************* */

// Import the ItemManager module responsible for handling data operations for the "item" table
const ItemManager = require("./models/ItemManager");

// Register the ItemManager instance as the data manager for the "item" table
tables.item = new ItemManager();

/* ************************************************************************* */

// Use a Proxy to customize error messages when trying to access a non-existing table

// Export the Proxy instance with custom error handling
module.exports = new Proxy(tables, {
  get(obj, prop) {
    // Check if the property (table) exists in the tables object
    if (prop in obj) return obj[prop];

    // If the property (table) does not exist, throw a ReferenceError with a custom error message
    throw new ReferenceError(
      `tables.${prop} is not defined. Did you register it in ${__filename}?`
    );
  },
});
