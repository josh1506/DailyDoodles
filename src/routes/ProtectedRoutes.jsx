import {Route, Routes} from "react-router-dom";

import {taskListURL, taskTodayURL, taskUpcomingURL, taskURL} from "../services/constants/routes/urls.js";
import Layouts from "../layouts/index.jsx";
import List from "../pages/Tasks/List/index.jsx";
import Tasks from "../pages/Tasks/index.jsx";
import TaskProvider from "../services/reducers/TaskProvider.jsx";
import Today from "../pages/Tasks/Today/index.jsx";
import Upcoming from "../pages/Tasks/Upcoming/index.jsx";


const ProtectedRoutes = () => {
    return (
        <TaskProvider>
            <Routes>
                <Route path={"*"} element={<Layouts/>}>
                    <Route path={taskURL} element={<Tasks/>}>
                        <Route path={taskListURL} element={<List/>}/>
                        <Route path={taskTodayURL} element={<Today/>}/>
                        <Route path={taskUpcomingURL} element={<Upcoming/>}/>
                    </Route>
                </Route>
            </Routes>
        </TaskProvider>
    )
}

export default ProtectedRoutes
