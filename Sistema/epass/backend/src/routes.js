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

routes.get('/dashboard/:user_id/ingressos', IngressoController.index);
routes.post('/dashboard/:user_id/:peca_id/buy', IngressoController.store);

/*
routes.get('/dashboard', DashboardController.index); // Listas peças disponiveis no teatro [Menu lateral → Dashboard → Ingressos]
routes.get('/dashboard/ingressos', DashboardController.tickets); //Listar ingressos comprados
routes.get('/dashboard/pecas', DashboardController.pecas); //Listar peças para eventuamente comprar
routes.get('/dashboard/:id_pecas/detalhes', DashboardController.pecas); //Listar peças para eventuamente comprar

routes.get('/login', LoginController.index);
*/

module.exports = routes; 