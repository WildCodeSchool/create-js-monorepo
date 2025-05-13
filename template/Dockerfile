# Étape 1 : Build client + server
FROM node:20-alpine AS build

WORKDIR /app

# Installation des dépendances
COPY client/package*.json ./client/
COPY server/package*.json ./server/

RUN cd client && npm install
RUN cd server && npm install

# Copie les sources des deux projets
COPY client ./client
COPY server ./server

# Build du client
RUN cd client && npm run build

# Build du serveur
RUN cd server && npm run build

# Étape 2 : Image finale
FROM node:20-alpine

WORKDIR /app

# Copie le dossier server
COPY --from=build /app/server ./server

# Copie le dossier client
COPY --from=build /app/client ./client

# Installation des dépendances du serveur
WORKDIR /app/server

# Installation des dépendances de production
RUN npm install --omit=dev

EXPOSE 3310

CMD ["npm", "run", "start"]