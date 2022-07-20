const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const { connectToMongodb, createUser, checkForUserPermissions } = require('./db')
const authentication = require('./authentication')
const app = express()


const connectToMongodbAndStartServer = async () => {
    await connectToMongodb()

    app.use(cors())
    app.use(express.json())
    app.use(cookieParser())

    app.post('/sign-up', (req, res) => {
        createUser(req.body) 
    })

    app.post('/login', async (req, res) => {
        const response = await checkForUserPermissions(req.body)
        if (response) {
            const cookie = authentication(response)
            console.log(cookie);
            res.cookie('user-token', cookie).sendStatus(200)
            console.log();
        }
        else {
            res.sendStatus(401)
        }
    })

    app.listen(8080, () => {
        console.log('listen to port 8080');
    })
}

connectToMongodbAndStartServer()