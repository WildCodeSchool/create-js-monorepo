const fs = require("node:fs");
const path = require("node:path");

const { database } = require("./config");

describe("Installation", () => {
  test("tu as créé /server/.env", async () => {
    expect(fs.existsSync(path.join(__dirname, "..", ".env"))).toBe(true);
  });
  test("tu as conservé /server/.env.sample", async () => {
    expect(fs.existsSync(path.join(__dirname, "..", ".env.sample"))).toBe(true);
  });
  test("tu as exécuté les scripts db:migrate et db:seed", async () => {
    const [rows] = await database.query(`select * from item`);

    expect(rows.length).toBeGreaterThan(0);
  });
});
