# Multi-stage build for Garfenter Landing Page
# Stage 1: Build the Astro site
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy source files
COPY . .

# Build the static site
RUN npm run build

# Stage 2: Serve with nginx
FROM nginx:alpine

# Copy built assets from builder
COPY --from=builder /app/dist /var/www/html

# Copy nginx configuration (optional - uses default nginx.conf from compose volume)
# COPY nginx.conf /etc/nginx/nginx.conf

# Expose port
EXPOSE 80

# nginx runs in foreground by default
CMD ["nginx", "-g", "daemon off;"]
