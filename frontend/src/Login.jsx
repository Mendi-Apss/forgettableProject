import './stylesheet/login.css'

export const Login = () => {

    return (
        <div className="login">
            <form id="login-form">
                <label for="login-sign-up-form">Login</label>
                <input type="email" id="login-user-name" placeholder="User name" /> <br />
                <input type="password" id="login-password" placeholder="Password" /><br />
                <button type="submit" id="login-button">Login</button>
            </form>
        </div>
    )
}

// const checksAccessPermissions = () => {

// }