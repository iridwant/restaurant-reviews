'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RestaurantReview extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      RestaurantReview.belongsTo(models.Review)
      RestaurantReview.belongsTo(models.Restaurant)
    }
  };
  RestaurantReview.init({
    RestaurantId: DataTypes.INTEGER,
    ReviewId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'RestaurantReview',
  });
  return RestaurantReview;
};