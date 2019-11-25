'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.createTable('ingressos', {

        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        user_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: { model: 'users', key: 'id' },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        },
        espetaculo_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: { model: 'espetaculos', key: 'id' },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        },
        seat_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: { model: 'seats', key: 'id' },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
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

      return queryInterface.dropTable('ingressos');

  }
};
