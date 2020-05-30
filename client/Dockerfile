FROM node:12.4.0

WORKDIR /client

ENV PATH /client/node_modules/.bin:$PATH

COPY ./client .
RUN npm install
RUN npm install react-scripts@latest -g

CMD ["npm", "start"]