// get access to database tables

const tables = require("../tables");

// the B of BREAD

const browse = async (req, res, next) => {
  try {
    const items = await tables.item.readAll();

    res.json(items);
  } catch (err) {
    next(err);
  }
};

// the R of BREAD

const read = async (req, res, next) => {
  try {
    const item = await tables.item.read(req.params.id);

    if (item == null) {
      res.sendStatus(404);
    } else {
      res.json(item);
    }
  } catch (err) {
    next(err);
  }
};

// the E of BREAD

// ???

// the A of BREAD

const add = async (req, res, next) => {
  const item = req.body;

  try {
    const insertId = await tables.item.create(item);

    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

// the D of BREAD

// ???

// ready to export

module.exports = {
  browse,
  read,
  // edit,
  add,
  // destroy,
};
