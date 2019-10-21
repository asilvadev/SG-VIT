const { Model, DataTypes } = require('sequelize');

class Ingresso extends Model {
    static init(sequelize){
        super.init({
            tipo: DataTypes.ENUM('Interia', 'Meia'),
            price: DataTypes.INTEGER,
        },{
            sequelize
        })
    }
}

module.exports = Ingresso;