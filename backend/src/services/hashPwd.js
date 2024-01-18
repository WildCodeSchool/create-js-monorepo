const argon2 = require("argon2");

const hashingOptions = {
  type: argon2.argon2id,
  memoryCost: 19 * 2 ** 10,
  timeCost: 2,
  parallelism: 1,
};

const hashPwd = async (req, res, next) => {
  try {
    // const hash = await argon2.hash(req.body.password, hashingOptions);
    // delete req.body.password;

    // req.user = { ...req.body, password: hash };

    // const { password } = req.body;
    const hash = await argon2.hash(req.body.password, hashingOptions);
    delete req.body.password;
    req.body.hash = hash;

    next();
  } catch (err) {
    next(err);
  }
};

module.exports = {
  hashPwd,
};
