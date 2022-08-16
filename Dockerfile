FROM node:lts-alpine3.16

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install
# uncomment the following line for production
# RUN npm ci --only=production

COPY ./ ./

# EXPOSE 8080

# CMD npm run dev
