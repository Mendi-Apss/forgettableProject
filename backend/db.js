const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const dbConnection = require('./dbConnection')

// connects to the database
module.exports.connectToMongodb = async () => {
    // uses connect() from mongoose to connect async to the db 
    await mongoose.connect(dbConnection)
}

// creates new schema shape
const userSchema = new mongoose.Schema({
    email: String,
    userName: String,
    password: String
})

// creates new user model uses userSchema schema
const user = mongoose.model('user', userSchema)

/** createUser() - creates in db new user 
 * @param data gets user data from the frontend 
 */
module.exports.createUser = async (data) => {

    /** Encryption:
     * @param salt contains generic encrypt for each value
     * @param encryptPassword contains the current encrypted password
     */
    const salt = await bcrypt.genSalt()
    const encryptPassword = await bcrypt.hash(data.password, salt)

    /** create new user whith the details from @param data */
    const newUser = new user({
        email: data.email,
        userName: data.userName,
        password: encryptPassword
    })
    // save the user in db
    newUser.save()
}

/** check for user permissions
 * @param userDetails contains user details from websit
 * @returns true if there is permissions and false if there is not */
module.exports.checkForUserPermissions = async (userDetails) => {
    if (userDetails) {

        /**
         * @param checkUser contains if user exists 
         * */
        checkUser = await user.findOne({ email: userDetails.email })

        if (checkUser) {
            console.log(true);
            /**
             *  @returns true if user entered right password 
             */
            const ifPasswordIsTrue = await bcrypt.compare(userDetails.password, checkUser.password)
            console.log(ifPasswordIsTrue);

            const encryptionforCookie = await bcrypt.genSalt(5)
            const cookie =  await bcrypt.hash(checkUser.userName, encryptionforCookie)

            return {
                "Permissions": ifPasswordIsTrue,
                "userName": checkUser.userName,
                "cookie" : cookie
            }
        }
        else {
            return false
        }
    }
    else {
        return false
    }
}