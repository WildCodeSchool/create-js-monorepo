const argon2 = require("argon2");
const jwt = require("jsonwebtoken");

const { JWT_SECRET, JWT_TIMING } = process.env;

const hashingOptions = {
  type: argon2.argon2id,
  memoryCost: 2 ** 16,
  timeCost: 5,
  parallelism: 1,
};

// Hash le password en clair soumis dans la rêquete avant de l'insérer dans la BDD
const hashPassword = (req, res, next) => {
  argon2
    .hash(req.body.password, hashingOptions)
    .then((hashedPassword) => {
      req.body.hashedPassword = hashedPassword;
      delete req.body.password;

      next();
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

// Verifie si le password hashé dans la BDD correspond au password en clair founit par la requête
const verifyPassword = (req, res) => {
  argon2
    .verify(
      "$argon2id$v=19$m=16,t=2,p=1$cXFnN2s1ZHU0aTAwMDAwMA$XFP3Vrp4/huxiy9p4p2EAw",
      req.body.password,
      hashingOptions
    )
    .then((isVerified) => {
      if (isVerified) {
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
