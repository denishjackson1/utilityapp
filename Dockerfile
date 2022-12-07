#Stage 1 Deployment

FROM node:18-alpine as builder

WORKDIR /app

COPY package.json .

COPY package-lock.json .

RUN npm install -g npm@9.1.3

COPY . ./

RUN npm i react-scripts

RUN npm run build

EXPOSE 80

CMD [ "npm", "run", "start" ]

#Stage 2 Deployment

FROM nginx:1.19.0

COPY --from=builder /app/build /usr/share/nginx/html