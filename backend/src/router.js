const express = require("express");

const router = express.Router();

const { hashPassword } = require("./services/auth");

const userControllers = require("./controllers/userControllers");

// routes publiques

router.post("/users", hashPassword, userControllers.add);

// routes privées quand login ok
const noteController = require("./controllers/noteControllers");

router.get("/notes", noteController.browse);

module.exports = router;
