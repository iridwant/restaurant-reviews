const bcrypt = require('bcryptjs')

function hashPass(plainPassword) {
    const salt = bcrypt.genSaltSync(12)
    const hashedPass = bcrypt.hashSync(plainPassword, salt)

    return hashedPass
}

module.exports = hashPass