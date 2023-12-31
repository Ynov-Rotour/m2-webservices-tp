FROM node:18.9.1-alpine3.16

WORKDIR /app

COPY package*.json ./

RUN npm install
COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]

