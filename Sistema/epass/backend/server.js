const express = require('express');
const bodyParse = require('body-parser');


const routes = require('./routes');

const server = express();

server.use(bodyParse.json());
server.use(express.json());
server.use(routes);


server.listen(3333);