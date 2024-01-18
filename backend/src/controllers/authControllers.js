// Import access to database tables
const tables = require("../tables");

// The B of BREAD - Browse (Read All) operation
/*
const browse = async (req, res, next) => {
  try {
    // Fetch all auth from the database
    const auth = await tables.auth.readAll();
    // Respond with the auth in JSON format
    res.status(200).json(auth);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};
*/

// Log In
const log = async (req, res, next) => {
  try {
    const login = await tables.auth.readByEmail(
      req.body.email,
      req.body.password
    );
    if (login) {
      res.sendStatus(200);
    } else {
      res.sendStatus(403);
    }
  } catch (err) {
    next(err);
  }
};

// The E of BREAD - Edit (Update) operation
// This operation is not yet implemented
/*
const update = async (req, res, next) => {
  // Extract the auth data from the request body
  const auth = req.body;

  try {
    // Fetch a specific auth from the database based on the provided ID
    const result = await tables.auth.update(req.params.id, auth);

    // If the auth is not found, respond with HTTP 404 (Not Found)
    if (result.affectedRows === 1) {
      res.sendStatus(204);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};
*/

// The A of BREAD - Add (Create) operation
/*
const add = async (req, res, next) => {
  // Extract the auth data from the request body
  const auth = req.body;

  try {
    // Insert the auth into the database
    const insertId = await tables.auth.create(auth);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted auth
    res.status(201).json({ insertId });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};
*/

// The D of BREAD - Destroy (Delete) operation
// This operation is not yet implemented
/*
const destroy = async (req, res, next) => {
  try {
    await tables.auth.delete(req.params.id);
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};
*/

// Ready to export the controller functions
module.exports = {
  /*
  browse,
  */
  log,
  /*
  update,
  */
  /*
  add,
  */
  /*
  destroy,
  */
};
