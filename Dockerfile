#pull official base image
FROM node:18-alpine
# set working directory
WORKDIR /app


# install app dependencies
#copies package.json and package-lock.json to Docker environment
COPY package.json .
COPY package-lock.json .

# Installs all node packages
RUN npm install -g npm@9.1.3

# Copies everything over to Docker environment
COPY . ./
RUN npm i react-scripts
RUN npm run build

CMD [ "npm", "run", "start" ]

#Stage 2
#######################################
#pull the official nginx:1.19.0 base image
FROM nginx:1.19.0
#copies React to the container directory
# Set working directory to nginx resources directory
WORKDIR /usr/share/nginx/html
# Remove default nginx static resources
RUN rm -rf ./*
# Copies static resources from builder stage
COPY --from=builder /app/build .
# Containers run nginx with global directives and daemon off
RUN ["nginx", "-g", "daemon off;"]





# FROM node:18-alpine 
# WORKDIR /app
# COPY package.json .
# COPY package-lock.json .

# RUN npm install -g npm@9.1.3
# EXPOSE 80
# COPY . .
# RUN npm i react-scripts
# CMD [ "npm", "run", "start" ]