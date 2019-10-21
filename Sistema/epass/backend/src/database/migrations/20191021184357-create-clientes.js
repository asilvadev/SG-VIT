'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.createTable('clientes', { 
      
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.EMAIL,
        isEmail: true,
        allowNull: false,
      },
      senha: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: cpf,
      },
      cpf: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE, 
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE, 
        allowNull: false,
      },
    });

  },

  down: (queryInterface, Sequelize) => {
    
      return queryInterface.dropTable('clientes');
    
  }
};
