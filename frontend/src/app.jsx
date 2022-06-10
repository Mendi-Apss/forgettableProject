import { Login } from "./Login"
import { SignUp, SignUpForm } from "./SignUp"
import './stylesheet/app.css'


export const App = () => {

    return (
        <div id="app">
            {/* <div id="login-component">
                <Login />
            </div> */}
            <div id="sign-up-component">
                <SignUpForm />
            </div>
        </div>
    )
}