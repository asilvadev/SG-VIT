const { Model, DataTypes } = require('sequelize');

class Espetaculo extends Model {
    static init(sequelize){
        super.init({


          hora: DataTypes.INTEGER,
            price: DataTypes.INTEGER,
            dia: DataTypes.INTEGER,
            mes: DataTypes.ENUM('JAN', 'FEV', 'MAR', 'ABR', 'MAI', 'JUN' , 'JUL', 'AGO', 'SET', 'OUT', 'NOV', 'DEZ'),

        },{
            sequelize
        })
    }

    static associate(models){
      // this.hasOne(models.Peca, {foreignKey: 'espetaculo_id', as: 'espetaculos'})
      this.belongsTo(models.Peca, { foreignKey : 'peca_id', as : 'pecas'});

      this.hasMany(models.Seat, { foreignKey : 'espetaculo_id', as : 'espetaculos'});
      this.hasMany(models.Ingresso, { foreignKey: 'espetaculo_id', as: 'espetaculoss'});


    }
}

module.exports = Espetaculo;
