const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  insert(user) {
    return this.database.query(
      `INSERT INTO ${this.table} (firstname, lastname, email, hashedPassword) VALUES(?,?,?,?)`,
      [user.firstname, user.lastname, user.email, user.hashedPassword]
    );
  }

  findByEmailWithPassword(email) {
    return this.connection.query(
      `SELECT * FROM ${this.table} WHERE email = ?`,
      [email]
    );
  }
}

module.exports = UserManager;
