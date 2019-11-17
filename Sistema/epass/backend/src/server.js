const express = require('express');
const cosr = require('cors');
const path = require('path');
const routes = require('./routes');

require('./database');

const server = express();

const socket = require('http').Server(server);
const io = require('socket.io')(socket);

server.use((req, res, next)=>{
  req.io = io;

  next();
})

server.use('/files', express.static(path.resolve(__dirname, '..', 'uploads', 'resized')));
server.use(cosr());
server.use(express.json());
server.use(routes);

socket.listen(3333);
