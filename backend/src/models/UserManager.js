const AbstractManager = require("./AbstractManager");

class userManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  findAll() {
    return this.database.query(`select * from  ${this.table}`);
  }

  insert(user) {
    return this.database.query(
      `INSERT INTO ${this.table} (firstname, lastname, email, hashedPassword) VALUES(?,?,?,?)`,
      [user.firstname, user.lastname, user.email, user.hashedPassword]
    );
  }
}

module.exports = userManager;
