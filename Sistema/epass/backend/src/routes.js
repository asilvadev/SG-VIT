const express = require('express');

const routes = express.Router();

app.get('/', (req, res) => {
    return res.json({message: "Teste de JSON com Nodemon"});
});

module.exports = routes;