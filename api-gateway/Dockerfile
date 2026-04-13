FROM node:18-alpine

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install --production

COPY . .

# Gateway usually runs on the standard web port or 5000
EXPOSE 5000

CMD ["npm", "start"]
