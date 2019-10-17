const express = require('express');
const UserController = require('./controllers/UserController');

const routes = express.Router();


routes.get('/', (req, res) => {
    return res.json({funcionando : true})
});

routes.get('/user', UserController.index);
routes.post('/user', UserController.store);

module.exports = routes;