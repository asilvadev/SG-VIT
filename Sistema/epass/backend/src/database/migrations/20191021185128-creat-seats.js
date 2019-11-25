"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("seats", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      espetaculo_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
         references: { model: 'espetaculos', key: 'id' },
        onUpdate: 'CASCADE',
         onDelete: 'CASCADE',
      },
      fila: {
        type: Sequelize.ENUM,
        values: ["A", "B", "C", "D", "E"],
        allowNull: false
      },
      cadeira: {
        type: Sequelize.ENUM,
        values: ["1", "2", "3", "4", "5"],
        allowNull: false
      },
      is_ocupada: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("seats");
  }
};
