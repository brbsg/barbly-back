FROM node:16.14.2-alpine

WORKDIR /usr/src

# COPY package*.json ./

# COPY prisma ./prisma/

COPY . .

RUN npm install -g npm@latest

RUN npm install 

RUN npm install @prisma/client

RUN npx prisma generate

CMD [ "npm", "run", "dev" ]
