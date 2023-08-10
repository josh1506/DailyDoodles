import {useState} from "react";
import {Link} from "react-router-dom";

import {
    toTaskListURL,
    toTaskTodayURL,
    toTaskUpcomingURL
} from "../../services/constants/routes/urls.js";
import {useListTask} from "../../services/reducers/task/TaskListProvider.jsx";
import {useSignOutContext} from "../../services/reducers/AuthProvider.jsx";

import "../../assets/styles/header/navbar.scss"


const Header = () => {
    const handleSignOut = useSignOutContext()
    const {
        totalTask,
        totalTaskCurrentDueDate,
        totalTaskUpcomingDueDate,
    } = useListTask()

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
                                <Link to={`/${toTaskListURL}`}>
                                    <div>
                                        <i className="bi bi-card-list"></i>
                                        <span>List</span>
                                    </div>
                                    <span>{totalTask}</span>
                                </Link>
                            </li>
                            <li>
                                <Link to={`/${toTaskTodayURL}`}>
                                    <div>
                                        <i className="bi bi-list-task"/>
                                        <span>Today</span>
                                    </div>
                                    <span>{totalTaskCurrentDueDate}</span>
                                </Link>
                            </li>
                            <li>
                                <Link to={`/${toTaskUpcomingURL}`}>
                                    <div>
                                        <i className="bi bi-clock-history"/>
                                        <span>Upcoming</span>
                                    </div>
                                    <span>{totalTaskUpcomingDueDate}</span>
                                </Link>
                            </li>
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
