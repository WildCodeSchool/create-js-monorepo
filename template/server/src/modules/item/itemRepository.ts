import databaseClient from "../../../database/client";

import type { ResultType, RowsType } from "../../../database/client";
import {ItemType} from "../../lib/definitions";

class ItemRepository {
  // The C of CRUD - Create operation

  async create(item: Omit<ItemType, "id">): Promise<Number> {
    // Execute the SQL INSERT query to add a new item to the "item" table
    const [result] = await databaseClient.query<ResultType>(
      "insert into item (title, user_id) values (?, ?)",
      [item.title, item.user_id],
    );

    // Return the ID of the newly inserted item
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id: number): Promise<ItemType> {
    // Execute the SQL SELECT query to retrieve a specific item by its ID
    const [rows] = await databaseClient.query<RowsType>(
      "select * from item where id = ?",
      [id],
    );

    // Return the first row of the result, which represents the item
    return rows[0] as ItemType;
  }

  async readAll(): Promise<ItemType[]> {
    // Execute the SQL SELECT query to retrieve all items from the "item" table
    const [rows] = await databaseClient.query<RowsType>("select * from item");

    // Return the array of items
    return rows as ItemType[];
  }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing item

  // async update(item: Item) {
  //   ...
  // }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an item by its ID

  // async delete(id: number) {
  //   ...
  // }
}

export default new ItemRepository();
