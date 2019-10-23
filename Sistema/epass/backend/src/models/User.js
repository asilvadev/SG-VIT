const { Model, DataTypes } = require('sequelize');

class User extends Model {
    static init(sequelize){
        super.init({
            name: DataTypes.STRING,
            email: DataTypes.STRING,
            cpf: DataTypes.STRING,
            senha: DataTypes.STRING,
            is_func: DataTypes.BOOLEAN,
            is_admin: DataTypes.BOOLEAN,
        },{
            sequelize
        })
    }
    static associate(models){
        this.hasMany(models.Ingresso, { foreignKey : 'user_id', as : 'ingressos' });
        
        
    }
    
}

module.exports = User;