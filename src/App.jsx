import {BrowserRouter} from "react-router-dom";

import AppRouter from "./routes/index.jsx";

import 'bootstrap-icons/font/bootstrap-icons.css';
import AuthProvider from "./services/reducers/AuthProvider.jsx";


function App() {
    return (
        <>
            <BrowserRouter>
                <AuthProvider>
                    <AppRouter/>
                </AuthProvider>
            </BrowserRouter>
        </>
    )
}

export default App
