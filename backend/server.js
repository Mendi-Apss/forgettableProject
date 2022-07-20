const express = require('express')
const cors = require('cors')
const { connectToMongodb, createUser, checkForUserPermissions } = require('./db')
const app = express()

const connectToMongodbAndStartServer = async () => {
    await connectToMongodb()

    app.use(cors())
    app.use(express.json())

    app.post('/sign-up', (req, res) => {
        createUser(req.body)
    })

    app.post('/login', async (req, res) => {
        res.send(await checkForUserPermissions(req.body))
    })

    app.listen(8080,() => {
        console.log('listen to port 8080');
    })
}

connectToMongodbAndStartServer()