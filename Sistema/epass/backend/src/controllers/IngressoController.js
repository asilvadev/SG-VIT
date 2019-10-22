const Peca = require('../models/Peca');
const Ingresso = require('../models/Ingresso');

module.exports = {

    async index(req, res){
        const { peca_id } = req.params;
        const peca = await Peca.findByPk(peca_id, {
            include : { association : 'ingressos' }
        });
        if (!peca){
            return res.status(400).json({ error : 'Peca não encontrada'});
        }

        return res.json(peca.ingressos);
    },

    async store(req, res){
        const { peca_id } = req.params;
        const { tipo, price } = req.body;
        
        const peca = await Peca.findByPk(peca_id);
        if (!peca){
            return res.status(400).json({ error : 'Peca não encontrada'});
        }

        const ticket = await Ingresso.create({ tipo, price, peca_id });

        return res.json(ticket); 
    }
}