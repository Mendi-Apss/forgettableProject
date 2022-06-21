import { useState } from 'react'
import './stylesheet/sign-up.css'
const Axios = require('axios')

export const SignUpForm = () => {

    const [email, setEmail] = useState('')
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    

    const sendUserData = () => {
        const user = {
            email : email,
            userName: userName,
            password: password
        }
        console.log(user);

        Axios.post('http://localhost:8080/sign-up', user)
    }

    return (
        <div className="sign-up">
            <form id="sign-up-form" onSubmit={sendUserData}>
                <label htmlFor="login-sign-up-form"> Sign Up</label>

                <input type="email" id="sign-up-user-name" placeholder="Email"
                    value={email} onChange={element => setEmail(element.target.value)} /> <br />

                <input type="text" id="sign-up-username" placeholder="User name"
                    value={userName} onChange={element => setUserName(element.target.value)} /><br />

                <input type="password" id="sign-up-password" placeholder="Password"
                    value={password} onChange={element => setPassword(element.target.value)} /><br />

                <button type="submit" id="sign-up-button">Sign Up</button>
            </form>
        </div>


    )
}