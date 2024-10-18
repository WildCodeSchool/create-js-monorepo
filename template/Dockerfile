#syntax=docker/dockerfile:1.4
FROM node:20-alpine

# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
# hadolint ignore=DL3018
RUN apk add --no-cache libc6-compat

WORKDIR /usr/src/app

COPY . .

RUN npm install

CMD npm run build && npm run start
