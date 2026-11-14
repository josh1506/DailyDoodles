import {createContext, useContext, useState} from "react";
import {useNavigate} from "react-router-dom";

import {apiErrorMessage, userRegistrationFromAPI} from "../../actions/authAPI.js";
import {loginURL} from "../../constants/routes/urls.js";


const UserRegisterContext = createContext()

export const useUserRegister = () => {
    return useContext(UserRegisterContext)
}

const emptyForm = {email: "", password: "", password2: ""}

const UserRegisterProvider = ({children}) => {
    const navigate = useNavigate()
    const [userForm, setUserForm] = useState(emptyForm)
    const [registerError, setRegisterError] = useState("")
    const [registerPending, setRegisterPending] = useState(false)

    const userRegistrater = (e) => {
        e.preventDefault()
        if (registerPending) {
            return
        }
        setRegisterError("")
        setRegisterPending(true)
        userRegistrationFromAPI(userForm)
            .then(() => {
                setUserForm(emptyForm)
                navigate(`/${loginURL}`, {state: {notice: "Account created. You can sign in now."}})
            })
            .catch((error) => setRegisterError(apiErrorMessage(error, "Sign up failed. Try again.")))
            .finally(() => setRegisterPending(false))
    }

    return (
        <UserRegisterContext.Provider value={{
            setUserForm,
            userForm,
            userRegistrater,
            registerError,
            registerPending,
        }}>
            {children}
        </UserRegisterContext.Provider>
    )
}

export default UserRegisterProvider
