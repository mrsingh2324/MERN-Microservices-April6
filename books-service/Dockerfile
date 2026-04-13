FROM node:18-alpine

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install --production

COPY . .

# Expose the service port
EXPOSE 5002

CMD ["npm", "start"]
