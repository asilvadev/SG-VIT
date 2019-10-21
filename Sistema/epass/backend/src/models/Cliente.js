const { Model, DataTypes } = require('sequelize');

class Cliente extends Model {
    static init(sequelize){
        super.init({
            name: DataTypes.STRING,
            email: DataTypes.STRING,
            cpf: DataTypes.STRING,
            senha: DataTypes.STRING,
        },{
            sequelize
        })
    }
}

module.exports = Cliente;