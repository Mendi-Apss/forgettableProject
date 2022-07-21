const jwt = require('jsonwebtoken')

module.exports.authentication = (data) => {
    return jwt.sign(data.userName, 'mendi')
}