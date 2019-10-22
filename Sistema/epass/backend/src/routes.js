const express = require('express');
const UserController = require('./controllers/UserController');
const PecaController = require('./controllers/PecaController');

const routes = express.Router();

routes.get('/', UserController.index);

routes.get('/user', UserController.index);
routes.post('/user', UserController.store);

routes.get('/visualizar/:pecas_id', UserController.index);

routes.get('/peca', PecaController.index);
routes.post('/peca', PecaController.store);

routes.post('/:pecas_id/buy', );

module.exports = routes;