const { Model, DataTypes } = require('sequelize');

class Seat extends Model {
    static init(sequelize){
        super.init({
            fila: DataTypes.ENUM('A', 'B', 'C', 'D', 'E'),
            cadeira : DataTypes.ENUM('1', '2', '3', '4', '5'),
            is_ocupada : DataTypes.BOOLEAN,
        },{
            sequelize
        })
    }

    static associate(models){

    }
}

module.exports = Seat;
