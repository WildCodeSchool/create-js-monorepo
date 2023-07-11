const express = require("express");

const router = express.Router();

const { hashPassword } = require("./services/auth");

const userControllers = require("./controllers/userControllers");

// routes publiques
router.get("/users", userControllers.browse);
router.post("/users", hashPassword, userControllers.add);

module.exports = router;
