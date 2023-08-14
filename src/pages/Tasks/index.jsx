import {useEffect} from "react";
import {Route, Routes, useNavigate} from "react-router-dom";

import List from "./List/index.jsx";
import Today from "./Today/index.jsx";
import Upcoming from "./Upcoming/index.jsx";
import {
    loginURL,
    taskListURL,
    taskTodayURL,
    taskUpcomingURL,
    taskURL
} from "../../services/constants/routes/urls.js";

import "../../assets/styles/task/task-page/task-page.scss"
import {useUserAuth} from "../../services/reducers/auth/UserAuthProvider.jsx";


const Tasks = () => {
    const {authTokens} = useUserAuth()
    const navigate = useNavigate()

    useEffect(() => {
        if (!authTokens) {
            navigate(`/${loginURL}`)
        }
    }, []);

    return (
        <div className={"task-page"}>
            <Routes>
                <Route path={taskURL}>
                    <Route path={taskListURL} element={<List/>}/>
                    <Route path={taskTodayURL} element={<Today/>}/>
                    <Route path={taskUpcomingURL} element={<Upcoming/>}/>
                </Route>
            </Routes>
        </div>
    )
}

export default Tasks
