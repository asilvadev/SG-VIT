const User = require('../models/User');
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const config = require('../config/config');


module.exports = {

  async login(req, res) {
    const { email, senha } = req.body;
    if (!email || !senha){
      return res.send({
        success: false,
        message: "Error: Email or Password cannot be blank."
      });
    }
    const bd_user = await User.findOne({
      where: {
        email: email
      }
    });
    if (!bd_user) {
      return res.send({
        success: false,
        message: "Error: Email não encontrado."
      });
    }


    const compareHash = await bcrypt.compare(senha, bd_user.senha);


    if (compareHash) {
      const token = jwt.sign({bd_user},
        config.secret,
        { expiresIn: '1h' // expires in 1 hours
        }
      );

      return res.json({
        success: true,
        id: bd_user.id,
        message: 'Authentication successful!',
        token: token
      });

    } else {
      return res.send({
        success: false,
        message: "Error: Senha invalida."
      });
    }

  },
}
