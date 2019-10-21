FROM node:8.11-alpine

WORKDIR /usr/src/index

ARG NODE_ENV
ENV NODE_ENV $NODE_ENV

COPY package.json /usr/src/index/
RUN npm install

COPY . /usr/src/index

ENV PORT 5000
EXPOSE $PORT
CMD [ "npm", "start" ]
