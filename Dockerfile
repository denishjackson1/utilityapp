FROM node:18-alpine 
WORKDIR /app
COPY package.json .
COPY package-lock.json .

RUN npm install -g npm@9.1.3
EXPOSE 80
COPY . .
RUN npm i react-scripts
CMD [ "npm", "run", "start" ]