const User = require('../models/User');

module.exports = {

    async index(req, res){
        const users = await User.findAll();

        return res.json(users);
    },

    async store(req, res){
        const { name, email, cpf, senha, is_func} = req.body;

        const user = await User.create({name, email, cpf, senha, is_func});

        return res.json(user);
    }
}