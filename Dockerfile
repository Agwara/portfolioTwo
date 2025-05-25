# Dockerfile for Vite React app with Express server
FROM node:20-alpine AS build

# Set working directory
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json* ./
RUN npm install

# Copy source code
COPY . .

# Build the app (Vite outputs to dist by default)
RUN npx vite build

# --- Production image ---
FROM node:20-alpine AS prod
WORKDIR /app

# Install only production dependencies
COPY package.json package-lock.json* ./
RUN npm install --omit=dev

# Copy built frontend and server code
COPY --from=build /app/dist ./build
COPY src/server/server.js ./server.js

# Expose port
EXPOSE 3000

# Start the server
CMD ["node", "server.js"]
