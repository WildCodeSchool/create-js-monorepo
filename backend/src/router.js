const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import pkmnControllers module for handling pkmn-related operations
const pkmnControllers = require("./controllers/pkmnControllers");

// Route to get a list of pkmns
router.get("/pokemons", pkmnControllers.browse);

// Route to get a specific pkmn by ID
router.get("/pokemons/:id", pkmnControllers.read);

// Route to add a new pkmn
router.post("/types", pkmnControllers.add);

/* ************************************************************************* */

module.exports = router;
