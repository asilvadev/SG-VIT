const express = require('express');
const cosr = require('cors');
const routes = require('./routes');

require('./database');

const server = express();

server.use(cosr());
server.use(express.json());
server.use(routes);

server.listen(3333);