import {createContext, useContext, useState} from "react";
import jwt_decode from "jwt-decode";

import {getTokens} from "../../utils/route.js";


const UserDataContext = createContext()

export const useUserData = () => {
    return useContext(UserDataContext)
}

const UserDataProvider = ({children}) => {
    const [user, setUser] = useState(() => {
        const tokens = getTokens()
        return tokens ? jwt_decode(tokens.access) : null
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
