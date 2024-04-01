const argon2 = require("argon2");

const hashingOptions = {
  type: argon2.argon2id,
  memoryCost: 19 * 2 ** 10,
  timeCost: 2,
  parallelism: 1,
};

const hashPassword = async (req, res, next) => {
  try {
    const { password } = req.body;
    const hashedPassword = await argon2.hash(password, hashingOptions);
    req.body.hashedPassword = hashedPassword;
    // pour supprimer le password en clair une fois celui-ci hashé
    delete req.body.password;
    console.info("HASHED PASSWORD", req.body);
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = { hashPassword };
