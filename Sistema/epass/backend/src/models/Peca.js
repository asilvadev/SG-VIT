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

    static associate(models){
        this.hasMany(models.Ingresso, { foreignKey : 'peca_id', as : 'ingressos' });
    }
}

module.exports = Peca;