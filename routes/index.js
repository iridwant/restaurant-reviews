const route = require('express').Router()
const restaurantRoutes = require('./restaurants')
const reviewRoutes = require('./reviews')
const customerRoutes = require('./customers')
const authLogin = require('../helpers/authLogin')

route.use('/', restaurantRoutes)
route.use('/customers', customerRoutes)
route.use('/reviews', reviewRoutes)
route.get('/charts', (req, res) => {
    res.render('visualization')
})

module.exports = route