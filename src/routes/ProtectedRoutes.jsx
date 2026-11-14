import {Route, Routes} from "react-router-dom";

import Layouts from "../layouts/index.jsx";
import TaskProvider from "../services/reducers/task/TaskProvider.jsx";


const ProtectedRoutes = () => {
    return (
        <TaskProvider>
            <Routes>
                {/* Tasks (rendered by Layouts > Main) declares the list/today/upcoming routes. */}
                <Route path={"*"} element={<Layouts/>}/>
            </Routes>
        </TaskProvider>
    )
}

export default ProtectedRoutes
