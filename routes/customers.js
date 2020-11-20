const route = require('express').Router()
const ControllerCustomer = require('../controllers/ControllerCustomer')
const authLogin = require('../helpers/authLogin')

route.get('/register', ControllerCustomer.registerUser)
route.post('/register', ControllerCustomer.saveUser)

route.get('/login', ControllerCustomer.userLogin)
route.post('/login', ControllerCustomer.checkLogin)

route.get('/logout', ControllerCustomer.userLogout)

module.exports = route