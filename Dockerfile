# Docker file for deploying my docusaurus website using Node 18 alpine
FROM node:18-alpine

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
RUN npm install 

# Bundle app source
COPY . .

# Build the site
RUN npm run build


# Use nginx to serve the site
FROM nginx:alpine

# Copy the build files to the nginx server
COPY --from=0 /usr/src/app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]

