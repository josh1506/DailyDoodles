import {createContext, useContext, useState} from "react";
import jwt_decode from "jwt-decode";


const UserDataContext = createContext()

export const useUserData = () => {
    return useContext(UserDataContext)
}

const UserDataProvider = ({children}) => {
    const [user, setUser] = useState(() => {
        const tokens = localStorage.getItem("tokens")
        return tokens ? jwt_decode(JSON.parse(tokens).access) : null
    })

    return (
        <UserDataContext.Provider value={{
            user,
            setUser,
        }}>
            {children}
        </UserDataContext.Provider>
    )
}

export default UserDataProvider
