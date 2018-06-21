FROM node:9.11.2-slim

WORKDIR /src/app

COPY package.json .

RUN npm install

RUN npm install -g serve

COPY . .

RUN npm run build && rm -rf node_modules src public package.json package-lock.json

EXPOSE 5000

CMD [ "serve", "-s", "build" ]

