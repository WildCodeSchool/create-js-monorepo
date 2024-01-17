/* eslint-disable camelcase */
const AbstractManager = require("./AbstractManager");

class User_productManager extends AbstractManager {
  constructor() {
    // Call the constructor of the parent class (AbstractManager)
    // and pass the table name "user_product" as configuration
    super({ table: "user_product" });
  }

  // The C of CRUD - Create operation

  async create(user_product) {
    const { user_id, product_id } = user_product;
    // Execute the SQL INSERT query to add a new user_product to the "user_product" table
    const [result] = await this.database.query(
      `insert into ${this.table} (user_id, product_id) values (?, ?)`,
      [user_id, product_id]
    );

    // Return the ID of the newly inserted user_product
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific user_product by its ID
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the user_product
    return rows[0];
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all user_products from the "user_product" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the array of user_products
    return rows;
  }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing user_product

  async update(user_product, id) {
    // Execute the SQL INSERT query to update the row with tie id on the "user_product" table
    const result = await this.database.query(
      `update ${this.table} set ? where id = ?`,
      [user_product, id]
    );

    return result;
  }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an user_product by its ID
  async delete(id) {
    const result = await this.database.query(
      `delete from ${this.table} where id = ?`,
      [id]
    );

    return result;
  }
}

module.exports = User_productManager;
