FROM node:lts-alpine3.16 

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install
# uncomment the following line for production
# RUN npm ci --only=production

COPY ./ ./

RUN npm run lint

RUN npm run test

RUN command

RUN npm prune --production

EXPOSE 8080

HEALTHCHECK --interval=5s \
            --timeout=5s \
            --retries=6 \
            CMD curl -fs http://localhost:8080/_health || exit 1

CMD ["node", "server.js"]