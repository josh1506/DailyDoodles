import {apiDefaultURL} from "./apiURL.js";


const loginURL = "token"
const refreshTokenURL = "refresh"
const registerURL = "register"

export const apiLoginURL = apiDefaultURL + "/" + loginURL
export const apiRefreshTokenURL = apiDefaultURL + "/" + loginURL + "/" + refreshTokenURL
export const apiRegistraterURL = apiDefaultURL + "/" + registerURL
