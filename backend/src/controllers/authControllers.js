const argon2 = require("argon2");
const tables = require("../tables");

const login = async (req, res, next) => {
  const { email, password } = req.body;
  console.info(req.body);
  try {
    // Fetch a specific user from the database based on the provided email
    const user = await tables.user.readByEmailWithPassword(email);
    console.info(user);
    if (user == null) {
      res.sendStatus(422);
      return;
    }

    const verified = await argon2.verify(user.hashedPwd, password);
    console.info(verified);
    if (verified) {
      // Respond with the user in JSON format (but without the hashed password)
      delete user.hashedPwd;

      // Send the token in the response
      res.status(200).json({ user });
    } else {
      res.sendStatus(422);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

module.exports = {
  login,
};
