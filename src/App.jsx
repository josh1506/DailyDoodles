import {BrowserRouter} from "react-router-dom";

import AppRouter from "./routes/index.jsx";
import UserProvider from "./services/reducers/auth/UserProvider.jsx";

import 'bootstrap-icons/font/bootstrap-icons.css';


function App() {
    return (
        <>
            <BrowserRouter>
                <UserProvider>
                    <AppRouter/>
                </UserProvider>
            </BrowserRouter>
        </>
    )
}

export default App
