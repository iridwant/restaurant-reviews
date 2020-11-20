const bcrypt = require('bcryptjs')

function unhashPass(plainPassword, hashedPasword) {
    return bcrypt.compareSync(plainPassword, hashedPasword)
}

module.exports = unhashPass