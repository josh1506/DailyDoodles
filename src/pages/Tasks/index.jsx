import {Route, Routes} from "react-router-dom";

import List from "./List/index.jsx";
import Today from "./Today/index.jsx";
import Upcoming from "./Upcoming/index.jsx";
import {
    taskListURL,
    taskTodayURL,
    taskUpcomingURL,
    taskURL
} from "../../services/constants/routes/urls.js";

import "../../assets/styles/task/task.scss"


const Tasks = () => {
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
