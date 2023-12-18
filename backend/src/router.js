const express = require("express");

const router = express.Router();
const pkmnControllers = require("./controllers/pkmnControllers");
const typeControllers = require("./controllers/typeControllers");

/* Pokemon routes */
router.get("/pokemons", pkmnControllers.browse);
router.get("/pokemons/:id", pkmnControllers.read);
router.post("/pokemons", pkmnControllers.add);
router.put("/pokemons", pkmnControllers.edit);
router.delete("/pokemons/:id", pkmnControllers.destroy);

/* Types routes */
router.get("/types", typeControllers.browse);
router.get("/types/:id", typeControllers.read);
router.post("/types", typeControllers.add);
router.put("/types", typeControllers.edit);
router.delete("/types/:id", typeControllers.destroy);

module.exports = router;
