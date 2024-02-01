#!/usr/bin/env sh

cd /usr/src/app/server
node migrate.js
node index.js
