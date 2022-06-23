import './stylesheet/login.css'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Chip } from '@mui/material'
const axios = require('axios')

export const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)
    const page = useHistory()

    const errorMassege = () => {
        return (
            <Chip label='Wrong email or password' id='error-massege'/>
        )
    }

    const submitLogin = () => {
        const user = {
            email: email,
            password: password
        }

        axios.post('http://localhost:8080/login', user)
            .then((res) => {
                if (res.data) {
                    console.log(res.data);
                    page.push('/home')
                }
                else {
                    setError(errorMassege)
                    setEmail('')
                    setPassword('')
                }
            })
    }


    return (
        <div className="login">
            <div id="login-form">
                <label htmlFor='login-sign-up-form'>Login</label>

                <input type="email" id="login-user-name" placeholder="Email"
                    value={email} onChange={element => setEmail(element.target.value)} /> <br />

                <input type="password" id="login-password" placeholder={'Password'}
                    value={password} onChange={element => setPassword(element.target.value)} /><br />
                <p>{error}</p>
                <button id="login-button" onClick={submitLogin}>Login</button>

            </div>
        </div>
    )
}