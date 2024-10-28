# Use the latest Dockerfile syntax version, which allows using BuildKit's enhanced features.
# This line is primarily for internal syntax definition and doesn't need modification.
#syntax=docker/dockerfile:1.4

# Start with the official Node.js 20 image based on Alpine Linux for a smaller base image.
# Using Alpine keeps the image lightweight, though compatibility issues may arise with certain libraries.
FROM node:20-alpine

# Install necessary packages.
# libc6-compat is often needed for compatibility with some npm packages.
# To improve this layer, limit the packages installed to the bare minimum to keep the image small.
# Additionally, consider whether libc6-compat is absolutely necessary here.
# `no-cache` is used to avoid persisting the package index, saving space.
# hadolint ignore=DL3018
RUN apk add --no-cache libc6-compat

# Set the working directory for the application. This is where commands will be run by default.
# Creating the directory first (RUN mkdir -p /usr/src/app) is generally redundant, as WORKDIR will create it.
WORKDIR /usr/src/app

# Copy all files from the build context to the working directory in the container.
# To improve: Use a .dockerignore file to exclude unnecessary files from the copy (e.g., tests, config files, logs),
# which will result in a smaller image and faster build times.
COPY . .

# Install npm packages.
# To improve: Separate dependencies and application code for better use of Docker cache.
# 1. First, copy just the package.json and package-lock.json.
# 2. Run `npm install` only on those files to cache dependencies, avoiding reinstallation on every code change.
# Example improvement:
# COPY package*.json ./
# RUN npm install
# Then copy the rest of the application code.
RUN npm install

# Set the default command to run the build and start the application.
# To improve: Separate build and runtime steps. Consider running the build in a multi-stage build
# to create a smaller final image without unnecessary build tools or intermediate files.
CMD npm run build && npm run start
