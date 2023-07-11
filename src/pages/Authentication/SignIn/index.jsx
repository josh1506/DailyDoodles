import {useNavigate} from "react-router-dom";

import {
    LOGIN_ACCOUNT_TEXT,
    SIGN_IN_TEXT,
    USE_EMAIL_MESSAGE
} from "../../../services/constants/authentication/authentication.js";
import {toTaskListURL} from "../../../services/constants/routes/urls.js";


const SignIn = () => {
    const navigate = useNavigate()

    const handleLogin = () => {
        navigate(`/${toTaskListURL}`)
    }

    return (
        <div>
            <h2>{LOGIN_ACCOUNT_TEXT}</h2>
            <div className={"social-media-icons"}>
                <i className="bi bi-facebook"></i>
                <i className="bi bi-google"></i>
            </div>
            <div className={"or-use-email-message"}>
                <span>{USE_EMAIL_MESSAGE}</span>
            </div>
            <form className={"form-container"}>
                <input type="email" placeholder={"email"}/>
                <input type="password" placeholder={"password"}/>
                <div className={"button-container"}>
                    <button onClick={handleLogin}>{SIGN_IN_TEXT}</button>
                </div>
            </form>
        </div>
    )
}

export default SignIn
