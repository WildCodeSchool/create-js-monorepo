const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import pkmnControllers module for handling pkmn-related operations
const pkmnControllers = require("./controllers/pkmnControllers");
const typeControllers = require("./controllers/typeControllers");

// Route to get a list of pkmns
router.get("/pokemons", pkmnControllers.browse);

// Route to get a specific pkmn by ID
router.get("/pokemons/:id", pkmnControllers.read);
/* ************************************************************************* */

// Route to get a list of types
router.get("/types", typeControllers.browse);

// Route to get a specific type by ID
router.get("/types/:id", typeControllers.read);

module.exports = router;
