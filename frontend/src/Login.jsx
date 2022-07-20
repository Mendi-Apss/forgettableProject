import './stylesheet/login.css'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Alert } from '@mui/material'
const axios = require('axios')

export const LoginForm = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const page = useHistory()

  const errorMassege = () => {
    return (
      <Alert id='error-massege' sx={{ width: '50%' }} severity="error">
        Wrong User name or password
      </Alert>
    )
  }

  const submitLogin = () => {
    console.log("1");
    const user = {
      email: email,
      password: password
    }

    axios.post('http://localhost:8080/login', user)
      .then((res) => {
        if (res.data.Permissions) {
        }
        else {
          setError(errorMassege())
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

        <button id="login-button" type='submit' onClick={submitLogin}>Login</button>

      </div>
    </div>
  )
}