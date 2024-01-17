/* eslint-disable camelcase */
const AbstractManager = require("./AbstractManager");

class ProductManager extends AbstractManager {
  constructor() {
    // Call the constructor of the parent class (AbstractManager)
    // and pass the table name "product" as configuration
    super({ table: "product" });
  }

  // The C of CRUD - Create operation

  async create(product) {
    const { name, object, price, is_in_card, vouncher } = product;
    // Execute the SQL INSERT query to add a new product to the "product" table
    const [result] = await this.database.query(
      `insert into ${this.table} (name, object, price, is_in_card, vouncher) values (?, ?, ?, ?, ?)`,
      [name, object, price, is_in_card, vouncher]
    );

    // Return the ID of the newly inserted product
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific product by its ID
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the product
    return rows[0];
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all products from the "product" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the array of products
    return rows;
  }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing product

  async update(product, id) {
    // Execute the SQL INSERT query to update the row with tie id on the "product" table
    const result = await this.database.query(
      `update ${this.table} set ? where id = ?`,
      [product, id]
    );

    return result;
  }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an product by its ID
  async delete(id) {
    const result = await this.database.query(
      `delete from ${this.table} where id = ?`,
      [id]
    );

    return result;
  }
}

module.exports = ProductManager;
