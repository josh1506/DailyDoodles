import {Link} from "react-router-dom";

import {toSignUpURL} from "../../services/constants/routes/urls.js";

import logo from "../../assets/images/logo.png"
import "../../assets/styles/landing/landing-navbar.scss"


const LandingNavbar = () => {
    return (
        <header className={"landing-navbar"}>
            <div>
                <img src={logo} alt={"logo.png"}/>
            </div>
            <div>
                <Link to={`/${toSignUpURL}`}>Login <i className="bi bi-arrow-right"/></Link>
            </div>
        </header>
    )
}

export default LandingNavbar
