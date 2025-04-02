# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

[Open an issue](https://github.com/WildCodeSchool/create-js-monorepo/issues) if you have any request/feedback :)

## [7.2.1] - 2025-04-02

### Fixed

- Fixed husky related code in create script. Thanks to [Kevin Peset](https://github.com/kpeset) for pointing this.

## [7.2.0] - 2025-03-31

### Fixed

- Replaced husky with native config for git hooks.

- Used `tsx` in script `start` to avoid server transpilation.

### Added

- Added `check:fix` script. Thanks to [Florian Schaessens](https://github.com/Dolpheus89).

- Added `.gitattributes` file to [mind the end of line](https://adaptivepatchwork.com/2012/03/01/mind-the-end-of-your-line/).

## [7.1.8] - 2025-01-03

### Fixed

- Fixed import path in seed system. Thanks to [Brian Boudrioux](https://github.com/Brian-boudrioux).

## [7.1.7] - 2024-10-28

### Fixed

- Checked types in addition to biome check.

## [7.1.6] - 2024-10-22

### Fixed

- Fixed package templates.

## [7.1.5] - 2024-10-19

### Fixed

- Commented `client/src/main.tsx` to make it more pedagogical.

## [7.1.4] - 2024-10-18

### Fixed

- Cleaned docker files.

## [7.1.3] - 2024-10-18

### Fixed

- Fixed double deploy execution in GitHub workflows.

- Fixed Dockerfile after use of npm workspaces : root directory where `node_modules` belongs wasn't copied.

- Fixed a variable name in docker-compose files.

## [7.1.2] - 2024-10-15

### Fixed

- Removed deprecated lines in husky files. Thanks to [Kevin Peset](https://github.com/kpeset) for pointing the issue.

## [7.1.1] - 2024-10-11

### Fixed

- Fixed error messages in server when client build doesn't exist.

- Removed mentions to out of date documentation https://wildcodeschool-js-monorepo.vercel.app/.

## [7.1.0] - 2024-10-05

### Added

- Added native integration of CORS package.

## [7.0.2] - 2024-10-03

### Fixed

- Fixed type declarations to use `import.meta.env` in client without error. Thanks to [Kevin Peset](https://github.com/kpeset) for the fix.

## [7.0.1] - 2024-09-29

### Changed

- Renamed package from `@wildcodeschool/create-js-monorepo` (someone created the org before me) to `@this-is-to-learn/create-js-monorepo`.

### Added

- Added comment about cors types in server.

- Added middleware example in template README.

- Added `server/src/types/express/index.d.ts` to extend Express Request type. Thanks to [Kevin Peset](https://github.com/kpeset) for pointing the issue in middleware declarations.

### Fixed

- Fixed Biome check when there is no files to check. Thanks to [Victorien Elvinger](https://github.com/conaclos) for the answer in Biome discord.

## [7.0.0] - 2024-07-20

### Changed

- **Breaking change:** Renamed package from `create-harmonia` to `@wildcodeschool/create-js-monorepo`.

- **Breaking change:** Migrated from ESLint and Prettier to [Biome](https://biomejs.dev/).

- **Breaking change:** Migrated client and server to TypeScript.

- **Breaking change:** Refactored server from MVC to module-based architecture.

## [5.0.9] - 2024-05-06

### Added

- Added `chmod` for husky files during project initialization.

## [5.0.7] - 2024-03-23

### Added

- Added `commitlint` (disabled by default). Thanks to [Arthur Heurteubise](https://github.com/ArthurHtbk) for the idea.

- Added`validate-branch-name` (disabled by default). Thanks to [Arthur Heurteubise](https://github.com/ArthurHtbk) for the idea.

### Changed

- **Breaking change:** Refactored the repository as a `create-<initializer>` package, where `initializer` is **harmonia**. The template files are moved into a new `template` folder.

- **Breaking change:** Renamed `template/frontend` and `template/backend` folders as `template/client` and `template/server`.

- **Breaking change:** Splitted server declaration of the routes into `router.js` subfiles in subfolders following URL paths. Thanks to [Ayoub Idrissi Ouedrhiri](https://github.com/ioayoub) for the idea.

- Moved `template/server/migrate.js` and `template/server/seed.js` into a new `template/server/bin` folder. Updated server scripts accordingly.

- Managed `template/client` and `template/server` subfolders through [npm workspaces](https://docs.npmjs.com/cli/v10/using-npm/workspaces).

- **Breaking change:** Renamed database `Manager` classes as `Repository`, and moved them from `template/server/src/models` into `template/server/database/models`. Also moved `template/server/src/tables.js` into `template/server/database/tables.js`.

- **Breaking change:** Refactored `template/server/database/tables.js` for a manual, explicit instantiation of the repositories.

- **Breaking change:** Refactored seed system for the database. See `template/server/database/fixtures` for further details.

- **Breaking change:** Renamed `template/server/controllers/*Controllers.js` files as `template/server/controllers/*Actions.js`. Thanks to [Matthieu Lopez](https://github.com/wildmatthieu) for the idea.

### Fixed

- Fixed serving of React build from the server. Thanks to [Samuel Faber](https://github.com/samuelfaberdev), [Anthony Gorski](https://github.com/GorskiAnthony) and [Julien Richard](https://github.com/jujuck).

- Fixed deployment scripts, and improved deployment execution time. Thanks to [Dimitri Lavaury-Collot](https://github.com/Gwada) and [Julien Richard](https://github.com/jujuck).

## [4.2.0] - 2023-11-30

### Added

- Added `clean` script in root `package.json`. Thanks to [Damien Buchet](https://github.com/dbuchet) for the idea.

### Changed

- Changed `--cached` option of the `git diff` command in the pre-commit hook for the more explicit alias `--staged`.

### Fixed

- Fixed allow list in pre-commit hook : root `package.json` file can **not** be changed anymore (but root `package-lock.json` may be regenerated).

- Fixed GitHub actions for deployment when repository is hosted on a GitHub organization account. Thanks to [Jean-François Morin](https://github.com/jfm-wcs) and [Julien Richard](https://github.com/jujuck).

- Fixed job triggers for deployment. Thanks to [Jean-François Morin](https://github.com/jfm-wcs) and [Julien Richard](https://github.com/jujuck).

## [4.1.2] - 2023-10-31

### Changed

- Refined `lint-staged` configuration to focus on code files only. Thanks to [Dimitri Lavaury-Collot](https://github.com/Gwada).

- Removed `yarn` and `pnpm` package managers in favor of npm. Thanks to [Dimitri Lavaury-Collot](https://github.com/Gwada).

- Used cache to optimize job execution time. Thanks to [Dimitri Lavaury-Collot](https://github.com/Gwada).

## [4.1.1] - 2023-10-18

### Fixed

- Fixed GitHub actions for lint.

## [4.1.0] - 2023-10-16

### Fixed

- Fixed [issue #11](https://github.com/WildCodeSchool/js-template-fullstack/issues/11): installed and configured `lint-staged`.

### Added

- Installed `supertest` in backend, and added smoke testing samples in a `backend/tests/items/routes.spec.js` file.

- Added unit testing samples in a `backend/tests/items/manager.spec.js` file.

- Added a section in `backend/src/app.js` for error handling. Reminder: [an error-handling middleware _must_ have 4 parameters](https://stackoverflow.com/a/51826777/6612932)

- Added support for network-wide testing (ie: mobile testing) using `--host` option of Vite. Thanks to [Loïc Brassart](https://github.com/LoicBrassart).

### Changed

- Isolated `database` client from `backend/src/models/AbstractManager.js` into a separate file `backend/database/client.js`, so it is accessible to test suite in a consistent way.

- **Breaking change:** Refactored deployment using Traefik. Thanks to [Jean-François Morin](https://github.com/jfm-wcs) and [Anthony Gorski](https://github.com/GorskiAnthony).

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

- Git commands for Windows users, to fix issues with different newline formats (see [README.md](template/README.md#windows-users)).

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
