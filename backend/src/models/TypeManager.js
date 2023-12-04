const AbstractManager = require("./AbstractManager");

class pktypeManager extends AbstractManager {
  constructor() {
    // Call the constructor of the parent class (AbstractManager)
    // and pass the table name "pktype" as configuration
    super({ table: "pktype" });
  }

  // The C of CRUD - Create operation

  async create(pktype) {
    // Execute the SQL INSERT query to add a new pktype to the "pktype" table
    const [result] = await this.database.query(
      `insert into ${this.table} (type) values (?)`,
      [pktype.type]
    );

    // Return the ID of the newly inserted pktype
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific pktype by its ID
    const [rows] = await this.database.query(
      `select * from ${this.table}  where id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the pktype
    return rows[0];
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all pktypes from the "pktype" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the array of pktypes
    return rows;
  }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing pktype

  // async update(pktype) {
  //   ...
  // }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an pktype by its ID

  // async delete(id) {
  //   ...
  // }
}

module.exports = pktypeManager;
