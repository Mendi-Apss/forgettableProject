import './stylesheet/login.css'
import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { Alert } from '@mui/material'
import { useCookies } from 'react-cookie';
const axios = require('axios')

export const LoginForm = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const [cookie, setCookie, removCookies] = useCookies()
  const page = useHistory()

  useEffect(() => {
    removCookies('user')
  }, [])

  const errorMassege = () => {
    return (
      <Alert id='error-massege' sx={{ width: '50%' }} severity="error">
        Wrong User name or password
      </Alert>
    )
  }

  const submitLogin = () => {
    const user = {
      email: email,
      password: password
    }

    axios.post('http://localhost:8080/login', user)
      .then((res) => {
        if (res.data.Permissions) {
          console.log(res.data);
          console.log(res);
          localStorage.setItem('user-name', res.data.userName)
          setCookie('user', res.data.cookie)
          page.push('/home')
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