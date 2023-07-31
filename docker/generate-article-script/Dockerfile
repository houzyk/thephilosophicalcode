FROM node:18

WORKDIR /generate-article-script

COPY package*.json ./

RUN npm install

COPY ./scripts ./scripts

CMD [ "npm", "run", "generate-article" ]
