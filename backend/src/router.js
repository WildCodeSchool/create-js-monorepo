const express = require("express");

const client = require("../database/client");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import itemControllers module for handling item-related operations

// Route to get a list of items

router.get("/offres", (req, res) => {
  let query = "SELECT * FROM offre";
  const values = [];
  if (req.query.name) {
    query += " where name = ?";
    values.push(req.query.name);
  }
  if (req.query.limit) {
    query += " LIMIT ?";
    values.push(parseInt(req.query.limit, 10));
  }

  client
    .query(query, values)
    .then((result) => {
      res.status(200).json(result[0]);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
});

router.get("/offres/:id", (req, res) => {
  const id = +req.params.id;
  client
    .query("select * from offre where id = ?", [id])
    .then(([offre]) => {
      if (offre[0] != null) {
        res.status(200).json(offre[0]);
      } else {
        res.sendStatus(404);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
});
/* ************************************************************************* */

module.exports = router;
