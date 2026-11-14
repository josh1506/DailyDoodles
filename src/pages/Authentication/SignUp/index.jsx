import {useMemo} from "react";

import {
    CREATE_ACCOUNT_TEXT,
    SIGN_UP_TEXT,
    USE_EMAIL_MESSAGE
} from "../../../services/constants/authentication/authentication.js";
import {useUserRegister} from "../../../services/reducers/auth/UserRegisterProvider.jsx";


const SignUp = () => {
    const {
        setUserForm,
        userForm,
        userRegistrater,
        registerError,
        registerPending,
    } = useUserRegister()

    const enableSignUpButton = useMemo(() => {
        return userForm["email"] === "" || userForm["password"] === "" || userForm["password2"] === ""
    }, [userForm])

    return (
        <div>
            <h2>{CREATE_ACCOUNT_TEXT}</h2>
            <div className={"social-media-icons"} aria-hidden="true">
                <i className="bi bi-facebook"></i>
                <i className="bi bi-google"></i>
            </div>
            <div className={"or-use-email-message"}>
                <span>{USE_EMAIL_MESSAGE}</span>
            </div>
            <form className={"form-container"} onSubmit={userRegistrater}>
                <input
                    type="email"
                    placeholder={"Email"}
                    aria-label={"Email"}
                    autoComplete={"email"}
                    value={userForm["email"]}
                    onChange={e => setUserForm({...userForm, email: e.target.value})}
                />
                <input
                    type="password"
                    placeholder={"Password"}
                    aria-label={"Password"}
                    autoComplete={"new-password"}
                    value={userForm["password"]}
                    onChange={e => setUserForm({...userForm, password: e.target.value})}
                />
                <input
                    type="password"
                    placeholder={"Confirm password"}
                    aria-label={"Confirm password"}
                    autoComplete={"new-password"}
                    value={userForm["password2"]}
                    onChange={e => setUserForm({...userForm, password2: e.target.value})}
                />
                <div className={"button-container"}>
                    <button disabled={enableSignUpButton || registerPending}>{SIGN_UP_TEXT}</button>
                </div>
            </form>
            {registerError && <p className={"status-message error"} role="alert">{registerError}</p>}
        </div>
    )
}

export default SignUp
