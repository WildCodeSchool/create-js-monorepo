const tables = require("../tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    const readers = await tables.reader.readAll();
    res.json(readers);
  } catch (err) {
    next(err);
  }
};

const read = async (req, res, next) => {
  const { id } = req.params;
  try {
    const reader = await tables.reader.read(id);
    res.json(reader);
  } catch (err) {
    next(err);
  }
};

const add = async (req, res, next) => {
  const readerInfos = {
    // ce que l'on retourne du manager
    email: req.body.email,
    password: req.body.hashedPassword,
    username: req.body.username,
  };
  try {
    const result = await tables.reader.create(readerInfos);
    console.info(result);
    res.status(200).json({
      msg: "utilisateur ajouté avec succès",
      status: result,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  browse,
  read,
  add,
};
