import {createContext, useContext, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

import jwt_decode from "jwt-decode"

import {loginUserFromAPI, refreshTokenFromAPI, userRegistrationFromAPI} from "../actions/authAPI.js";
import {loginURL, toTaskListURL} from "../constants/routes/urls.js";


const SelectAuthTokenContext = createContext()
const SelectLoginContext = createContext()
const SelectSignOutContext = createContext()
const SelectUserFormContext = createContext()
const SelectUserFormUpdateContext = createContext()
const SelectUserRegisterContext = createContext()

export const useAuthTokenContext = () => {
    return useContext(SelectAuthTokenContext)
}

export const useLoginContext = () => {
    return useContext(SelectLoginContext)
}

export const useSignOutContext = () => {
    return useContext(SelectSignOutContext)
}

export const useUserFormContext = () => {
    return useContext(SelectUserFormContext)
}

export const useUserFormUpdateContext = () => {
    return useContext(SelectUserFormUpdateContext)
}

export const useUserRegisterContext = () => {
    return useContext(SelectUserRegisterContext)
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

    const [userForm, setUserForm] = useState({email: "", password: "", password2: ""})

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

    const userSignOut = () => {
        setAuthTokens(null)
        setUser(null)
        localStorage.removeItem("tokens")
        navigate(`/${loginURL}`)
    }

    const userRegistrater = (e) => {
        e.preventDefault()
        console.log(userForm)
        userRegistrationFromAPI(userForm)
            .then(() => {
                alert("User created successfully.")
                setUserForm({email: "", password: "", password2: ""})
                navigate(`/${loginURL}`)
            })
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
                <SelectSignOutContext.Provider value={userSignOut}>
                    <SelectUserFormContext.Provider value={userForm}>
                        <SelectUserFormUpdateContext.Provider value={setUserForm}>
                            <SelectUserRegisterContext.Provider value={userRegistrater}>
                                {loading ? null : children}
                            </SelectUserRegisterContext.Provider>
                        </SelectUserFormUpdateContext.Provider>
                    </SelectUserFormContext.Provider>
                </SelectSignOutContext.Provider>
            </SelectAuthTokenContext.Provider>
        </SelectLoginContext.Provider>
    )
}

export default AuthProvider
