import UserAuthProvider from "./UserAuthProvider.jsx";
import UserDataProvider from "./UserDataProvider.jsx";
import UserRegisterProvider from "./UserRegisterProvider.jsx";


const UserProvider = ({children}) => {
    return (
        <UserDataProvider>
            <UserAuthProvider>
                <UserRegisterProvider>
                    {children}
                </UserRegisterProvider>
            </UserAuthProvider>
        </UserDataProvider>
    )
}

export default UserProvider
