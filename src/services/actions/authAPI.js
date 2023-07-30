import apiRoute from "../utils/route.js"
import {apiLoginURL, apiRefreshTokenURL} from "../constants/routes/authURL.js";


export const loginUserFromAPI = async (userData) => {
    try {
        const {data} = await apiRoute.post(apiLoginURL, userData)
        return data
    } catch (error) {
        console.error("Error logging user:", error)
        throw new Error("Failed to login user from the API.")
    }
}

export const refreshTokenFromAPI = async (refreshToken) => {
    try {
        const {data} = await apiRoute.post(apiRefreshTokenURL, {"refresh": refreshToken})
        return data
    } catch (error) {
        console.error("Error logging user:", error)
        throw new Error("Failed to login user from the API.")
    }
}
