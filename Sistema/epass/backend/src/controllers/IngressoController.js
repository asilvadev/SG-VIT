const Peca = require('../models/Peca');
const Ingresso = require('../models/Ingresso');
const User = require('../models/User');
const Seat = require('../models/Seat');

module.exports = {

  async index(req, res) {
    const { user_id } = req.params;


    const ticket = await Ingresso.findAll({
      where : {
        user_id
      }
      // include: { association: 'ingressos' }
    });
    return res.json(ticket);


    if (!ticket) {
      return res.status(400).json({ error: 'User não tem ingresso!' });
    }

    return res.json(ticket);
  },

  async store(req, res) {
    const { user_id, espetaculo_id, seat_id } = req.body;

    const ingresso = await Ingresso.create({
      user_id, espetaculo_id, seat_id
    });

    await Seat.update({is_ocupada : true}, {
      where : { id : seat_id }
    });





    return res.json(ingresso);
  },

  async destroy(req, res){
    const { id } = req.params;
    const data = await Ingresso.findByPk(id);

   console.log(data.seat_id);
   await Seat.update({is_ocupada : false}, {
    where : { id : data.seat_id }
  });

  await Ingresso.destroy({
    where : {
      id
    }
  }).then(status =>
    res.status(201).json({
      error: false,
      message: "Peca has been deleted"
    })
  )
  .catch(error =>
    res.json({
      error: true,
      error: error
    })
  );

  }




}
