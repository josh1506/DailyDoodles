import logo from "../../assets/images/logo.png"

import "../../assets/styles/landing/landing-navbar.scss"


const LandingNavbar = () => {
    return (
        <header className={"landing-navbar"}>
            <div>
                <img src={logo} alt={"logo.png"}/>
            </div>
            <div>
                <span>Login <i className="bi bi-arrow-right"/></span>
            </div>
        </header>
    )
}

export default LandingNavbar
