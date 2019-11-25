'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('espetaculos', {

      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      peca_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'pecas', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      // seat_id: {
      //   type: Sequelize.INTEGER,
      //   allowNull: false,
      //   references: { model: 'seats', key: 'id' },
      //   onUpdate: 'CASCADE',
      //   onDelete: 'CASCADE',
      // },

      dia: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      hora: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      mes: {
        type: Sequelize.ENUM,
        values: ['JAN', 'FEV', 'MAR', 'ABR', 'MAI', 'JUN', 'JUL', 'AGO', 'SET', 'OUT', 'NOV', 'DEZ'],
        allowNull: false,
      },
      // peca_id:{
      //   type: Sequelize.INTEGER,
      //   allowNull: false,

      //    references: { model: 'pecas', key: 'id' },
      //   onUpdate: 'CASCADE',
      //    onDelete: 'CASCADE',
      // },
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
    return queryInterface.dropTable("espetaculos");
  }
};
