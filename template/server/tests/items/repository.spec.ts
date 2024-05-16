// Import required dependencies
import { database, tables } from "../config";

import type { Result, Rows } from "../config";

// Import repository classes
import AbstractRepository from "../../database/models/AbstractRepository";
import ItemRepository from "../../database/models/ItemRepository";

// Test suite for ItemRepository
describe("ItemRepository", () => {
  // Test: Check if ItemRepository extends AbstractRepository
  test("ItemRepository extends AbstractRepository", async () => {
    // Assertions
    expect(Object.getPrototypeOf(ItemRepository)).toBe(AbstractRepository);
  });

  // Test: Check if tables.item is an instance of ItemRepository
  test("tables.item = new ItemRepository", async () => {
    // Assertions
    expect(tables.item instanceof ItemRepository).toBe(true);
  });

  // Test: Check if create method inserts data into the 'item' table
  test("create => insert into", async () => {
    // Mock result of the database query
    const result = { insertId: 1 } as Result;

    // Mock the implementation of the database query method
    jest.spyOn(database, "query").mockImplementation(async () => [result, []]);

    // Fake item data
    const fakeItem = { title: "foo", user_id: 0 };

    // Call the create method of the item repository
    const returned = await tables.item.create(fakeItem);

    // Assertions
    expect(database.query).toHaveBeenCalledWith(
      "insert into item (title, user_id) values (?, ?)",
      [fakeItem.title, fakeItem.user_id]
    );
    expect(returned).toBe(result.insertId);
  });

  // Test: Check if readAll method selects all data from the 'item' table
  test("readAll => select", async () => {
    // Mock empty rows returned from the database
    const rows = [] as Rows;

    // Mock the implementation of the database query method
    jest.spyOn(database, "query").mockImplementation(async () => [rows, []]);

    // Call the readAll method of the item repository
    const returned = await tables.item.readAll();

    // Assertions
    expect(database.query).toHaveBeenCalledWith("select * from item");
    expect(returned).toStrictEqual(rows);
  });

  // Test: Check if read method selects data from the 'item' table based on id
  test("read => select with id", async () => {
    // Mock rows returned from the database
    const rows = [{}] as Rows;

    // Mock the implementation of the database query method
    jest.spyOn(database, "query").mockImplementation(async () => [rows, []]);

    // Call the read method of the item repository
    const returned = await tables.item.read(0);

    // Assertions
    expect(database.query).toHaveBeenCalledWith(
      "select * from item where id = ?",
      [0]
    );
    expect(returned).toStrictEqual(rows[0]);
  });
});
