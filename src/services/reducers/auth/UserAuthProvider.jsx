import {createContext, useContext, useEffect, useState} from "react";
import jwt_decode from "jwt-decode";
import {useNavigate} from "react-router-dom";

import {apiErrorMessage, loginUserFromAPI, revokeRefreshTokenFromAPI} from "../../actions/authAPI.js";
import {AUTH_CHANGE_EVENT, getTokens, setTokens} from "../../utils/route.js";
import {useUserData} from "./UserDataProvider.jsx";
import {loginURL, toTaskListURL} from "../../constants/routes/urls.js";


const UserAuthContext = createContext()

export const useUserAuth = () => {
    return useContext(UserAuthContext)
}

const UserAuthProvider = ({children}) => {
    const navigate = useNavigate()
    const {setUser} = useUserData()
    const [authTokens, setAuthTokens] = useState(getTokens)
    const [loginError, setLoginError] = useState("")
    const [loginPending, setLoginPending] = useState(false)

    // Keep React state in step with token refreshes and forced sign-outs done by the API client.
    useEffect(() => {
        const sync = () => {
            const tokens = getTokens()
            setAuthTokens(tokens)
            setUser(tokens ? jwt_decode(tokens.access) : null)
            if (!tokens) {
                navigate(`/${loginURL}`)
            }
        }
        window.addEventListener(AUTH_CHANGE_EVENT, sync)
        return () => window.removeEventListener(AUTH_CHANGE_EVENT, sync)
    }, [navigate, setUser])

    const userLogin = (userData) => {
        if (authTokens || loginPending) {
            return
        }
        setLoginError("")
        setLoginPending(true)
        loginUserFromAPI(userData)
            .then((tokens) => {
                setTokens(tokens)
                navigate(`/${toTaskListURL}`)
            })
            .catch((error) => {
                setLoginError(error.response?.status === 401
                    ? "Incorrect credentials. Try again."
                    : apiErrorMessage(error, "Sign in failed. Try again."))
            })
            .finally(() => setLoginPending(false))
    }

    const userSignOut = () => {
        const refresh = getTokens()?.refresh
        if (refresh) {
            // Best effort: sign-out must work locally even if the server can't be reached.
            revokeRefreshTokenFromAPI(refresh).catch(() => {})
        }
        setTokens(null)
    }

    return (
        <UserAuthContext.Provider value={{
            authTokens,
            userLogin,
            userSignOut,
            loginError,
            loginPending,
        }}>
            {children}
        </UserAuthContext.Provider>
    )
}

export default UserAuthProvider
