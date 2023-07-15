const express = require("express");

const router = express.Router();

const { hashPassword } = require("./services/auth");

const userControllers = require("./controllers/userControllers");

// routes publiques

router.post("/users", hashPassword, userControllers.add);

// routes privées quand login ok
const noteControllers = require("./controllers/noteControllers");

router.get("/notes", noteControllers.browse);
router.get("/notes/:id", noteControllers.read);
router.post("/notes", noteControllers.add);
router.put("/notes/:id", noteControllers.edit);
router.delete("/notes/:id", noteControllers.destroy);

module.exports = router;
