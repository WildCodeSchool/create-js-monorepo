const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import itemControllers module for handling item-related operations
const itemControllers = require("./controllers/itemControllers");

// Route to get a list of items
router.get("/api/items", itemControllers.browse);

// Route to get a specific item by ID
router.get("/api/items/:id", itemControllers.read);

// Route to add a new item
router.post("/api/items", itemControllers.add);

/* ************************************************************************* */

module.exports = router;
