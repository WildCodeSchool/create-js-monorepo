# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [4.0.1] - 2023-08-09

### Fixed

- Fixed [issue #84](https://github.com/WildCodeSchool/js-template-fullstack/issues/84): provided lock files for `pnpm` and `yarn`, and fixed pre-commit hook to allow changes in root `package.json`. Thanks to [Ayoub Idrissi Ouedrhiri](https://github.com/ioayoub).

- Updated code tours in `.tours` folder.

## [4.0.0] - 2023-07-28

### Added

- Installed `@faker-js/faker` in backend.

### Changed

- Installed `react-router-dom` in front, and did a non breaking change in `main.jsx`: pages can be added to the router, or everything can be developped in App setting aside the router features.

- Uninstalled `husky` in front (useless dependency).

- Moved to async/await syntax in `backend/src/controllers/itemControllers.js`, and passed error handling to next middleware.

- **Breaking change:** Removed item update and delete routes, and the associated CRUD methods in `ItemManager`.

- **Breaking change:** refactored models. Managers like `backend/src/models/ItemManager.js` should declare every CRUD methods: they do not inherit read and delete methods from `AbstractManager` anymore. Methods `find`, `findAll` and `insert` are renamed as `read`, `readAll` and `create`. Moved to async/await syntax.

- **Breaking change:** manager registration should be done in `backend/src/tables.js` instead of `backend/src/models/index.js`.

For example, a `FooManager.js` model was previously registered in `backend/src/models/index.js` like this:

```js
const models = {};

const FooManager = require("./FooManager");

models.foo = new FooManager();
models.foo.setDatabase(pool);
```

Now it should be registered in `backend/src/tables.js` like this:

```js
const FooManager = require("./models/FooManager");

const managers = [
  // ...
  // Add other managers here
  FooManager,
];
```

Usage in controllers changes from this:

```js
const models = require("../models");

// ...

models.foo.callSomeCrudMethod();
```

To this:

```js
const tables = require("../tables");

// ...

tables.foo.callSomeCrudMethod();
```

- **Breaking change:** split ̀`database.sql` logic into table creation in a file `backend/database/schema.sql` and table filling in a file `backend/seed.js`. Updated `backend/migrate.js` accordingly.

- **Breaking change:** renamed `migrate` script as `db:migrate`, and added a `db:seed` script.

- **Breaking change:** removed fallback values for `.env` variables. They have to be defined.

- **Breaking change:** removed magic configuration, and added pedagogical comments to help rewrite it.

## [3.0.2] - 2023-07-12

### Fixed

- Fixed deploy workflow. Thanks to [Pierre Paillard](https://github.com/PPaillard).

## [3.0.1] - 2023-07-10

### Fixed

- Removed useless eslint disable comment in `backend/index.js`. Thanks to [Benoît Vandanjon](https://github.com/vandanjon).

- Fixed pre-commit hook to reject modifications in the root directory.

## [3.0.0] - 2023-05-29

### Added

- Git commands for Windows users, to fix issues with different newline formats (see [README.md](README.md#windows-users)).

### Changed

- Changed default ports configuration to 3000 for frontend and 6000 for backend. Thanks to [Loris Chastanet](https://github.com/lchastanet).

- **Breaking change:** removed cutomized alias for imports in frontend.

### Fixed

- Moved `vite` `and `@`vitejs/plugin-react` as regular dependencies in frontend, and fixed imports in config. Thanks to [Pierre Paillard](https://github.com/PPaillard/).

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
