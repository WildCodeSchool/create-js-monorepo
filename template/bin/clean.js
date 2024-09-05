const fs = require("node:fs/promises");
const path = require("node:path");

for (const nodeModules of [
  path.join(__dirname, "..", "node_modules"),
  path.join(__dirname, "..", "client", "node_modules"),
  path.join(__dirname, "..", "server", "node_modules"),
]) {
  fs.rm(nodeModules, { recursive: true, force: true }).then(() => console.info("node_modules cleaned"));
}

const packageLock = path.join(__dirname, "..", "package-lock.json");

fs.rm(packageLock, { force: true }).then(() => console.info("package-lock.json cleaned"));
