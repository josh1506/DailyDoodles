import {createContext, useContext, useState} from "react";
import {userRegistrationFromAPI} from "../../actions/authAPI.js";
import {loginURL} from "../../constants/routes/urls.js";
import {useNavigate} from "react-router-dom";


const UserRegisterContext = createContext()

export const useUserRegister = () => {
    return useContext(UserRegisterContext)
}

const UserRegisterProvider = ({children}) => {
    const navigate = useNavigate()
    const [userForm, setUserForm] = useState({email: "", password: "", password2: ""})

    const userRegistrater = (e) => {
        e.preventDefault()
        userRegistrationFromAPI(userForm)
            .then(() => {
                alert("User created successfully.")
                setUserForm({email: "", password: "", password2: ""})
                navigate(`/${loginURL}`)
            })
    }

    return (
        <UserRegisterContext.Provider value={{
            setUserForm,
            userForm,
            userRegistrater,
        }}>
            {children}
        </UserRegisterContext.Provider>
    )
}

export default UserRegisterProvider
