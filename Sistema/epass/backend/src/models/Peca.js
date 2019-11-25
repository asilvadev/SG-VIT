const { Model, DataTypes } = require('sequelize');

class Peca extends Model {
    static init(sequelize){
        super.init({
            name: DataTypes.STRING,
            sinopse: DataTypes.TEXT,
            director: DataTypes.STRING,
            duration: DataTypes.TIME,
            classificacao: DataTypes.ENUM(
              'Livre',
              'Adulto'
              ),
            genero : DataTypes.STRING,

            image : DataTypes.STRING,
        },{
            sequelize
        })
    }

    static associate(models){
      this.hasMany(models.Espetaculo, { foreignKey: 'peca_id', as: 'pecas'});

    }
}

module.exports = Peca;
