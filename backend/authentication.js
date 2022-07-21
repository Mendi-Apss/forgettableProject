const jwt = require('jsonwebtoken')
const secret = require('./dbConnection')

module.exports.authentication = (data) => {
    return jwt.sign(data.userName, secret.secret)
}

module.exports.checkToken = (userToken) => {
    return jwt.verify(userToken,secret.secret)
}