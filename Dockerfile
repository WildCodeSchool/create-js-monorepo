# Dockerfile backend
FROM node:16.14

WORKDIR /usr/src/app

COPY ./ .

RUN npm install
