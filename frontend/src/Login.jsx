import './stylesheet/login.css'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Chip } from '@mui/material'
import { useCookies } from 'react-cookie';
const axios = require('axios')

export const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)
    const [cookies, setCookie] = useCookies();
    const page = useHistory()

    const errorMassege = () => {
        return (
            <Chip label='Wrong email or password' id='error-massege' />
        )
    }

    const submitLogin = () => {
        const user = {
            email: email,
            password: password
        }

        axios.post('http://localhost:8080/login', user)
            .then((res) => {
                if (res.data.ifThrIsPermissions) {
                    console.log(res.data);
                    setCookie('user', res.data.userForCookie,{path:'/'})
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

                <div id='error-popup-massege'> {error} </div>

                <button id="login-button" onClick={submitLogin}>Login</button>

            </div>
        </div>
    )
}