'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addConstraint('RestaurantReviews', {
      fields: ['RestaurantId'],
      type: 'foreign key',
      name: 'fk_restaurantId',
      references: {
        table: 'Restaurants',
        field: 'id'
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeConstraint('RestaurantReviews', 'fk_restaurantId', {})
  }
};
