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
            const cookie = authentication.authentication(response)
            console.log(response);
            res.cookie('user', cookie).send({
                status : 200,
                user : response,
                cookie : cookie
            })
        }
        else {
            res.send('401')
        }
    })

    app.listen(8080, () => {
        console.log('listen to port 8080');
    })
}

connectToMongodbAndStartServer()