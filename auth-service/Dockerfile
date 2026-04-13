FROM node:18-alpine

# Set the working directory
WORKDIR /usr/src/app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install --production

# Copy the rest of the application code
COPY . .

# Expose the service port (common for auth)
EXPOSE 5001

# Start the application
CMD ["npm", "start"]
