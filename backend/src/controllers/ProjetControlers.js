const models = require("../models");

const getAllProjet = (req, res) => {
  models.projet

    .findAll()
    .then(([row]) => res.send(row))
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = { getAllProjet };
