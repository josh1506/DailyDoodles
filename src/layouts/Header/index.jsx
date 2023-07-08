import "../../assets/styles/header/navbar.scss"
import {useState} from "react";


const Header = () => {
    const [showNav, setShowNav] = useState(false)
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
                                <div>
                                    <i className="bi bi-card-list"></i>
                                    <span>List</span>
                                </div>
                                <span>1</span>
                            </li>
                            <li>
                                <div>
                                    <i className="bi bi-list-task"/>
                                    <span>Today</span>
                                </div>
                                <span>12</span>
                            </li>
                            <li>
                                <div>
                                    <i className="bi bi-clock-history"/>
                                    <span>Upcoming</span>
                                </div>
                                <span>1</span>
                            </li>
                            <li>
                                <div>
                                    <i className="bi bi-calendar-week"/>
                                    <span>Calendar</span>
                                </div>
                                <span>1</span>
                            </li>
                            <li>
                                <div>
                                    <i className="bi bi-sticky-fill"/>
                                    <span>Sticky Wall</span>
                                </div>
                                <span>1</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div>
                    <div>
                        <i className="bi bi-sliders"/>
                        <span>Settings</span>
                    </div>
                    <div>
                        <i className="bi bi-box-arrow-right"/>
                        <span>Sign out</span>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header
