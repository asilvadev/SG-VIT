const express = require('express');
const UserController = require('./controllers/UserController');
const PecaController = require('./controllers/PecaController');
const IngressoController = require('./controllers/IngressoController');

const routes = express.Router();

routes.get('/', UserController.index);

routes.get('/user', UserController.index);
routes.post('/user', UserController.store);


routes.get('/peca', PecaController.index);
routes.post('/peca', PecaController.store);

routes.get('/user/:peca_id/ingressos', IngressoController.index);
routes.post('/user/:peca_id/ingressos', IngressoController.store);

module.exports = routes; 