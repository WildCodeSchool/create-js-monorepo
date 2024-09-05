// Import the supertest library for making HTTP requests
import supertest from "supertest";

// Import the Express application
import app from "../../src/app";

// Import databaseClient
import databaseClient from "../../database/client";

import type { ResultType, RowsType } from "../../database/client";

// Restore all mocked functions after each test
afterEach((): void => {
  jest.restoreAllMocks();
});

// Test suite for the GET /api/items route
describe("GET /api/items", (): void  => {
  it("should fetch items successfully", async (): Promise<void> => {
    // Mock empty rows returned from the database
    const rows = [] as RowsType;

    // Mock the implementation of the database query method
    jest
      .spyOn(databaseClient, "query")
      .mockImplementation(async (): Promise<[RowsType, never[]]> => [rows, []]);

    // Send a GET request to the /api/items endpoint
    const response: supertest.Response = await supertest(app).get("/api/items");

    // Assertions
    expect(response.status).toBe(200);
    expect(response.body).toStrictEqual(rows);
  });
});

// Test suite for the GET /api/items/:id route
describe("GET /api/items/:id", (): void => {
  it("should fetch a single item successfully", async () => {
    // Mock rows returned from the database
    const rows = [{}] as RowsType;

    // Mock the implementation of the database query method
    jest
      .spyOn(databaseClient, "query")
      .mockImplementation(async (): Promise<[RowsType, never[]]> => [rows, []]);

    // Send a GET request to the /api/items/:id endpoint
    const response: supertest.Response = await supertest(app).get("/api/items/1");

    // Assertions
    expect(response.status).toBe(200);
    expect(response.body).toStrictEqual(rows[0]);
  });

  it("should fail on invalid id", async (): Promise<void> => {
    // Mock empty rows returned from the database
    const rows = [] as RowsType;

    // Mock the implementation of the database query method
    jest
      .spyOn(databaseClient, "query")
      .mockImplementation(async (): Promise<[RowsType, never[]]> => [rows, []]);

    // Send a GET request to the /api/items/:id endpoint with an invalid ID
    const response: supertest.Response = await supertest(app).get("/api/items/0");

    // Assertions
    expect(response.status).toBe(404);
    expect(response.body).toEqual({});
  });
});

// Test suite for the POST /api/items route
// Doesn't pass: maybe something to change in app config :/
describe("POST /api/items", (): void => {
  it("should add a new item successfully", async (): Promise<void> => {
    // Mock result of the database query
    const result = { insertId: 1 } as ResultType;

    // Mock the implementation of the database query method
    jest
      .spyOn(databaseClient, "query")
      .mockImplementation(async (): Promise<[ResultType, never[]]> => [result, []]);

    // Fake item data
    const fakeItem = { title: "foo", user_id: 0 };

    // Send a POST request to the /api/items endpoint with a test item
    const response: supertest.Response = await supertest(app).post("/api/items").send(fakeItem);

    // Assertions
    expect(response.status).toBe(201);
    expect(response.body).toBeInstanceOf(Object);
    expect(response.body.insertId).toBe(result.insertId);
  });

  it("should fail on invalid request body", async (): Promise<void> => {
    // Mock result of the database query
    const result = { insertId: 1 } as ResultType;

    // Mock the implementation of the database query method
    jest
      .spyOn(databaseClient, "query")
      .mockImplementation(async (): Promise<[ResultType, never[]]> => [result, []]);

    // Fake item data with missing user_id
    const fakeItem = { title: "foo" };

    // Send a POST request to the /api/items endpoint with a test item
    const response: supertest.Response = await supertest(app).post("/api/items").send(fakeItem);

    // Assertions
    expect(response.status).toBe(400);
    expect(response.body).toEqual({});
  });
});

// Test suite for the PUT /api/items/:id route
// This route is not yet implemented :/
describe("PUT /api/items/:id", (): void => {
  it("should update an existing item successfully", async (): Promise<void> => {
    // Mock result of the database query
    const result = { affectedRows: 1 } as ResultType;

    // Mock the implementation of the database query method
    jest
      .spyOn(databaseClient, "query")
      .mockImplementation(async (): Promise<[ResultType, never[]]> => [result, []]);

    // Fake item data
    const fakeItem = { title: "foo", user_id: 0 };

    // Send a PUT request to the /api/items/:id endpoint with a test item
    const response: supertest.Response = await supertest(app).put("/api/items/42").send(fakeItem);

    // Assertions
    expect(response.status).toBe(204);
    expect(response.body).toEqual({});
  });

  it("should fail on invalid request body", async (): Promise<void> => {
    // Mock result of the database query
    const result = { affectedRows: 1 } as ResultType;

    // Mock the implementation of the database query method
    jest
      .spyOn(databaseClient, "query")
      .mockImplementation(async (): Promise<[ResultType, never[]]> => [result, []]);

    // Fake item data with missing user_id
    const fakeItem = { title: "foo" };

    // Send a PUT request to the /api/items/:id endpoint with a test item
    const response: supertest.Response = await supertest(app).put("/api/items/42").send(fakeItem);

    // Assertions
    expect(response.status).toBe(400);
    expect(response.body).toEqual({});
  });

  it("should fail on invalid id", async (): Promise<void> => {
    // Mock result of the database query
    const result = { affectedRows: 0 } as ResultType;

    // Mock the implementation of the database query method
    jest
      .spyOn(databaseClient, "query")
      .mockImplementation(async (): Promise<[ResultType, never[]]> => [result, []]);

    // Fake item data with missing user_id
    const fakeItem = { title: "foo", user_id: 0 };

    // Send a PUT request to the /api/items/:id endpoint with a test item
    const response: supertest.Response = await supertest(app).put("/api/items/43").send(fakeItem);

    // Assertions
    expect(response.status).toBe(404);
    expect(response.body).toEqual({});
  });
});

// Test suite for the DELETE /api/items/:id route
// This route is not yet implemented :/
describe("DELETE /api/items/:id", (): void => {
  it("should delete an existing item successfully", async () => {
    // Mock result of the database query
    const result = { affectedRows: 1 } as ResultType;

    // Mock the implementation of the database query method
    jest
      .spyOn(databaseClient, "query")
      .mockImplementation(async (): Promise<[ResultType, never[]]> => [result, []]);

    // Send a DELETE request to the /api/items/:id endpoint
    const response: supertest.Response = await supertest(app).delete("/api/items/42");

    // Assertions
    expect(response.status).toBe(204);
    expect(response.body).toEqual({});
  });

  it("should fail on invalid id", async (): Promise<void> => {
    // Mock result of the database query
    const result = { affectedRows: 0 } as ResultType;

    // Mock the implementation of the database query method
    jest
      .spyOn(databaseClient, "query")
      .mockImplementation(async (): Promise<[ResultType, never[]]> => [result, []]);

    // Send a DELETE request to the /api/items/:id endpoint
    const response: supertest.Response = await supertest(app).delete("/api/items/43");

    // Assertions
    expect(response.status).toBe(404);
    expect(response.body).toEqual({});
  });
});
