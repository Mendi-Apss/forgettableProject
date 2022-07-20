const jwt = require('jsonwebtoken')

export const authentication = (data) => {
    return jwt.sign(data.userName, 'mendi')
}