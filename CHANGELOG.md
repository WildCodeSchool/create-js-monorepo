# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

Nothing planned right now.

[Open an issue](https://github.com/WildCodeSchool/js-template-fullstack/issues/new) if you have any request/feedback :)

## [2.0.1] - 2023-03-24

### Changed

- Removed useless code in `package.json` files.

## [2.0.0] - 2023-02-10

### Added

- Deployment workflows using CapRover. Thanks to [Anthony Gorski](https://github.com/GorskiAnthony).
- Compatibility with `npm` alternatives (`yarn`, `pnpm`...). Set `config.cli` in root `package.json` with the wanted value.

### Changed

- Allowed usage `console.info` in ESLint configuration (front and back).
- Bumped dependencies versions. Thanks to [Valentin Dupin](https://github.com/ydainna).
- Cleaned backend/src/app.js and removed public index.html file to avoid conflicts when serving react build.

- **Breaking change:** removed setup script: `npm install` (or any other alternative) triggers a `postinstall` script.

- **Breaking change:** removed models "autoloading": now managers should be instantiated manually in `backend/src/models/index.js`.

For example, given you created a `FooManager.js` file to be associated with a `foo` table,
you should add to index, after `const models = {}` statement:

```js
const FooManager = require("./FooManager");

models.foo = new FooManager();
models.foo.setDatabase(pool);
```

- **Breaking change:** renamed `connection` property of managers as `database` to be consistent with quests.

Managers methods should be fixed from:

```js
findAll() {
  return this.connection.query(`select * from  ${this.table}`);
}
```

To:

```js
findAll() {
  return this.database.query(`select * from  ${this.table}`);
}
```
