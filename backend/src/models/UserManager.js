// représente la table

const AbstractManager = require("./AbstractManager");

class userManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  insert(user) {
    return this.database.query(
      `INSERT INTO ${this.table} (firstname, lastname, email, hashedPassword, phone_number, address_number, address_streetname, city, roles) VALUES(?,?,?,?,?,?,?,?,?)`,
      [
        user.firstname,
        user.lastname,
        user.email,
        user.hashedPassword,
        user.phone_number,
        user.address_number,
        user.address_streetname,
        user.city,
        user.roles,
      ]
    );
  }

  update(user) {
    return this.database.query(
      `UPDATE ${this.table} set firstname = ?, lastname = ?, email = ?, hashedPassword = ?, phone_number = ?, address_number = ?, address_streetname = ?, city = ?, roles = ? WHERE id = ?`,
      [
        user.firstname,
        user.lastname,
        user.email,
        user.hashedPassword,
        user.phone_number,
        user.address_number,
        user.address_streetname,
        user.city,
        user.roles,
      ]
    );
  }

  findByEmailWithPassword(email) {
    return this.database.query(`SELECT * FROM ${this.table} where email = ?`, [
      email,
    ]);
  }
}

module.exports = userManager;
