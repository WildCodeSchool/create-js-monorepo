const express = require("express");

const router = express.Router();

const itemControllers = require("./controllers/itemControllers");
const competenceControllers = require("./controllers/CompetenceControllers");
const projetControllers = require("./controllers/ProjetControlers");

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

router.get("/softskills", competenceControllers.getAllSoftSkills);
router.get("/hardskills", competenceControllers.getAllHardSkills);

router.get("/projet", projetControllers.getAllProjet);

router.post("/softskills", competenceControllers.addSoftSkill);
router.post("/hardskills", competenceControllers.addHardSkill);

router.delete("/softskills/:id", competenceControllers.deleteSoftSkill);
router.delete("/hardskills/:id", competenceControllers.deleteHardSkill);

router.put("/softskills/:id", competenceControllers.updateSoftSkill);
router.put("/hardskills/:id", competenceControllers.updateHardSkill);

module.exports = router;
