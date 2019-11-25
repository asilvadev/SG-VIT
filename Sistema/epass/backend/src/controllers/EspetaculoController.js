const Espetaculo = require("../models/Espetaculo");
const Peca = require("../models/Peca");
const Seat = require("../models/Seat");



module.exports = {
  async index(req, res) {
    const response = await Espetaculo.findAll({

    });
    if (!response) {
      return res.status(400).json({ error: 'Espetaculo not found!' });
    }
    return res.json(response);
  },


  async detail(req, res) {
    const { id } = req.params;

    const peca = await Espetaculo.findByPk(id, {

    });

    if (!peca) {
      return res.status(400).json({ error: "Peca não encontrada" });
    }

    return res.json(peca);
  },


  async destroy(req, res) {const { id } = req.params;
  Espetaculo.destroy({
    where: {
      id
    }
  })
    .then(status =>
      res.status(201).json({
        error: false,
        message: "Espetaculo has been deleted"
      })
    )
    .catch(error =>
      res.json({
        error: true,
        error: error
      })
    ); },



  async update(req, res) {
    console.log(req.body);
    console.log(req.file);

    const { hora, price, dia, mes, peca_id } = req.body;


    const { id } = req.params;
    await Espetaculo.update({ hora, price, dia, mes, peca_id },
      { where: { id } }
    )
      .success(
        res.status(200).json({ success: "Espetaculo atualizada" })
      )
      .catch(
        res.status(500).json({ error: "Espetaculo não atualizada" })
      )

      return res.json(update);
    },


  async store(req, res) {
    const { hora, price, dia, mes, peca_id } = req.body;
    const peca = await Peca.findByPk(peca_id);
    if (!peca) {
      return res.status(400).json({ error: 'Peca not found!' });
    }
    const espetaculo = await Espetaculo.create({
      hora, price, dia, mes, peca_id,
    });
    console.log(espetaculo.id);

    await Seat.create({fila: 'A', cadeira: '1', is_ocupada:false, espetaculo_id: espetaculo.id})
    await Seat.create({fila: 'A', cadeira: '2', is_ocupada:false, espetaculo_id: espetaculo.id})
    await Seat.create({fila: 'A', cadeira: '3', is_ocupada:false, espetaculo_id: espetaculo.id})
    await Seat.create({fila: 'A', cadeira: '4', is_ocupada:false, espetaculo_id: espetaculo.id})
    await Seat.create({fila: 'A', cadeira: '5', is_ocupada:false, espetaculo_id: espetaculo.id})

    await Seat.create({fila: 'B', cadeira: '1', is_ocupada:false, espetaculo_id: espetaculo.id})
    await Seat.create({fila: 'B', cadeira: '2', is_ocupada:false, espetaculo_id: espetaculo.id})
    await Seat.create({fila: 'B', cadeira: '3', is_ocupada:false, espetaculo_id: espetaculo.id})
    await Seat.create({fila: 'B', cadeira: '4', is_ocupada:false, espetaculo_id: espetaculo.id})
    await Seat.create({fila: 'B', cadeira: '5', is_ocupada:false, espetaculo_id: espetaculo.id})

    await Seat.create({fila: 'C', cadeira: '1', is_ocupada:false, espetaculo_id: espetaculo.id})
    await Seat.create({fila: 'C', cadeira: '2', is_ocupada:false, espetaculo_id: espetaculo.id})
    await Seat.create({fila: 'C', cadeira: '3', is_ocupada:false, espetaculo_id: espetaculo.id})
    await Seat.create({fila: 'C', cadeira: '4', is_ocupada:false, espetaculo_id: espetaculo.id})
    await Seat.create({fila: 'C', cadeira: '5', is_ocupada:false, espetaculo_id: espetaculo.id})

    await Seat.create({fila: 'D', cadeira: '1', is_ocupada:false, espetaculo_id: espetaculo.id})
    await Seat.create({fila: 'D', cadeira: '2', is_ocupada:false, espetaculo_id: espetaculo.id})
    await Seat.create({fila: 'D', cadeira: '3', is_ocupada:false, espetaculo_id: espetaculo.id})
    await Seat.create({fila: 'D', cadeira: '4', is_ocupada:false, espetaculo_id: espetaculo.id})
    await Seat.create({fila: 'D', cadeira: '5', is_ocupada:false, espetaculo_id: espetaculo.id})

    await Seat.create({fila: 'E', cadeira: '1', is_ocupada:false, espetaculo_id: espetaculo.id})
    await Seat.create({fila: 'E', cadeira: '2', is_ocupada:false, espetaculo_id: espetaculo.id})
    await Seat.create({fila: 'E', cadeira: '3', is_ocupada:false, espetaculo_id: espetaculo.id})
    await Seat.create({fila: 'E', cadeira: '4', is_ocupada:false, espetaculo_id: espetaculo.id})
    await Seat.create({fila: 'E', cadeira: '5', is_ocupada:false, espetaculo_id: espetaculo.id})
    return res.json(espetaculo);
  }



};
