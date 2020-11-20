const {
    Review,
    Restaurant,
    RestaurantReview,
    Customer
} = require('../models/index')

class ControllerReview {
    static viewAllReviews(req, res) {
        let name = req.session.name

        if (name) {
            Review.findAll({
                    where: {
                        CustomerId: req.session.userId
                    },
                    include: [Restaurant]
                })
                .then(data => {
                    res.render('./reviews/allReviews', {
                        data,
                        name
                    })
                    // res.send(data)
                })
        } else {
            console.log(name);

            Review.findAll({
                    include: [Restaurant, Customer]
                })
                .then(data => {
                    res.render('./reviews/allReviews', {
                        data,
                        name
                    })
                    // res.send(data)
                })
                .catch(err => {
                    res.send(err)
                })
        }
    }

    static addReview(req, res) {
        let name = req.session.name

        const restaurantId = req.params.id

        Restaurant.findAll({
                order: [
                    ['name', 'ASC']
                ]
            })
            .then(data => {
                res.render('./reviews/addReview', {
                    data,
                    name,
                    restaurantId
                })
            })
            .catch(err => {
                res.send(err)
            })

    }

    static saveReview(req, res) {
        const restaurantId = req.body.restaurant

        const newReview = {
            review: req.body.review,
            rating: req.body.rating,
            CustomerId: req.session.userId
        }

        Review.create(newReview)
            .then(data => {
                return RestaurantReview.create({
                    RestaurantId: restaurantId,
                    ReviewId: data.id
                })
            })
            .then(data => {
                res.redirect('/reviews')
            })
            .catch(err => {
                res.send(err)
            })
    }

    static deleteReview(req, res) {
        const reviewId = req.params.id

        Review.findByPk(reviewId)
            .then(data => {
                return Review.destroy({
                    where: {
                        id: reviewId
                    }
                })
            })
            .then(data => {
                res.redirect('/reviews')
            })
            .catch(err => {
                res.send(err)
            })
    }

    static editReview(req, res) {
        let name = req.session.name

        const reviewId = req.params.id

        Review.findByPk(reviewId, {
                include: [Restaurant]
            })
            .then(data => {
                res.render('./reviews/editReview', {
                    data,
                    name
                })
            })
            .catch(err => {
                res.send(err)
            })
    }

    static updateReview(req, res) {
        const reviewId = req.params.id

        const updateValue = {
            review: req.body.review,
            rating: req.body.rating
        }

        Review.update(updateValue, {
                where: {
                    id: reviewId
                }
            })
            .then(data => {
                res.redirect('/reviews')
            })
            .catch(err => {
                res.send(err)
            })
    }
}

module.exports = ControllerReview