const Seat = require("../models/Seat");
const User = require("../models/User");
const Espetaculo = require("../models/Espetaculo");
const bcrypt = require("bcryptjs");


module.exports = {
  async index(req, res) {
    const { id } = req.params;
    const seats = await Seat.findAll({
      where : {
        espetaculo_id : id,

      },
      order : ['id']
    });

    return res.json(seats);

  },

    async find(req, res){

    },

    async reserva(req, res){
      console.log(req.body);


    const { fila, cadeira } = req.body;
    const { id } = req.params;

    const reserva = await Seat.findOne({
      where:{
        fila,
        cadeira,
        espetaculo_id : id
      }
    });
    if(!reserva){
      return res.status(400).json({ error: "Espetaculo não encontrado" });
    }
    console.log(reserva.is_ocupada);
    if(reserva.is_ocupada === true){

      return res.status(400).json({ error: "Seat Ocupado " });
    }
    await Seat.update({fila, cadeira, espetaculo_id : id , is_ocupada : true}, {
      where : { id : reserva.id }
    })
    .success(
      res.status(200).json({ success: "Seat atualizada" })
    )
    .catch(
      res.status(500).json({ error: "Seat não atualizada" })
    )
    // return res.status(200).json({ error: "Seat Descupado" });

    // await Espetaculo.update({ hora, price, dia, mes, peca_id },
    //   { where: { id } }
    // )


    //   return res.json(update);

    }











};
