FROM node:12.18.2-alpine
WORKDIR /usr/src/app
COPY package.json ./

RUN yarn install --silent
COPY . .
EXPOSE 3000
CMD ["yarn", "start"]