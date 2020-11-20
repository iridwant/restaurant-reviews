function authLogin(req, res, next) {
    if (req.session.userId) {
        next()
    } else {
        res.redirect('/customers/login')
    }
}

module.exports = authLogin