const express = require('express')
const { connectToMongodb, createUser } = require('./db')
const cors = require('cors')
const app = express()

const connectToMongodbAndStartServer = async () => {
    await connectToMongodb()

    app.use(cors())
    app.use(express.json())

    app.post('/', (req, res) => {
        createUser(req.body)
    })

    app.listen(8080, () => {
        console.log('listen to port 8080');
    })
}

connectToMongodbAndStartServer()