const route = require('express').Router()
const ControllerReview = require('../controllers/ControllerReview')
const authLogin = require('../helpers/authLogin')

route.get('/', ControllerReview.viewAllReviews)
route.get('/add', authLogin, ControllerReview.addReview)
route.post('/add', authLogin, ControllerReview.saveReview)
route.get('/add/:id', authLogin, ControllerReview.addReview)

route.get('/delete/:id', authLogin, ControllerReview.deleteReview)

route.get('/edit/:id', authLogin, ControllerReview.editReview)
route.post('/edit/:id', authLogin, ControllerReview.updateReview)

module.exports = route