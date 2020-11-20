const route = require('express').Router()
const ControllerRestaurant = require('../controllers/ControllerRestaurant')

route.get('/', ControllerRestaurant.showRestaurants)

module.exports = route