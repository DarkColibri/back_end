FROM node:11-alpine

RUN export

RUN apk add --no-cache tzdata

ENV TZ=Europe/Madrid

ENV HOME=/root

COPY package*.json $HOME/app/

COPY . $HOME/app

ADD https://github.com/Yelp/dumb-init/releases/download/v1.1.1/dumb-init_1.1.1_amd64 /usr/local/bin/dumb-init

WORKDIR $HOME/app

RUN chmod +x /usr/local/bin/dumb-init

RUN npm cache clean --force 2>&1 

RUN npm install --silent --progress=false --production -f 2>&1

EXPOSE 8080

CMD ["dumb-init", "npm", "start"]
