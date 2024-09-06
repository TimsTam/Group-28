# Frontend Dockerfile

# Use an official Node.js runtime as a parent image
FROM node:latest

RUN mkdir -p /usr/src/app

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package.json /usr/src/app

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . /usr/src/app

# Expose the port the app runs on
EXPOSE 3000

# Start the app
CMD ['node', 'app.js']
