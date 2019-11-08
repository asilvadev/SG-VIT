'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.createTable('pecas', {
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
      sinopse: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      director: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      duration: {
        type: Sequelize.TIME,
        allowNull: false,
      },
      image: {
        type: Sequelize.STRING,
        allowNull: false,
        //defaultValue: 'teste.jpg',
      },
      classificacao: {
        type: Sequelize.ENUM,
        values: ['Livre', 'Adulto'],
        allowNull: false,
      },
      genero :{
         type: Sequelize.STRING,
        allowNull: false,
       },
      price: {
        type: Sequelize.INTEGER,
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


    return queryInterface.dropTable('pecas');

  }
};
