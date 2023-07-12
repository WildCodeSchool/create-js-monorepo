const models = require("../models");

const browse = (req, res) => {
  models.note
    .findAllNotes()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const add = (req, res) => {
  const newNote = req.body;

  models.note
    .insert(newNote)
    .then(([result]) => {
      res.location(`/notes/${result.insertId}`).sendStatus(201);
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
