const { User } = require('../models/User')

module.exports = {

     async store(req, res){ 
        
        const { name, email, password } = req.body;
        console.log(name);
        console.log(email);
        console.log(password);
        User.create({ name: 'Silva', email: 'teste@imd.ufrn.br', password: '123456' });
        return res.json({user:true});
    //      const user = await User.create({
    //          name, 
    //          email, 
    //          password
    //  })
        // const user = await User.create({ name, email, password });
         
        
        // return res.json(user);
     } 
};