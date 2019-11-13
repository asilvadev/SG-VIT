const User = require('../models/User');

module.exports = {

    async index(req, res){
        const users = await User.findAll();

        return res.json(users);
    },
    async find(req, res){

        const { user_id } = req.params;

    const user = await User.findByPk(user_id);

    if (!user) {
      return res.status(400).json({ error: "Usuário não encontrado" });
    }

    return res.json(user);
    },

    async store(req, res){
        const { name, email, cpf, senha, is_func, is_admin} = req.body;

        /* VALIDACAO */
        if(!name){
          return res.send({
            success: false,
            message: 'Error: Name cannot be blank.'
          });
        }
        else if(!email){
          return res.send({
            success: false,
            message: 'Error: E-mail cannot be blank.'
          });
        }
        else if(!cpf){
          return res.send({
            success: false,
            message: 'Error: CPF cannot be blank.'
          });
        }
        else if(!senha){
          return res.send({
            success: false,
            message: 'Error: Senha cannot be blank.'
          });
        }
        else if(cpf.length < 11){
          return res.send({
            success: false,
            message: 'Error: CPF length invalid.'
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

        const user = await User.create({name, email, cpf, senha, is_func, is_admin});

        return res.json(user);
    }
}
