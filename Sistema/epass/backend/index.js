const express = require('express');
const { User } = require('./app/models');

const app = express();

app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send('Olá Mundo :D !');
    

});

app.listen(3333);