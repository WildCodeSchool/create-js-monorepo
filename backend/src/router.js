const express = require("express");

const router = express.Router();

const { hashPassword } = require("./services/auth");

const userControllers = require("./controllers/userControllers");

// routes publiques
router.post("/users", hashPassword, userControllers.add);

module.exports = router;
