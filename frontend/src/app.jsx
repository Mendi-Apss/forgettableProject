import { Login } from "./Login"
import { SignUpForm } from "./SignUp"
import './stylesheet/app.css'


export const App = () => {

    return (
        <div id="app">
            <input type="checkbox" id="login-sign-up-form" aria-hidden="true"></input>
                <Login/>
                <SignUpForm/>
        </div>
    )
}