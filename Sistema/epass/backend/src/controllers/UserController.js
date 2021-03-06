const User = require("../models/User");
const bcrypt = require("bcryptjs");


module.exports = {
  async index(req, res) {
    const response = await User.findAll();

    return res.json(response);
  },


    async find(req, res){

        const { user_id } = req.params;

    const user = await User.findByPk(user_id);

    if (!user) {
      return res.status(400).json({ error: "Usuário não encontrado" });
    }

    return res.json(user);
    },



  async store(req, res) {
    const { name, email, cpf, senha, is_func, is_admin } = req.body;

    /* VALIDACAO */
    if (!name) {
      return res.send({
        success: false,
        message: "Error: Name cannot be blank."
      });
    } else if (!cpf) {
      return res.send({
        success: false,
        message: "Error: CPF cannot be blank."
      });
    } else if (!senha) {
      return res.send({
        success: false,
        message: "Error: Senha cannot be blank."
      });
    } else if (cpf.length < 11 || cpf.length >= 12) {
      return res.send({
        success: false,
        message: "Error: CPF length invalid."
      });
    } else if (!email) {
      return res.send({
        success: false,
        message: "Error: Email cannot be blank."
      });
    }
    const bd_email = await User.findOne({
      where: {
        email: email
      }
    });

    if (bd_email) {
      return res.send({
        success: false,
        message: "Error: Email is alredy registed"
      });
    }
    const bd_cpf = await User.findOne({
      where: {
        cpf: cpf
      }
    });

    if (bd_cpf) {
      return res.send({
        success: false,
        message: "Error: CPF is alredy registed"
      });
    }

    // return res.status(400).json({ error: 'Show not found!' });
    // if(!check_email){
    //   return res.send({
    //     success: false,
    //     message: 'Error: E-mail already exist.'
    //   });
    // }
    // const cpf_check = await User.findAll(cpf.body);
    // if(!cpf_check){
    //   return res.send({
    //     success: false,
    //     message: 'Error: CPF already exist.'
    //   });
    // }
    // bcrypt.genSalt(8, function(err, salt) {
    //   if (err) {
    //     throw err;
    //   } else {
    //     bcrypt.hash(senha, salt, function(err, hash) {
    //       if (err) {
    //         throw err;
    //       } else {
    //         //$2a$10$FEBywZh8u9M0Cec/0mWep.1kXrwKeiWDba6tdKvDfEBjyePJnDT7K
    //       }
    //     });
    //   }
    // });
    const hash = await bcrypt.hash(senha, 8);
    const user = await User.create({
      name,
      email,
      cpf,
      senha: hash,
      is_func,
      is_admin
    });

    return res.json(user);
  }
};
