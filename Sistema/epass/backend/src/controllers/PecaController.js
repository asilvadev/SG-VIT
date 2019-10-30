const Peca = require('../models/Peca');

module.exports = {

    async index(req, res){
        const pecas = await Peca.findAll();


        return res.json(pecas);
    },

    async store(req, res){
        const { name, sinopse, director, duration, classificacao, price, genero } = req.body;

        const peca = await Peca.create({name, sinopse, director, duration, classificacao, price, genero});

        return res.json(peca);
    }
}
