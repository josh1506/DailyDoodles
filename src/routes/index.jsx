import {Routes, Route} from "react-router-dom"

import Authentication from "../pages/Authentication/index.jsx";
import Landing from "../pages/Landing/index.jsx";
import ProtectedRoutes from "./ProtectedRoutes.jsx";
import SignIn from "../pages/Authentication/SignIn/index.jsx";
import SignUp from "../pages/Authentication/SignUp/index.jsx";
import {
    landingURL,
    loginURL,
    signUpURL,
    userHomeURL
} from "../services/constants/routes/urls.js";


const AppRouter = () => {
    return (
        <Routes>
            <Route path={landingURL} element={<Landing/>}/>
            <Route path={`/${loginURL}/*`} element={<Authentication/>}>
                <Route path={""} element={<SignIn/>}/>
                <Route path={signUpURL} element={<SignUp/>}/>
            </Route>
            <Route path={`/${userHomeURL}/*`} element={<ProtectedRoutes/>}/>
        </Routes>
    )
}

export default AppRouter
