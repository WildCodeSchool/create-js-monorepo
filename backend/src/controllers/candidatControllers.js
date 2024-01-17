// Import access to database tables
const tables = require("../tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    // Fetch all Candidats from the database
    const Candidats = await tables.Candidat.readAll();

    // Respond with the Candidats in JSON format
    res.json(Candidats);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const read = async (req, res, next) => {
  try {
    // Fetch a specific Candidat from the database based on the provided ID
    const Candidat = await tables.Candidat.read(req.params.id);

    // If the Candidat is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the Candidat in JSON format
    if (Candidat == null) {
      res.sendStatus(404);
    } else {
      res.json(Candidat);
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
  // Extract the Candidat data from the request body
  const Candidat = req.body;

  try {
    // Insert the Candidat into the database
    const insertId = await tables.Candidat.create(Candidat);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted Candidat
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
