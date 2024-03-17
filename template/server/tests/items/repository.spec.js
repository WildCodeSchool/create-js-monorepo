// Import required dependencies
const { database, tables } = require("../config");

const AbstractRepository = require("../../database/models/AbstractRepository");
const ItemRepository = require("../../database/models/ItemRepository");

// Test suite for the create method of ItemRepository
describe("ItemRepository", () => {
  test("ItemRepository extends AbstractRepository", async () => {
    // Assertions
    expect(Object.getPrototypeOf(ItemRepository)).toBe(AbstractRepository);
  });
  test("tables.item = new ItemRepository", async () => {
    // Assertions
    expect(tables.item instanceof ItemRepository).toBe(true);
  });
  test("create => insert into", async () => {
    const result = [{ insertId: 1 }];

    jest.spyOn(database, "query").mockImplementation(() => [result]);

    const fakeItem = { title: "foo", user_id: 0 };

    const returned = await tables.item.create(fakeItem);

    // Assertions
    expect(database.query).toHaveBeenCalledWith(
      "insert into item (title, user_id) values (?, ?)",
      [fakeItem.title, fakeItem.user_id]
    );
    expect(returned).toBe(result.insertId);
  });
  test("readAll => select", async () => {
    const rows = [];

    jest.spyOn(database, "query").mockImplementation(() => [rows]);

    const returned = await tables.item.readAll();

    // Assertions
    expect(database.query).toHaveBeenCalledWith("select * from item");
    expect(returned).toStrictEqual(rows);
  });
  test("read => select with id", async () => {
    const rows = [{}];

    jest.spyOn(database, "query").mockImplementation(() => [rows]);

    const returned = await tables.item.read(0);

    // Assertions
    expect(database.query).toHaveBeenCalledWith(
      "select * from item where id = ?",
      [0]
    );
    expect(returned).toStrictEqual(rows[0]);
  });
});
