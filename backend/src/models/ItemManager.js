const AbstractManager = require("./AbstractManager");

class ItemManager extends AbstractManager {
  constructor() {
    super({ table: "item" });
  }

  // the C of CRUD

  async create(item) {
    const [result] = await this.database.query(
      `insert into ${this.table} (title) values (?)`,
      [item.title]
    );

    return result.insertId;
  }

  // the Rs of CRUD

  async read(id) {
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );

    return rows[0];
  }

  async readAll(/* options: try to add some */) {
    const [rows] = await this.database.query(`select * from ${this.table}`);

    return rows;
  }

  // the U of CRUD

  // ???

  // the D of CRUD

  // ???
}

module.exports = ItemManager;
