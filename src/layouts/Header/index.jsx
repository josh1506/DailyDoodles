import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";

import {
    landingURL,
    toTaskListURL,
    toTaskTodayURL,
    toTaskUpcomingURL
} from "../../services/constants/routes/urls.js";

import "../../assets/styles/header/navbar.scss"


const Header = () => {
    const [showNav, setShowNav] = useState(false)
    const navigate = useNavigate()

    const handleSignOut = () => {
        navigate(`/${landingURL}`)
    }

    return (
        <header className={"nav-header"}>
            <nav>
                <div>
                    <div className={"nav-title"}>
                        <span>Menu</span>
                        <div onClick={() => setShowNav(!showNav)}>
                            <div className={`${showNav ? "active burger-top" : "burger-top"}`}></div>
                            <div className={`${showNav ? "active burger-middle" : "burger-middle"}`}></div>
                            <div className={`${showNav ? "active burger-bottom" : "burger-bottom"}`}></div>
                        </div>
                    </div>

                    <div className={"nav-tasks"}>
                        <span>TASKS</span>
                        <ul>
                            <li>
                                <Link to={`/${toTaskListURL}`}>
                                    <div>
                                        <i className="bi bi-card-list"></i>
                                        <span>List</span>
                                    </div>
                                    <span>1</span>
                                </Link>
                            </li>
                            <li>
                                <Link to={`/${toTaskTodayURL}`}>
                                    <div>
                                        <i className="bi bi-list-task"/>
                                        <span>Today</span>
                                    </div>
                                    <span>12</span>
                                </Link>
                            </li>
                            <li>
                                <Link to={`/${toTaskUpcomingURL}`}>
                                    <div>
                                        <i className="bi bi-clock-history"/>
                                        <span>Upcoming</span>
                                    </div>
                                    <span>1</span>
                                </Link>
                            </li>
                            {/*<li>*/}
                            {/*    <div>*/}
                            {/*        <i className="bi bi-calendar-week"/>*/}
                            {/*        <span>Calendar</span>*/}
                            {/*    </div>*/}
                            {/*    <span>1</span>*/}
                            {/*</li>*/}
                            {/*<li>*/}
                            {/*    <div>*/}
                            {/*        <i className="bi bi-sticky-fill"/>*/}
                            {/*        <span>Sticky Wall</span>*/}
                            {/*    </div>*/}
                            {/*    <span>1</span>*/}
                            {/*</li>*/}
                        </ul>
                    </div>
                </div>

                <div>
                    <div>
                        <i className="bi bi-sliders"/>
                        <span>Settings</span>
                    </div>
                    <div onClick={handleSignOut}>
                        <i className="bi bi-box-arrow-right"/>
                        <span>Sign out</span>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header
