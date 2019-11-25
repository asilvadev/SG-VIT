const { Model, DataTypes } = require('sequelize');

class User extends Model {
    static init(sequelize){
        super.init({
            name: DataTypes.STRING,
            email: DataTypes.STRING,
            cpf: DataTypes.STRING,
            senha: DataTypes.STRING,

            is_admin: DataTypes.BOOLEAN,
        },{
            sequelize
        })
    }
    static associate(models){
      // this.hasMany(models.Espetaculo, { foreignKey: 'user_id', as: 'users'});
      this.hasMany(models.Ingresso, { foreignKey : 'user_id', as : 'users' });


    }

}

module.exports = User;
