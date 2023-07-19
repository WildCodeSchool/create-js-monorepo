const express = require("express");

const router = express.Router();

const itemControllers = require("./controllers/itemControllers");
const competenceControllers = require("./controllers/CompetenceControllers");

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

router.get("/softskills", competenceControllers.getAllSoftSkills);
router.get("/hardskills", competenceControllers.getAllHardSkills);

module.exports = router;
