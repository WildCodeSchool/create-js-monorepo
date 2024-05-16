import AbstractRepository from "./AbstractRepository";

import type { Result, Rows } from "./AbstractRepository";

interface Item {
  id: number;
  title: string;
  user_id: number;
}

class ItemRepository extends AbstractRepository {
  constructor() {
    // Call the constructor of the parent class (AbstractRepository)
    // and pass the table name "item" as configuration
    super({ table: "item" });
  }

  // The C of CRUD - Create operation

  async create(item: Readonly<Omit<Item, "id">>) {
    // Execute the SQL INSERT query to add a new item to the "item" table
    const [result] = await this.database.query<Result>(
      `insert into ${this.table} (title, user_id) values (?, ?)`,
      [item.title, item.user_id]
    );

    // Return the ID of the newly inserted item
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id: number) {
    // Execute the SQL SELECT query to retrieve a specific item by its ID
    const [rows] = await this.database.query<Rows>(
      `select * from ${this.table} where id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the item
    return rows[0] as Item;
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all items from the "item" table
    const [rows] = await this.database.query<Rows>(
      `select * from ${this.table}`
    );

    // Return the array of items
    return rows as Item[];
  }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing item

  // async update(item: Readonly<Item>) {
  //   ...
  // }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an item by its ID

  // async delete(id: number) {
  //   ...
  // }
}

export default ItemRepository;
