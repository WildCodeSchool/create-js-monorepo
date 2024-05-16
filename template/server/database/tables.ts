/* ************************************************************************* */
// Register data repositories for tables
/* ************************************************************************* */

// Import the repository modules responsible for handling data operations on the tables
import ItemRepository from "./models/ItemRepository";

// Register each repository as data access point for its table
const tables = {
  item: new ItemRepository(),
};

/* ************************************************************************* */

// Use a Proxy to customize error messages when trying to access a non-existing table

// Export the Proxy instance with custom error handling
export default new Proxy(tables, {
  get(obj: object, prop: keyof object) {
    // Check if the property (table) exists in the tables object
    if (prop in obj) return obj[prop];

    // If the property (table) does not exist, throw a ReferenceError with a custom error message
    throw new ReferenceError(
      `tables.${prop} is not defined. Did you register it in ${__filename}?`
    );
  },
}) as typeof tables;
