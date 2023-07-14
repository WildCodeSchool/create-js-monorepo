const models = require("../models");

const add = (req, res) => {
  const newUser = req.body;

  models.user
    .insert(newUser)
    .then(([result]) => {
      res.location(`/users/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  add,
};
