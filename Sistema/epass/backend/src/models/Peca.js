const { Model, DataTypes } = require('sequelize');

class Peca extends Model {
    static init(sequelize){
        super.init({
            name: DataTypes.STRING,
            sinopse: DataTypes.TEXT,
            director: DataTypes.STRING,
            duration: DataTypes.TIME,
        },{
            sequelize
        })
    }
}

module.exports = Peca;