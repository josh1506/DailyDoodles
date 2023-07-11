import {
    CREATE_ACCOUNT_TEXT,
    SIGN_UP_TEXT,
    USE_EMAIL_MESSAGE
} from "../../../services/constants/authentication/authentication.js";


const SignUp = () => {
    return (
        <div>
            <h2>{CREATE_ACCOUNT_TEXT}</h2>
            <div className={"social-media-icons"}>
                <i className="bi bi-facebook"></i>
                <i className="bi bi-google"></i>
            </div>
            <div className={"or-use-email-message"}>
                <span>{USE_EMAIL_MESSAGE}</span>
            </div>
            <form className={"form-container"}>
                <input type="text" placeholder={"firstname"}/>
                <input type="text" placeholder={"lastname"}/>
                <input type="email" placeholder={"email"}/>
                <input type="password" placeholder={"password"}/>
                <div className={"button-container"}>
                    <button>{SIGN_UP_TEXT}</button>
                </div>
            </form>
        </div>
    )
}

export default SignUp
