/* eslint-disable camelcase */
// Import access to database tables
const tables = require("../tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    // Fetch all user_products from the database
    const user_products = await tables.user_product.readAll();

    // Respond with the user_products in JSON format
    res.status(200).json(user_products);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const read = async (req, res, next) => {
  try {
    // Fetch a specific user_product from the database based on the provided ID
    const user_product = await tables.user_product.read(req.params.id);

    // If the user_product is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the user_product in JSON format
    if (user_product == null) {
      res.sendStatus(404);
    } else {
      res.status(200).json(user_product);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The E of BREAD - Edit (Update) operation
// This operation is not yet implemented
const edit = async (req, res, next) => {
  // Extract the user_product data from the request body
  const user_product = req.body;

  try {
    // Insert the user_product into the database
    await tables.user_product.update(user_product, req.params.id);

    // Respond with HTTP 204 (No Content)
    res.sendStatus(204);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The A of BREAD - Add (Create) operation
const add = async (req, res, next) => {
  // Extract the user_product data from the request body
  const user_product = req.body;

  try {
    // Insert the user_product into the database
    const insertId = await tables.user_product.create(user_product);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted user_product
    res.status(201).json({ ...req.body, id: insertId });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The D of BREAD - Destroy (Delete) operation
// This operation is not yet implemented
const destroy = async (req, res, next) => {
  // Extract the user_product data from the request body
  try {
    // Insert the user_product into the database
    await tables.user_product.delete(req.params.id);

    // Respond with HTTP 204 (No Content)
    res.sendStatus(204);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// Ready to export the controller functions
module.exports = {
  browse,
  read,
  edit,
  add,
  destroy,
};
