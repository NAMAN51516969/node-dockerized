- [ ] run cmd

`npm init`

`npm install express`

create index.js in that particular project

`index.js`


`const express = require("express");
const app = express();
const PORT = 3000;
app.get('/', (req, res) => {
    res.send("Hello my name is virgin mohito fucker rohit")
});
app.listen( PORT, () => console.log("Server is listening to port " + PORT ));`


create dockerfile with name 

`dockerfile`

`FROM node:12-alpine

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY package*.json ./

USER node

RUN npm install

COPY --chown=node:node . .

EXPOSE 3000

CMD [ "node", "app.js" ]`




`node index.js`
`docker pull node`
`docker build -t <nameofdockerimage>`
docker images to check the image

`docker run --name express-api -d -p 3000:3000 <nameofdockerimage>`

`docker ps`
docker ps to check its created or not
