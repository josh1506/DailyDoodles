import axios from "axios";

import {apiLoginURL, apiRefreshTokenURL} from "../constants/routes/authURL.js";

// Tokens stay in localStorage under "tokens" (existing format, so signed-in users stay signed in).
// ponytail: localStorage is readable by any XSS; moving to httpOnly cookies is an auth-architecture change (S4).
const TOKENS_KEY = "tokens"
export const AUTH_CHANGE_EVENT = "dailydoodles:auth-change"

export const getTokens = () => {
    try {
        return JSON.parse(localStorage.getItem(TOKENS_KEY))
    } catch {
        return null
    }
}

export const setTokens = (tokens) => {
    if (tokens) {
        localStorage.setItem(TOKENS_KEY, JSON.stringify(tokens))
    } else {
        localStorage.removeItem(TOKENS_KEY)
    }
    window.dispatchEvent(new Event(AUTH_CHANGE_EVENT))
}

const apiRoute = axios.create({
    baseURL: import.meta.env.VITE_REACT_APP_BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
})

apiRoute.interceptors.request.use((config) => {
    const access = getTokens()?.access
    if (access && !config.headers.Authorization) {
        config.headers.Authorization = `Bearer ${access}`
    }
    return config
})

// One refresh for any number of requests failing together: refresh tokens rotate and the old
// one is blacklisted, so a second parallel refresh would fail and sign the user out.
let refreshing = null

const refreshTokens = (refresh) => {
    refreshing ??= axios
        .post(apiRefreshTokenURL, {refresh}, {baseURL: apiRoute.defaults.baseURL})
        .then(({data}) => {
            setTokens({refresh, ...data})
            return data.access
        })
        .finally(() => {
            refreshing = null
        })
    return refreshing
}

// The API answers an expired/invalid access token with 403 (SessionAuthentication is listed first),
// so match on simplejwt's error code rather than the status alone.
const isExpiredToken = (error) =>
    error.response?.status === 401 || error.response?.data?.code === "token_not_valid"

apiRoute.interceptors.response.use(undefined, async (error) => {
    const original = error.config
    const refresh = getTokens()?.refresh
    if (!original || original._retried || !refresh || !isExpiredToken(error) || original.url.startsWith(apiLoginURL)) {
        throw error
    }
    original._retried = true
    try {
        const access = await refreshTokens(refresh)
        original.headers.Authorization = `Bearer ${access}`
        return apiRoute(original)
    } catch (refreshError) {
        if (refreshError.response) {
            setTokens(null)  // refresh token expired or revoked: sign out
        }
        throw error
    }
})

export default apiRoute
