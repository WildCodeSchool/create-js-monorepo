const tables = require("../tables");

const browse = async (req, res, next) => {
  try {
    const rows = await tables.item.readAll();

    res.send(rows);
  } catch (err) {
    next(err);
  }
};

const read = async (req, res, next) => {
  try {
    const row = await tables.item.read(req.params.id);

    if (row == null) {
      res.sendStatus(404);
    } else {
      res.send(row);
    }
  } catch (err) {
    next(err);
  }
};

const edit = async (req, res, next) => {
  const item = req.body;

  item.id = parseInt(req.params.id, 10);

  try {
    const affectedRows = await tables.item.update(item);

    if (affectedRows === 0) {
      res.sendStatus(404);
    } else {
      res.sendStatus(204);
    }
  } catch (err) {
    next(err);
  }
};

const add = async (req, res, next) => {
  const item = req.body;

  try {
    const insertId = await tables.item.create(item);

    res.location(`/items/${insertId}`).sendStatus(201);
  } catch (err) {
    next(err);
  }
};

const destroy = async (req, res, next) => {
  try {
    const affectedRows = await tables.item.delete(req.params.id);

    if (affectedRows === 0) {
      res.sendStatus(404);
    } else {
      res.sendStatus(204);
    }
  } catch (err) {
    next(err);
  }
};

module.exports = {
  browse,
  read,
  edit,
  add,
  destroy,
};
