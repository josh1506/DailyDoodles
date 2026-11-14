import apiRoute from "../utils/route.js"
import {apiBlacklistTokenURL, apiLoginURL, apiRegistraterURL} from "../constants/routes/authURL.js";


export const loginUserFromAPI = async (userData) => {
    const {data} = await apiRoute.post(apiLoginURL, userData)
    return data
}

export const userRegistrationFromAPI = async (userData) => {
    const {data} = await apiRoute.post(apiRegistraterURL, userData)
    return data
}

export const revokeRefreshTokenFromAPI = (refreshToken) =>
    apiRoute.post(apiBlacklistTokenURL, {"refresh": refreshToken})

// Turn a DRF error response into one readable sentence for the user.
export const apiErrorMessage = (error, fallback) => {
    if (error.response?.status === 429) {
        return "Too many attempts. Please wait a minute and try again."
    }
    const data = error.response?.data
    if (data && typeof data === "object") {
        const messages = Object.values(data).flat().filter(m => typeof m === "string")
        if (messages.length) {
            return messages.join(" ")
        }
    }
    return error.response ? fallback : "Can't reach the server. Check your connection and try again."
}
