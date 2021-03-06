'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Review.belongsTo(models.Customer)
      Review.hasMany(models.RestaurantReview)
      Review.belongsToMany(models.Restaurant, {through: models.RestaurantReview})
    }
  };
  Review.init({
    review: DataTypes.STRING,
    rating: DataTypes.INTEGER,
    CustomerId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Review',
  });
  return Review;
};