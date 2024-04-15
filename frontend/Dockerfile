# Stage 1: Building the application
FROM node:18-alpine AS builder

# Create app directory
WORKDIR /app

# Install app dependencies by copying package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Bundle app source
COPY . .

# Stage 2: Running the application with a lightweight Node image
FROM node:18-alpine

# Create app directory
WORKDIR /app

# Copy the built app from the builder stage
COPY --from=builder /app/next.config.mjs ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./package*.json

# Expose the port Next.js runs on
EXPOSE 3000

# Command to run the application
CMD [ "npm", "run", "prod" ]