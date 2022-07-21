import { Login } from "./Login"
import { SignUpForm } from "./SignUp"
import './stylesheet/app.css'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import { Home } from "./Home"
import { useCookies } from 'react-cookie';



export const App = () => {

    const [cookie] = useCookies()

    const ifCookieExist = () => {
        if (cookie.user) {
            return <Home />
        }
        else {
            return <Redirect to={'/login'} />
        }
    }

    return (
        <Router>
            <Switch>
                <Route exact path={'/'}>
                    <Redirect to={'/login'} />
                </Route>
                <Route exact path={'/login'}>
                    <div id="app">
                        <input type="checkbox" id="login-sign-up-form" aria-hidden="true"></input>
                        <Login />
                        <SignUpForm />
                    </div>
                </Route>
                <Route exact path='/home'>
                    {ifCookieExist}
                </Route>
            </Switch>
        </Router>

    )
}