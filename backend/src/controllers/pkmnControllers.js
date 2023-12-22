// Import access to database tables
const tables = require("../tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    // Fetch all pokemons from the database
    const pokemons = await tables.pokemon.readAll(req.query);

    // Respond with the pokemons in JSON format
    res.json(pokemons);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const read = async (req, res, next) => {
  try {
    // Fetch a specific pokemon from the database based on the provided ID
    const pokemon = await tables.pokemon.read(req.params.id);

    // If the pokemon is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the pokemon in JSON format
    if (pokemon == null) {
      res.sendStatus(404);
    } else {
      res.json(pokemon);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The E of BREAD - Edit (Update) operation
const edit = async (req, res, next) => {
  const putPkmn = req.body;

  try {
    // Fetch a specific Type from the database based on the provided ID
    const result = await tables.pokemon.update(req.params.id, putPkmn);

    // If the item is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the Type in JSON format
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

// The A of BREAD - Add (Create) operation
const add = async (req, res, next) => {
  // Extract the pokemon data from the request body
  const pokemon = req.body;

  try {
    // Insert the pokemon into the database
    const insertId = await tables.pokemon.create(pokemon);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted pokemon
    res.status(201).json({ insertId });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The D of BREAD - Destroy (Delete) operation
const destroy = async (req, res, next) => {
  try {
    await tables.pokemon.delete(req.params.id);
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
