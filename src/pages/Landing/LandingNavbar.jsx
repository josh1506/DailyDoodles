import {Link} from "react-router-dom";

import {loginURL, toSignUpURL} from "../../services/constants/routes/urls.js";

import logo from "../../assets/images/logo.png"


const LandingNavbar = () => {
    return (
        <header className={"landing-navbar"}>
            <Link to={"/"} className={"brand"}>
                <img src={logo} alt={""} width={32} height={32}/>
                <span>DailyDoodles</span>
            </Link>
            <nav aria-label={"Account"}>
                <Link to={`/${loginURL}`} className={"nav-link"}>Log in</Link>
                <Link to={`/${toSignUpURL}`} className={"dd-btn dd-btn--small"}>Sign up</Link>
            </nav>
        </header>
    )
}

export default LandingNavbar
