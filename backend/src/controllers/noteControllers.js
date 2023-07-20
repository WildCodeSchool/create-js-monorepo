const models = require("../models");

const browse = (req, res) => {
  // info utilisateur stockées dans payload.sub
  const userId = req.payloads.sub.id;
  models.note
    .findAllNotesByUserId(userId)
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const read = (req, res) => {
  const id = parseInt(req.params.id, 10);
  const userId = req.payloads.sub.id;

  models.note
    .find(id, userId)
    .then(([rows]) => {
      if (rows[0]) {
        res.send(rows[0]);
      } else {
        res.status(404).send("Note not found");
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500);
    });
};

const readByCategories = (req, res) => {
  const id = parseInt(req.params.id, 10);
  const userId = req.payloads.sub.id;

  models.note
    .findNotesByCategories(id, userId)
    .then(([rows]) => {
      if (rows[0]) {
        res.send(rows);
      } else {
        res.status(404).send("Notes not found");
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500);
    });
};

const add = (req, res) => {
  const newNote = {
    ...req.body,
    // ajout de l'id de l'utilisateur à la nouvelle note
    user_id: req.payloads.sub.id,
  };
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

const edit = (req, res) => {
  const note = {
    ...req.body,
    // ajout de l'id de l'utilisateur à la nouvelle note
    user_id: req.payloads.sub.id,
  };
  note.id = parseInt(req.params.id, 10);

  models.note
    .update(note)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const destroy = (req, res) => {
  const id = parseInt(req.params.id, 10);
  const userId = req.payloads.sub.id;

  models.note
    .delete(id, userId)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  browse,
  read,
  readByCategories,
  add,
  edit,
  destroy,
};
