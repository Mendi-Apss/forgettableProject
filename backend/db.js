const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const dbConnection = require('./dbConnection')

// connects to the database
module.exports.connectToMongodb = async () => {
    await mongoose.connect(dbConnection)
}

const userSchema = new mongoose.Schema({
    email: String,
    userName: String,
    password: String
})

const user = mongoose.model('user', userSchema)

module.exports.createUser = async (data) => {

    // Encryption
    const salt = await bcrypt.genSalt(5)
    const encryption = await bcrypt.hash(data.password, salt)

    const newUser = new user({
        email: data.email,
        userName: data.userName,
        password: encryption
    })
    newUser.save()
    console.log(`create new user { userName : ${data.userName}\n password : ${data.password}}`);
}

module.exports.checkForUserPermissions = async (body) => {
    checkdUser = await user.findOn({ email: body.email })

    if (checkdUser) {
        return await bcrypt.compare(body.password, checkdUser.password)
    }
}
