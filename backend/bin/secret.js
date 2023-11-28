const crypto = require("node:crypto");
const fs = require("node:fs");
const path = require("node:path");

const envFilePath = path.join(__dirname, "..", ".env");

const envContent = fs.readFileSync(envFilePath, "utf8");

const envContentWithNewSecret = envContent
  .split(/\r?\n/)
  .map((line) => {
    if (line.startsWith("APP_SECRET")) {
      return `APP_SECRET=${crypto.randomUUID()}`;
    }

    return line;
  })
  .join("\n");

fs.writeFileSync(envFilePath, envContentWithNewSecret);
