const express = require("express");
const client = require("../database/client");

const router = express.Router();
const pkmnControllers = require("./controllers/pkmnControllers");
const typeControllers = require("./controllers/typeControllers");

router.get("/pokemons", pkmnControllers.browse);
router.get("/pokemons/:id", pkmnControllers.read);

router.get("/types", typeControllers.browse);
router.get("/types/:id", typeControllers.read);

const checkDelimiter = (query) => {
  return query.includes("WHERE") ? "AND" : "WHERE";
};

router.get("/pokemons", (req, res) => {
  let query = "select * from pokemon";
  const value = [];

  if (req.query.pktype) {
    query += ` ${checkDelimiter(query)} pokemontype = ?`;
    value.push(req.query.pktype);
  }

  client
    .query(query, value)
    .then((result) => {
      res.status(200).json(result[0]);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
});

router.get("/types", (req, res) => {
  client
    .query("SELECT DISTINCT type FROM pokemon ORDER BY type_id ASC")
    .then((types) => {
      res.status(200).json(types[0]);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
});

module.exports = router;
