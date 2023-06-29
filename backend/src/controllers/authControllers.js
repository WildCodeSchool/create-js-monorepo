const models = require("../models");

const getUserByEmailMiddleware = async (req, res, next) => {
  const { email } = req.body;

  try {
    const users = await models.user.findByEmailWithPassword(email);
    if (users.length > 0) {
      // eslint-disable-next-line prefer-destructuring
      req.user = users[0];
      next();
    } else {
      res.sendStatus(401);
    }
  } catch (error) {
    console.error("Error fetching user:", error);
    res.sendStatus(500);
  }
};

module.exports = {
  getUserByEmailMiddleware,
};
