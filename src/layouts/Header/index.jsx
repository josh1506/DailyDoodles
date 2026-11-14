import {useState} from "react";
import {Link} from "react-router-dom";

import {
    toTaskListURL,
    toTaskTodayURL,
    toTaskUpcomingURL
} from "../../services/constants/routes/urls.js";
import {clickable} from "../../services/utils/a11y.js";
import {useListTask} from "../../services/reducers/task/TaskListProvider.jsx";

import "../../assets/styles/header/navbar.scss"
import {useUserAuth} from "../../services/reducers/auth/UserAuthProvider.jsx";


const Header = () => {
    const {userSignOut} = useUserAuth()

    const {
        loadState,
        totalTask,
        totalTaskCurrentDueDate,
        totalTaskUpcomingDueDate,
    } = useListTask()

    // Labels are hidden on small screens (icons only), so links carry their own accessible name.
    const loaded = loadState === "ready"
    const count = (n) => loaded ? n : "–"
    const navLabel = (name, n) => loaded ? `${name}, ${n} ${n === 1 ? "task" : "tasks"}` : name

    const [showNav, setShowNav] = useState(false)

    return (
        <header className={"nav-header"}>
            <nav aria-label={"Main"}>
                <div>
                    <div className={"nav-title"}>
                        <span>Menu</span>
                        <div
                            aria-label={"Toggle menu"}
                            aria-expanded={showNav}
                            {...clickable(() => setShowNav(!showNav))}
                        >
                            <div className={`${showNav ? "active burger-top" : "burger-top"}`}></div>
                            <div className={`${showNav ? "active burger-middle" : "burger-middle"}`}></div>
                            <div className={`${showNav ? "active burger-bottom" : "burger-bottom"}`}></div>
                        </div>
                    </div>

                    <div className={"nav-tasks"}>
                        <span>TASKS</span>
                        <ul>
                            <li>
                                <Link to={`/${toTaskListURL}`} aria-label={navLabel("List", totalTask)}>
                                    <div>
                                        <i className="bi bi-card-list" aria-hidden="true"></i>
                                        <span>List</span>
                                    </div>
                                    <span aria-hidden="true">{count(totalTask)}</span>
                                </Link>
                            </li>
                            <li>
                                <Link to={`/${toTaskTodayURL}`} aria-label={navLabel("Today", totalTaskCurrentDueDate)}>
                                    <div>
                                        <i className="bi bi-list-task" aria-hidden="true"/>
                                        <span>Today</span>
                                    </div>
                                    <span aria-hidden="true">{count(totalTaskCurrentDueDate)}</span>
                                </Link>
                            </li>
                            <li>
                                <Link to={`/${toTaskUpcomingURL}`} aria-label={navLabel("Upcoming", totalTaskUpcomingDueDate)}>
                                    <div>
                                        <i className="bi bi-clock-history" aria-hidden="true"/>
                                        <span>Upcoming</span>
                                    </div>
                                    <span aria-hidden="true">{count(totalTaskUpcomingDueDate)}</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div>
                    <div>
                        <i className="bi bi-sliders" aria-hidden="true"/>
                        <span>Settings</span>
                    </div>
                    <div aria-label={"Sign out"} {...clickable(userSignOut)}>
                        <i className="bi bi-box-arrow-right" aria-hidden="true"/>
                        <span>Sign out</span>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header
