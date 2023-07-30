import {createContext, useContext, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

import jwt_decode from "jwt-decode"

import {loginUserFromAPI} from "../actions/authAPI.js";
import {toTaskListURL} from "../constants/routes/urls.js";


const SelectLoginContext = createContext()

export const useLoginContext = () => {
    return useContext(SelectLoginContext)
}

const AuthProvider = ({children}) => {
    const [authTokens, setAuthTokens] = useState(null)
    const [user, setUser] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        const tokens = localStorage.getItem("tokens")
        if (tokens) {
            const token = JSON.parse(tokens)
            setAuthTokens(token)
            setUser(jwt_decode(token.access))
        }
    }, [])

    const userLogin = (userData) => {
        loginUserFromAPI(userData)
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

    return (
        <SelectLoginContext.Provider value={userLogin}>
            {children}
        </SelectLoginContext.Provider>
    )
}

export default AuthProvider
