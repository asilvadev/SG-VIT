const { Model, DataTypes } = require('sequelize');

class Ingresso extends Model {
    static init(sequelize){
        super.init({
            tipo: DataTypes.ENUM('Inteira', 'Meia'),
            price: DataTypes.INTEGER,
        },{
            sequelize
        })
    }

    static associate(models){
        this.belongsTo(models.User, { foreignKey : 'user_id', as : 'user_owner' });
        
        
    }
}

module.exports = Ingresso;