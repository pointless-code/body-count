# Use the official Node.js 21 image as a base image
FROM node:21

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Define the entrypoint to run the application
ENTRYPOINT ["node", "index.js"]
