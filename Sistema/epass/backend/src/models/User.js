const { Model, DataTypes } = require('sequelize');

class User extends Model {
    static init(sequelize){
        super.init({
            name: DataTypes.STRING,
            email: DataTypes.STRING,
            cpf: DataTypes.STRING,
            senha: DataTypes.STRING,
            is_func: DataTypes.BOOLEAN,
        },{
            sequelize
        })
    }
}

module.exports = User;