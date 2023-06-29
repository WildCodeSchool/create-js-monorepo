// représente la table

const AbstractManager = require("./AbstractManager");

class PhoneManager extends AbstractManager {
  constructor() {
    super({ table: "Phone" });
  }

  insert(Phone) {
    return this.database.query(
      `INSERT INTO ${this.table} (Brand, Model, RAM, Storage, Status, Value_M, Value_S, Weigthing, Total_value, User_Id) VALUES(?,?,?,?,?,?,?,?,?,?)`,
      [
        Phone.Brand,
        Phone.Model,
        Phone.RAM,
        Phone.Storage,
        Phone.Status,
        Phone.Value_M,
        Phone.Value_S,
        Phone.Weigthing,
        Phone.Total_value,
        Phone.User_Id,
      ]
    );
  }

  findByBrand(brand) {
    return this.database.query(`select * from  ${this.table} where Brand = ?`, [
      brand,
    ]);
  }

  update(Phone) {
    return this.database.query(
      `UPDATE ${this.table} set Brand = ?, Model = ?, RAM = ?, Storage = ?, Status = ?, Value_M = ?, Value_S = ?, Weigthing = ?, Total_value = ?, User_Id = ? WHERE id = ?`,
      [
        Phone.Brand,
        Phone.Model,
        Phone.RAM,
        Phone.Storage,
        Phone.Status,
        Phone.Value_M,
        Phone.Value_S,
        Phone.Weigthing,
        Phone.Total_value,
        Phone.User_Id,
      ]
    );
  }
}

module.exports = PhoneManager;
