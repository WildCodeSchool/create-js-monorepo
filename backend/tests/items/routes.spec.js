// Import required dependencies
const { app, request, tables } = require("../setup");

// Test suite for the GET /api/items route
describe("GET /api/items", () => {
  it("should fetch items successfully", async () => {
    // Define a sample item for testing
    const testItem = {
      title: "Sample Item",
    };

    // Create a sample item in the database
    const insertId = await tables.item.create(testItem);

    // Send a GET request to the /api/items endpoint
    const response = await request(app).get("/api/items");

    // Assertions
    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Array);

    // Check if the created item is present in the response
    const foundItem = response.body.find((item) => item.id === insertId);

    // Assertions
    expect(foundItem).toBeInstanceOf(Object);
    expect(foundItem.title).toBe(testItem.title);
  });
});

// Test suite for the GET /api/items/:id route
describe("GET /api/items/:id", () => {
  it("should fetch a single item successfully", async () => {
    // Define a sample item for testing
    const testItem = {
      title: "Sample Item",
    };

    // Create a sample item in the database
    const insertId = await tables.item.create(testItem);

    // Send a GET request to the /api/items/:id endpoint
    const response = await request(app).get(`/api/items/${insertId}`);

    // Assertions
    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Object);
    expect(response.body.id).toBe(insertId);
    expect(response.body.title).toBe(testItem.title);
  });

  it("should return 404 for non-existent item", async () => {
    // Send a GET request to the /api/items/:id endpoint with an invalid ID
    const response = await request(app).get("/api/items/0");

    // Assertions
    expect(response.status).toBe(404);
    expect(response.body).toEqual({});
  });
});

// Test suite for the POST /api/items route
// Doesn't pass: maybe something to change in app config :/
// Hint: enabling log could help ;)
describe("POST /api/items", () => {
  it("should add a new item successfully", async () => {
    // Define a sample item for testing
    const testItem = {
      title: "Sample Item",
    };

    // Send a POST request to the /api/items endpoint with a test item
    const response = await request(app).post("/api/items").send(testItem);

    // Assertions
    expect(response.status).toBe(201);
    expect(response.body).toBeInstanceOf(Object);
    expect(response.body.insertId).toEqual(expect.any(Number));

    // Check if the newly added item exists in the database
    const foundItem = await tables.item.read(response.body.insertId);

    // Assertions
    expect(foundItem).toBeDefined();
    expect(foundItem.title).toBe(testItem.title);
  });
});

// TODO: implement PUT and DELETE routes

/*
// Test suite for the PUT /api/items/:id route
describe("PUT /api/items/:id", () => {
  it("should update an existing item successfully", async () => {
    // Define a sample item for testing
    const testItem = {
      title: "Sample Item",
    };

    // Create a sample item in the database
    const insertId = await tables.item.create(testItem);

    // Define an updated item object
    const updatedItem = {
      title: "Updated Item",
    };

    // Send a PUT request to the /api/items/:id endpoint with updated data
    const response = await request(app)
      .put(`/api/items/${insertId}`)
      .send(updatedItem);

    // Assertions
    expect(response.status).toBe(204);

    // Check if the item has been updated in the database
    const foundItem = await tables.item.read(insertId);

    // Assertions
    expect(foundItem).toBeDefined();
    expect(foundItem.title).toBe(updatedItem.title);
  });
});

// Test suite for the DELETE /api/items/:id route
describe("DELETE /api/items/:id", () => {
  it("should delete an existing item successfully", async () => {
    // Define a sample item for testing
    const testItem = {
      title: "Sample Item",
    };

    // Create a sample item in the database
    const insertId = await tables.item.create(testItem);

    // Send a DELETE request to the /api/items/:id endpoint
    const response = await request(app).delete(`/api/items/${insertId}`);

    // Assertions
    expect(response.status).toBe(204);

    // Check if the item has been deleted from the database
    const foundItem = await tables.item.read(insertId);

    // Assertions
    expect(foundItem).toBeUndefined();
  });
});
*/
