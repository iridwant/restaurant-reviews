'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addConstraint('RestaurantReviews', {
      fields: ['ReviewId'],
      type: 'foreign key',
      name: 'fk_reviewId',
      references: {
        table: 'Reviews',
        field: 'id'
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeConstraint('RestaurantReviews', 'fk_reviewId', {})
  }
};
