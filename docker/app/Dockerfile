FROM node:lts AS build

WORKDIR /app

COPY package*.json ./

COPY tsconfig.json ./

COPY astro.config.mjs ./

COPY ./utils ./utils

COPY ./src ./src

COPY ./content ./content

COPY ./public ./public

RUN npm install

RUN npm run build

FROM httpd:2.4 AS runtime

COPY --from=build /app/dist /usr/local/apache2/htdocs/

EXPOSE 80
