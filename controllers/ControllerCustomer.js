const {
    Customer
} = require('../models/index')
const unhashPass = require('../helpers/unhashPass')
const getFullName = require('../helpers/getFullName')

class ControllerCustomer {
    static userLogin(req, res) {
        let name
        res.render('./customers/login', {name})
    }

    static checkLogin(req, res) {
        const username = req.body.username
        const password = req.body.password

        Customer.findOne({
                where: {
                    username: username
                }
            })
            .then(data => {
                if (data && unhashPass(password, data.password)) {
                    req.session.userId = data.id
                    req.session.name = getFullName(data)
                    res.redirect('/')
                } else {
                    res.send('Username/Password does not match!')
                }
            })
            .catch(err => {
                res.send(err)
            })
    }

    static userLogout(req, res) {
        req.session.destroy(() => {
            res.redirect('/')
        })
    }

    static registerUser(req, res) {
        let name
        res.render('./customers/register', {name})
    }

    static saveUser(req, res) {
        let newUser
        const password = req.body.password
        const retypePass = req.body.retypePassword

        if (password === retypePass) {
            newUser = {
                username: req.body.username,
                password: req.body.password,
                first_name: req.body.firstName,
                last_name: req.body.lastName,
                birthdate: req.body.birthdate
            }
        } else {
            throw new Error('Password does not match!')
        }

        Customer.create(newUser)
            .then(data => {
                res.redirect('/customers/login')
            })
            .catch(err => {
                res.send(err)
            })
    }
}

module.exports = ControllerCustomer