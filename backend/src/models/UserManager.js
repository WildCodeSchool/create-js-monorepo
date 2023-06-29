const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor(database) {
    super({ table: "User" });
    this.database = database;
    this.table = "User";
  }

  insert(user) {
    return this.database.query(
      `INSERT INTO ${this.table} (email, Hashed_Password, admin) VALUES (?, ?, ?)`,
      [user.email, user.hashedPassword, user.roles]
    );
  }

  update(user) {
    return this.database.query(
      `UPDATE ${this.table} SET email = ?, Hashed_Password = ?, admin = ? WHERE id = ?`,
      [user.email, user.hashedPassword, user.roles, user.id]
    );
  }

  findByEmailWithPassword(email) {
    return this.database.query(`SELECT * FROM ${this.table} WHERE email = ?`, [
      email,
    ]);
  }
}

module.exports = UserManager;
