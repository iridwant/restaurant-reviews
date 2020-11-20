'use strict';
const hashPass = require('../helpers/hashPass')
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Customer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Customer.hasMany(models.Review)
    }
  };
  Customer.init({
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    birthdate: DataTypes.DATEONLY,
    username: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Customer',
  });

  Customer.beforeCreate((instance, options) => {
    instance.password = hashPass(instance.password)
  })

  return Customer;
};