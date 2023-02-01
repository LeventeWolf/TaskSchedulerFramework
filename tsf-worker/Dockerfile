FROM node:16-alpine3.15

WORKDIR /app

ADD package*.json ./

RUN apk --no-cache add curl
RUN npm install

ADD . .

CMD node worker.js
#CMD ["tail", "-f", "/dev/null"]
