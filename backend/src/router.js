const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import itemControllers module for handling item-related operations
const itemControllers = require("./controllers/itemControllers");
const bookControllers = require("./controllers/bookControllers");

// Route to get a list of items
router.get("/items", itemControllers.browse);

router.get("/books", bookControllers.browse);
router.get("/books/:id", bookControllers.read); // pour récuperer livre selon id
router.post("/books", bookControllers.add); // créer une fiche livre
router.put("/books/:id", bookControllers.update); // modifier fiche livre selon son id
router.delete("/books/:id", bookControllers.destroy); // supprimer fiche livre selon id

// Route to get a specific item by ID
router.get("/items/:id", itemControllers.read);

// Route to add a new item
router.post("/items", itemControllers.add);

/* ************************************************************************* */

module.exports = router;
