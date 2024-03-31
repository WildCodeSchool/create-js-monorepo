const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import pagesControllers module for handling item-related operations
const itemControllers = require("./controllers/itemControllers");
const bookControllers = require("./controllers/bookControllers");
const readerControllers = require("./controllers/readerControllers");

// Import pagesMiddleware
const bookMiddlewares = require("./middlewares/bookMiddlewares");

// Items routes

// Route to get a list of items
router.get("/items", itemControllers.browse);

// Route to get a specific item by ID
router.get("/items/:id", itemControllers.read);

// Route to add a new item
router.post("/items", itemControllers.add);

// Books routes

// Route pour aller chercher la liste des livres de l'utilisateur
router.get("/books", bookMiddlewares.checkIfAdmin, bookControllers.browse);

// pour récuperer un livre spécifique selon son id
router.get("/books/:id", bookControllers.read);

// Route pour créer une fiche livre
router.post(
  "/books",
  bookMiddlewares.validateBookInformations,
  bookControllers.add
);

// Route pour modifier la fiche d'un livre spécifique selon son id
router.put("/books/:id", bookControllers.update);

// Route pour supprimer la fiche d'un livre selon son id
router.delete("/books/:id", bookControllers.destroy);

// Routes pour les utilisateurs reader

// route pour afficher tous les utilisateurs
router.get("/readers", readerControllers.browse);

// Route to add a new reader
router.post("/readers", readerControllers.add);
router.get("/readers/:id", readerControllers.read);

module.exports = router;
