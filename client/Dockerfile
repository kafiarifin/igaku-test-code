FROM node:12.4.0

WORKDIR /client
ENV PATH /client/node_modules/.bin:$PATH

COPY package*.json ./
RUN npm install
COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]