FROM node:latest

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm i --include=dev

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]