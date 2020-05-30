FROM node:12.4.0

WORKDIR /
ENV PATH /node_modules/.bin:$PATH

COPY package*.json ./
RUN npm install && cd server
COPY . .

EXPOSE 3005

CMD [ "node", "server.js" ]