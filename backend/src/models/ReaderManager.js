const AbstractManager = require("./AbstractManager");

// AbstractManager = parent et ReaderManager et BookManager = enfant
// qui hérite des propriétés du parent

class ReaderManager extends AbstractManager {
  constructor() {
    super({ table: "reader" });
  }

  async create(reader) {
    const [rows] = await this.database.query(
      `INSERT INTO ${this.table} (email, password, username) VALUES (?, ?, ?)`,
      [reader.email, reader.password, reader.username]
    );
    return rows;
  }

  // /!\ select * from user est interdit car l'on ne souahite pas voir le mdp même en hashé apparaître

  async readAll() {
    const [rows] = await this.database.query(`select * from ${this.table}`);
    return rows;
  }

  async read(id) {
    const [rows] = await this.database.query(
      `SELECT * FROM ${this.table} where id = ?`,
      [id]
    );
    return rows[0];
  }
}

module.exports = ReaderManager;
