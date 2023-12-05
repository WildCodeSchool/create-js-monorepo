// Import access to database tables
const tables = require("../tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    // Fetch all types from the database
    const types = await tables.pktype.readAll();

    // Respond with the types in JSON format
    res.json(types);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const read = async (req, res, next) => {
  try {
    // Fetch a specific type from the database based on the provided ID
    const pktype = await tables.pktype.read(req.params.id);

    // If the type is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the type in JSON format
    if (pktype == null) {
      res.sendStatus(404);
    } else {
      res.json(pktype);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The E of BREAD - Edit (Update) operation
// This operation is not yet implemented

// The A of BREAD - Add (Create) operation
const add = async (req, res, next) => {
  // Extract the type data from the request body
  const pktype = req.body;

  try {
    // Insert the type into the database
    const insertId = await tables.type.create(pktype);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted type
    res.status(201).json({ insertId });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The D of BREAD - Destroy (Delete) operation
// This operation is not yet implemented

// Ready to export the controller functions
module.exports = {
  browse,
  read,
  // edit,
  add,
  // destroy,
};
