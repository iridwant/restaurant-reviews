const { Restaurant } = require('../models/index')

class ControllerRestaurant {
    static showRestaurants(req, res) {
        let name

        if (req.session.userId) {
            name = req.session.name    
        }

        Restaurant.findAll({
            order: [
                ['name', 'ASC']
            ]
        })
        .then(data => {
            res.render('./restaurants/restaurantList', {data, name})
        })
        .catch(err => {
            res.send(err)
        })
    }
}

module.exports = ControllerRestaurant