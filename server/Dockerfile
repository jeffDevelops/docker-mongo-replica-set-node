FROM node:10-alpine
RUN npm i -g nodemon
WORKDIR /app
COPY package*.json ./
RUN npm install --quiet
COPY . .

# Add docker-compose-wait tool -------------------
ENV WAIT_VERSION 2.7.2
ADD https://github.com/ufoscout/docker-compose-wait/releases/download/$WAIT_VERSION/wait /wait
RUN chmod +x /wait

CMD [ "npm", "dev" ]
