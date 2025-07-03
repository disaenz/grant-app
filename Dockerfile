# Stage 1: Build the React app
FROM node:18-alpine as build

WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the app and build for production
COPY . .

# Add ARG as ENV to container
ARG REACT_APP_GRANT_API_URL
ENV REACT_APP_GRANT_API_URL=$REACT_APP_GRANT_API_URL
RUN npm run build

# Stage 2: Serve the built app using Nginx
FROM nginx:alpine

# Copy the production build from the previous stage to Nginx's public folder
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
