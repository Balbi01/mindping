# Etapa de desarrollo
FROM node:18-alpine AS dev

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 5274
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0", "--port", "5274"]

# Etapa de producción
FROM node:18-alpine AS prod

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

RUN npm install -g serve

EXPOSE 5274
CMD ["serve", "-s", "dist", "-l", "3000"]