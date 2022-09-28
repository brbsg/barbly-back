FROM node:16.17-alpine

WORKDIR /usr/src/app

COPY . .

RUN npm install -g npm@latest

RUN npm install 

RUN npx prisma generate

CMD [ "npm", "run", "dev" ]
