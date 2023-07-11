import {useEffect, useState} from "react";
import {Link, Route, Routes, useLocation} from "react-router-dom";

import SignUp from "./SignUp/index.jsx";
import SignIn from "./SignIn/index.jsx";
import {
    SIGN_IN_TEXT, SIGN_UP_TEXT,
    WELCOME_DESCRIPTION,
    WELCOME_MESSAGE
} from "../../services/constants/authentication/authentication.js";
import {
    loginURL,
    signUpURL,
    toSignUpURL
} from "../../services/constants/routes/urls.js";

import doodleImg from "../../assets/images/hand-drawn-illustrations-collection/OP23Z10.png"
import "../../assets/styles/authentication/authentication.scss"


const Authentication = () => {
    const location = useLocation()
    const [buttonText, setButtonText] = useState("")
    const [buttonUrl, setButtonUrl] = useState("")

    useEffect(() => {
        if (location.pathname === `/${toSignUpURL}`) {
            setButtonText(SIGN_IN_TEXT)
            setButtonUrl(loginURL)
        } else {
            setButtonText(SIGN_UP_TEXT)
            setButtonUrl(toSignUpURL)
        }
    }, [location.pathname])

    return (
        <div className={"authentication"} style={{backgroundImage: `url(${doodleImg})`}}>
            <div className={"content"}>
                <div>
                    <div>
                        <h2>{WELCOME_MESSAGE}</h2>
                        <p>{WELCOME_DESCRIPTION}</p>
                        <Link to={`/${buttonUrl}`}>
                            <button>{buttonText}</button>
                        </Link>
                    </div>
                </div>
                <div>
                    <Routes>
                        <Route path={""} element={<SignIn/>}/>
                        <Route path={`/${signUpURL}`} element={<SignUp/>}/>
                    </Routes>
                </div>
            </div>
        </div>
    )
}

export default Authentication
