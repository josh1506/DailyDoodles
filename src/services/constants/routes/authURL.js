import {apiDefaultURL} from "./apiURL.js";


const loginURL = "token"
const refreshTokenURL = "refresh"
const blacklistTokenURL = "blacklist"
const registerURL = "register"

export const apiLoginURL = apiDefaultURL + "/" + loginURL
export const apiRefreshTokenURL = apiDefaultURL + "/" + loginURL + "/" + refreshTokenURL
export const apiBlacklistTokenURL = apiDefaultURL + "/" + loginURL + "/" + blacklistTokenURL
export const apiRegistraterURL = apiDefaultURL + "/" + registerURL
