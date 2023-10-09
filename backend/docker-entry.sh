#!/usr/bin/env sh

sleep 5
npm run db:migrate
npm run db:seed
npm start
