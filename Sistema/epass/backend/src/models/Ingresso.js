const { Model, DataTypes } = require('sequelize');

class Ingresso extends Model {
    static init(sequelize){
        super.init({

        },{
            sequelize
        })
    }

    static associate(models){
        this.belongsTo(models.User, { foreignKey : 'user_id', as : 'users' });
        this.belongsTo(models.Espetaculo, { foreignKey : 'espetaculo_id', as : 'espetaculos' });
        this.belongsTo(models.Seat, { foreignKey : 'seat_id', as : 'seats' });




    }
}

module.exports = Ingresso;
