const models = require("../models");

const getUserByEmailMiddleware = (req, res, next) => {
  const { email } = req.body;

  models.user
    .findByEmailWithPassword(email)
    .then(([users]) => {
      if (users[0]) {
        [req.user] = users;
        next();
      } else {
        res.sendStatus(401);
      }
    })
    .catch(() => {
      res.sendStatus(500);
    });
};

module.exports = {
  getUserByEmailMiddleware,
};
