const argon2 = require("argon2");
const jwt = require("jsonwebtoken");

const { JWT_SECRET, JWT_TIMING } = process.env;

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

const verifyPassword = (req, res) => {
  // req.user.hashedPassword est fourni par le middleware précedent il correspond au mot de passe hashé, stocké dans la BDD pour l'utilisateur en train de se connecter
  // On verifie si le mot de passe en clair reçu dans req.body.password, une fois hashé, correspond au mot de passe hashé stocké dans la BDD pour le user.
  argon2
    .verify(req.user.hashedPassword, req.body.password, hashingOptions)
    .then((isVerified) => {
      // si ok, l'utilisateur est validé
      if (isVerified) {
        // création d'un token, encodé avec un mot de passe stocké dans le .env
        const token = jwt.sign(
          {
            sub: req.user,
          },
          JWT_SECRET,
          {
            expiresIn: JWT_TIMING,
          }
        );

        delete req.body.password;
        delete req.user.hashedPassword;

        // Put token in cookie and send user
        res
          .cookie("access_token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
          })
          .send(req.user);
      } else res.sendStatus(401);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const verifyToken = (req, res, next) => {
  try {
    // Get token by cookies
    const token = req.cookies.access_token;

    if (!token) return res.sendStatus(403);

    // Verify token with JWT_SECRET
    req.payloads = jwt.verify(token, JWT_SECRET);
    return next();
  } catch (err) {
    console.error(err);
    return res.sendStatus(403);
  }
};

const logout = (req, res) => {
  res.clearCookie("access_token").sendStatus(200);
};

module.exports = {
  hashPassword,
  verifyPassword,
  verifyToken,
  logout,
};
