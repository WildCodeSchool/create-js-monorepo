const argon2 = require("argon2");

// recommandation de l'OWASP pour la configuration d'Argon2
const hashingOptions = {
  type: argon2.argon2id,
  memoryCost: 2 ** 16,
  timeCost: 5,
  parallelism: 1,
};

const hashPassword = (req, res, next) => {
  argon2
    // récupération du mot de passe à hacher
    .hash(req.body.password, hashingOptions)
    .then((hashedPassword) => {
      // stockage du mot de passe haché
      req.body.hashedPassword = hashedPassword;
      // suppression du mot de passe en clair
      delete req.body.password;

      next();
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  hashPassword,
};
