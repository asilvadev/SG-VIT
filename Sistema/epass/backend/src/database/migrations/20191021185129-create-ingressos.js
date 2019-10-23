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
        // user_id: {
        //   type: Sequelize.INTEGER,
        //   allowNull: false,
        //   references: { model: 'users', key: 'id' },
        //   onUpdate: 'CASCADE',
        //   onDelete: 'CASCADE',
        // },
        peca_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: { model: 'pecas', key: 'id' },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        },
        user_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: { model: 'users', key: 'id' },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        },
        tipo: {
          type: Sequelize.ENUM,
          values: ['Inteira', 'Meia'],
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
    
      return queryInterface.dropTable('ingressos');
    
  }
};
