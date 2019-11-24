const express = require("express");
const multer = require("multer");

const uploadConfig = require("./config/upload");

const Auth = require("./controllers/Auth");
const UserController = require("./controllers/UserController");
const PecaController = require("./controllers/PecaController");
const IngressoController = require("./controllers/IngressoController");
const LoginController = require("./controllers/LoginController");
const EspetaculoController = require("./controllers/EspetaculoController");
const SeatController = require("./controllers/SeatController");

const routes = express.Router();
const upload = multer(uploadConfig);

routes.get("/", UserController.index);

routes.get("/user/all", Auth.checkToken, UserController.index);
routes.get("/user/:user_id", UserController.find);
routes.post("/user/create", UserController.store);

routes.post("/user/login", LoginController.login);
routes.post("/user/create", UserController.store);

routes.get("/show/all", PecaController.index);
routes.get("/show/:id", PecaController.detail);
routes.post("/show/create", upload.single("image"), PecaController.store);
routes.post("/show/delete/:id", upload.single("image"), PecaController.destroy);
routes.put("/show/update/:id", upload.single("image"), PecaController.update);

routes.get("/espetaculo/all", EspetaculoController.index);
routes.get("/espetaculo/:id", EspetaculoController.detail);
routes.post("/espetaculo/create", EspetaculoController.store);
routes.post("/espetaculo/delete/:id", EspetaculoController.destroy);
routes.put("/espetaculo/update/:id", EspetaculoController.update);


routes.get("/seat/all/:id", SeatController.index);
routes.post("/seat/create/:id", SeatController.reserva);


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
