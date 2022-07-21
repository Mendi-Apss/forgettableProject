const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const { connectToMongodb, createUser, checkForUserPermissions } = require('./db')
const auth = require('./authentication')
const app = express()


const connectToMongodbAndStartServer = async () => {
    await connectToMongodb()

    app.use(express.json())
    app.use(cors({
        origin: ['http://localhost:3000'],
        methods: ['POST'],
        credentials: true
    }))
    app.use(cookieParser())
    app.use(bodyParser.urlencoded({ extended: true }))

    app.post('/sign-up', (req, res) => {
        createUser(req.body)
    })

    app.post('/login', async (req, res) => {
        const response = await checkForUserPermissions(req.body)
        if (response) {
            const cookie = auth.authentication(response)
            console.log(response);
            res.cookie('user', cookie).send({
                status: 200,
                user: response,
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