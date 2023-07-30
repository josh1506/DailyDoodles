import {apiDefaultURL} from "./apiURL.js";


const loginURL = "token"
const refreshTokenURL = "refresh"

export const apiLoginURL = apiDefaultURL + "/" + loginURL + "/"
export const apiRefreshTokenURL = apiDefaultURL + "/" + loginURL + "/" + refreshTokenURL + "/"
