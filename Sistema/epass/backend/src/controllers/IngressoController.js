const Ingresso = require('../models/Ingresso');

module.exports = {

    async index(req, res){
        const ingresso = await Ingresso.findAll();

        return res.json(ingresso);
    },

    async store(req, res){
        const { tipo, price } = req.body;

        const ingresso = await Ingresso.create({ tipo, price });

        return res.json(ingresso);
    }
}