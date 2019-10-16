const express = require('express');
const { User } = require('./app/models');
const UserController = require('./app/controllers/UserController');

const routes = express.Router();


routes.get('/', (req, res) => {
    return res.json({ message: "Olá mundo via JSON"}); 
});

routes.post('/user', async (req, res) => {

    const user = await User.create(req.body);
    res.json(user);
    
});

// routes.post('/user', UserController.store);



module.exports = routes;