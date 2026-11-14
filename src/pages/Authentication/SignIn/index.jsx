import {useState} from "react";
import {useLocation} from "react-router-dom";

import {
    LOGIN_ACCOUNT_TEXT,
    SIGN_IN_TEXT,
    USE_EMAIL_MESSAGE
} from "../../../services/constants/authentication/authentication.js";
import {useUserAuth} from "../../../services/reducers/auth/UserAuthProvider.jsx";


const SignIn = () => {
    const {userLogin, loginError, loginPending} = useUserAuth()
    const notice = useLocation().state?.notice
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        userLogin({email, password})
    }

    return (
        <div>
            <h2>{LOGIN_ACCOUNT_TEXT}</h2>
            <div className={"social-media-icons"} aria-hidden="true">
                <i className="bi bi-facebook"></i>
                <i className="bi bi-google"></i>
            </div>
            <div className={"or-use-email-message"}>
                <span>{USE_EMAIL_MESSAGE}</span>
            </div>
            <form className={"form-container"} onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder={"email"}
                    aria-label={"Email"}
                    autoComplete={"email"}
                    required
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder={"password"}
                    aria-label={"Password"}
                    autoComplete={"current-password"}
                    required
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                {notice && !loginError && <p className={"status-message"} role="status">{notice}</p>}
                {loginError && <p className={"status-message error"} role="alert" ref={el => el?.scrollIntoView({block: "nearest"})}>{loginError}</p>}
                <div className={"button-container"}>
                    <button type={"submit"} disabled={loginPending}>{SIGN_IN_TEXT}</button>
                </div>
            </form>
        </div>
    )
}

export default SignIn
