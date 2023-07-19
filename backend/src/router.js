const express = require("express");

const router = express.Router();

const {
  hashPassword,
  verifyPassword,
  verifyToken,
  logout,
} = require("./services/auth");

const {
  getUserByEmailMiddleWare,
  register,
} = require("./controllers/authControllers");
// routes publiques
// auth

router.post("/register", hashPassword, register);
router.post("/login", getUserByEmailMiddleWare, verifyPassword);
router.get("/logout", verifyToken, logout);

// routes privées
router.use(verifyToken);
const noteControllers = require("./controllers/noteControllers");

router.get("/notes", noteControllers.browse);
router.get("/notes/:id", noteControllers.read);
router.get("/notes/categories/:id", noteControllers.readByCategories);
router.post("/notes", noteControllers.add);
router.put("/notes/:id", noteControllers.edit);
router.delete("/notes/:id", noteControllers.destroy);

const categoriesControllers = require("./controllers/categoriesControllers");

router.get("/categories", categoriesControllers.browse);

module.exports = router;
