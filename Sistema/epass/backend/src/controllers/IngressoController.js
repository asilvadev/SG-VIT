const Peca = require('../models/Peca');
const Ingresso = require('../models/Ingresso');
const User = require('../models/User');

module.exports = {

  async index(req, res) {
    const { user_id } = req.params;


    const user = await User.findByPk(user_id, {
      include: { association: 'ingressos' }
    });


    if (!user) {
      return res.status(400).json({ error: 'User not found!' });
    }

    return res.json(user);
  },

  async store(req, res) {
    const { user_id, peca_id } = req.params;
    const { tipo, price } = req.body;
    const meia = price/2;
    const user = await User.findByPk(user_id);
    if (!user) {
      return res.status(400).json({ error: 'User not found!' });
    }

    const peca = await User.findByPk(peca_id);
    if (!peca) {
      return res.status(400).json({ error: 'Show not found!' });
    }

    if (tipo==='Meia'){
      const ingresso = await Ingresso.create({
        tipo,
        meia,
        user_id,
        peca_id,
      })} else {
        const ingresso = await Ingresso.create({
        tipo,
        price,
        user_id,
        peca_id,
      })}



    return res.json(ingresso);
  }


}
