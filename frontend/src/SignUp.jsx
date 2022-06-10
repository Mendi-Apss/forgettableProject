import './stylesheet/sign-up.css'

export const SignUp = () => {

    return (
        <div className="sign-up">
            <form id="sign-up-form">
                <label for="sign-up-form"> Sign Up</label>
                <input type="email" id="sign-up-user-name" placeholder="User name" /> <br />
                <input type="password" id="sign-up-password" placeholder="Password" /><br />
                <button type="submit" id="sign-up-button">Sign Up</button>
            </form>
        </div>
    )
}