import {createContext, useContext, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

import jwt_decode from "jwt-decode"

import {loginUserFromAPI, refreshTokenFromAPI} from "../actions/authAPI.js";
import {toTaskListURL} from "../constants/routes/urls.js";


const SelectAuthTokenContext = createContext()
const SelectLoginContext = createContext()

export const useLoginContext = () => {
    return useContext(SelectLoginContext)
}

export const useAuthTokenContext = () => {
    return useContext(SelectAuthTokenContext)
}

const AuthProvider = ({children}) => {
    const [loading, setLoading] = useState(true)
    const [authTokens, setAuthTokens] = useState(() => {
        const tokens = localStorage.getItem("tokens")
        return tokens ? JSON.parse(tokens) : null
    })

    const [user, setUser] = useState(() => {
        const tokens = localStorage.getItem("tokens")
        return tokens ? jwt_decode(JSON.parse(tokens).access) : null
    })

    const navigate = useNavigate()

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

    useEffect(() => {
        if (loading) {
            updateToken()
        }
        let callBackTime = 1000 * 60 * 29
        let intervalID = setInterval(() => {
            if (authTokens) {
                updateToken()
            }
        }, callBackTime)
        return () => clearInterval(intervalID)
    }, [authTokens, loading])

    return (
        <SelectLoginContext.Provider value={userLogin}>
            <SelectAuthTokenContext.Provider value={authTokens}>
                {loading ? null : children}
            </SelectAuthTokenContext.Provider>
        </SelectLoginContext.Provider>
    )
}

export default AuthProvider
