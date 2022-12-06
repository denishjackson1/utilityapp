FROM node:18-alpine 
WORKDIR /app
COPY package.json .
COPY package-lock.json .

RUN npm install -g npm@9.1.3
COPY . .
EXPOSE 80
RUN npm i react-scripts
CMD [ "npm", "run", "start" ]