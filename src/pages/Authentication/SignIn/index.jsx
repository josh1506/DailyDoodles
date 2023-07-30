import {useState} from "react";

import {
    LOGIN_ACCOUNT_TEXT,
    SIGN_IN_TEXT,
    USE_EMAIL_MESSAGE
} from "../../../services/constants/authentication/authentication.js";
import {useLoginContext} from "../../../services/reducers/AuthProvider.jsx";


const SignIn = () => {
    const userLogin = useLoginContext()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        userLogin({email, password})
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
            <form className={"form-container"} onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder={"email"}
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder={"password"}
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <div className={"button-container"}>
                    <button type={"submit"}>{SIGN_IN_TEXT}</button>
                </div>
            </form>
        </div>
    )
}

export default SignIn
