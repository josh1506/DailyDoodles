import {Routes, Route} from "react-router-dom"

import Authentication from "../pages/Authentication/index.jsx";
import Landing from "../pages/Landing/index.jsx";
import ProtectedRoutes from "./ProtectedRoutes.jsx";
import {
    landingURL,
    loginURL,
    userHomeURL
} from "../services/constants/routes/urls.js";


const AppRouter = () => {
    return (
        <Routes>
            <Route path={landingURL} element={<Landing/>}/>
            {/* Authentication renders its own nested <Routes> for sign in / sign up. */}
            <Route path={`/${loginURL}/*`} element={<Authentication/>}/>
            <Route path={`/${userHomeURL}/*`} element={<ProtectedRoutes/>}/>
        </Routes>
    )
}

export default AppRouter
