const mongoose = require('mongoose')


const dbConnection = 'mongodb+srv://forgettable-project:forgettablproject@cluster0.bxkgl.mongodb.net/cluster0?retryWrites=true&w=majority'

// connects to the database
export const connectToMongodb = async () => {
    await mongoose.connect(dbConnection)
}

const userSchema = new mongoose.Schema({
    userName: String,
    password: Number
})

const user = mongoose.model('user', userSchema)

export const createUser = (data) => {
    const newUser = new user({
        userName: data.userName,
        password: data.password
    })
    newUser.save()
    console.log(`create new user { userName : ${data.userName}\n password : ${data.password}}`);
}
