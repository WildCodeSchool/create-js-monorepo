const argon2 = require("argon2");

const hashingOptions = {
  type: argon2.argon2id,
  memoryCost: 2 ** 16,
  timeCost: 5,
  parallelism: 1,
};

const hashPwd = async (req, res, next) => {
  console.info(req.body);
  try {
    // const hash = await argon2.hash(req.body.password, hashingOptions);
    // delete req.body.password;

    // req.user = { ...req.body, password: hash };

    // const { password } = req.body;
    const hashedPwd = await argon2.hash(req.body.password, hashingOptions);

    req.body.hash = hashedPwd;

    delete req.body.password;
    next();
  } catch (err) {
    next(err);
  }
};

module.exports = {
  hashPwd,
};
