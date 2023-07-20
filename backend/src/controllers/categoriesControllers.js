const models = require("../models");

const browse = (req, res) => {
  models.categories
    .findAllCategories()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const add = (req, res) => {
  const newCategories = {
    ...req.body,
    // ajout de l'id de l'utilisateur à la nouvelle note
    user_id: req.payloads.sub.id,
  };
  models.categories
    .insert(newCategories)
    .then(([result]) => {
      res.location(`/categories/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  browse,
  add,
};
