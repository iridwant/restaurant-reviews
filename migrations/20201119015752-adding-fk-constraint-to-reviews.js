'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addConstraint('Reviews', {
      fields: ['CustomerId'],
      type: 'foreign key',
      name: 'fk_customerId',
      references: {
        table: 'Customers',
        field: 'id'
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeConstraint('Reviews', 'fk_customerId', {})
  }
};
