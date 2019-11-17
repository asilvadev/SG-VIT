const express = require("express");
const multer = require("multer");

const uploadConfig = require("./config/upload");

const UserController = require("./controllers/UserController");
const PecaController = require("./controllers/PecaController");
const IngressoController = require("./controllers/IngressoController");

const routes = express.Router();
const upload = multer(uploadConfig);


routes.get('/', UserController.index);

routes.get('/user/all', UserController.index);
routes.get('/user/:user_id', UserController.find);
routes.post('/user/create', UserController.store);


routes.get("/user/all", UserController.index);
routes.post("/user/login", UserController.login);
routes.post("/user/create", UserController.store);


routes.get('/show/all', PecaController.index);
routes.get('/show/:id', PecaController.detail);
routes.post('/show/create', upload.single('image') , PecaController.store);


// routes.get('/dashboard/:user_id/ingressos', IngressoController.index);
// routes.post('/dashboard/:user_id/:peca_id/buy', IngressoController.store);

/*
routes.get('/dashboard', DashboardController.index); // Listas peças disponiveis no teatro [Menu lateral → Dashboard → Ingressos]
routes.get('/dashboard/ingressos', DashboardController.tickets); //Listar ingressos comprados
routes.get('/dashboard/pecas', DashboardController.pecas); //Listar peças para eventuamente comprar
routes.get('/dashboard/:id_pecas/detalhes', DashboardController.pecas); //Listar peças para eventuamente comprar

routes.get('/login', LoginController.index);
*/

module.exports = routes;
