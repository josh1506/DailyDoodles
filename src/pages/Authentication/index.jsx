import doodleImg from "../../assets/images/hand-drawn-illustrations-collection/OP23Z10.png"
import {
    CREATE_ACCOUNT_TEXT,
    SIGN_IN_TEXT,
    SIGN_UP_TEXT, USE_EMAIL_MESSAGE,
    WELCOME_DESCRIPTION,
    WELCOME_MESSAGE
} from "../../services/constants/authentication/authentication.js";

import "../../assets/styles/authentication/authentication.scss"


const Authentication = () => {
    return (
        <div className={"authentication"} style={{backgroundImage: `url(${doodleImg})`}}>
            <div className={"content"}>
                <div>
                    <div>
                        <h2>{WELCOME_MESSAGE}</h2>
                        <p>{WELCOME_DESCRIPTION}</p>
                        <button>{SIGN_IN_TEXT}</button>
                    </div>
                </div>
                <div>
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
                </div>
            </div>
        </div>
    )
}

export default Authentication
