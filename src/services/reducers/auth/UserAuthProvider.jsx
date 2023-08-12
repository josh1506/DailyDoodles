import {createContext, useContext, useState} from "react";
import jwt_decode from "jwt-decode";

import {loginUserFromAPI, refreshTokenFromAPI} from "../../actions/authAPI.js";
import {useNavigate} from "react-router-dom";
import {useUserData} from "./UserDataProvider.jsx";
import {loginURL, toTaskListURL} from "../../constants/routes/urls.js";


const UserAuthContext = createContext()

export const useUserAuth = () => {
    return useContext(UserAuthContext)
}

const UserAuthProvider = ({children}) => {
    const navigate = useNavigate()
    const {setUser} = useUserData()
    const [loading, setLoading] = useState(true)
    const [authTokens, setAuthTokens] = useState(() => {
        const tokens = localStorage.getItem("tokens")
        return tokens ? JSON.parse(tokens) : null
    })

    const userLogin = (userData) => {
        if (!authTokens) {
            loginUserFromAPI(userData)
                .then((tokens) => {
                    setAuthTokens(tokens)
                    setUser(jwt_decode(tokens.access))
                    localStorage.setItem("tokens", JSON.stringify(tokens))
                    navigate(`/${toTaskListURL}`)
                })
                .catch((error) => {
                    console.log("Error", error)
                    alert("Incorrect credentials. Try again.")
                })
        }
    }

    const updateToken = () => {
        if (authTokens) {
            refreshTokenFromAPI(authTokens.refresh)
                .then((tokens) => {
                    setAuthTokens(tokens)
                    setUser(jwt_decode(tokens.access))
                    localStorage.setItem("tokens", JSON.stringify(tokens))
                    navigate(`/${toTaskListURL}`)
                })
                .catch((error) => {
                    console.log("Error", error)
                })
        }
        if (loading) {
            setLoading(false)
        }
    }

    const userSignOut = () => {
        setAuthTokens(null)
        setUser(null)
        localStorage.removeItem("tokens")
        navigate(`/${loginURL}`)
    }

    return (
        <UserAuthContext.Provider value={{
            authTokens,
            userLogin,
            updateToken,
            userSignOut,
        }}>
            {children}
        </UserAuthContext.Provider>
    )
}

export default UserAuthProvider
