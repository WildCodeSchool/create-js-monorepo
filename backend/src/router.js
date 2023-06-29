const express = require("express");

const router = express.Router();

const { validatePhone } = require("./services/validatorsPhone");
const { validateUser } = require("./services/validatorsUser");
const { getUserByEmailMiddleware } = require("./controllers/authControllers");
const {
  hashPassword,
  verifyPassword,
  verifyToken,
  logout,
} = require("./services/auth");

// Public Routes (Auth)
router.post("/api/login", getUserByEmailMiddleware, verifyPassword);
router.get("/api/logout", verifyToken, logout);

// Private Routes
const userControllers = require("./controllers/userControllers");

router.get("/api/users", userControllers.browse);
router.get("/api/users/:id", userControllers.read);
router.put("/api/users/:id", userControllers.edit);
router.post("/api/users", validateUser, hashPassword, userControllers.add);
router.delete("/api/users/:id", userControllers.destroy);

const phoneControllers = require("./controllers/phoneControllers");

router.get("/api/phones", phoneControllers.browse);
router.get("/api/phones/:id", phoneControllers.read);
router.get("/api/phones/:brand", phoneControllers.select);
router.put("/api/phones/:id", phoneControllers.edit);
router.post("/api/phones", validatePhone, phoneControllers.add);
router.delete("/api/phones/:id", phoneControllers.destroy);

const itemControllers = require("./controllers/itemControllers");

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

module.exports = router;
