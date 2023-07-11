export const landingURL = ""
export const userHomeURL = "home"

// Auth pages urls
export const loginURL = "login"
export const signUpURL = "signup"
export const toSignUpURL = `${loginURL}/${signUpURL}`

// Task pages urls
export const taskURL = "tasks"
export const taskListURL = "list"
export const taskTodayURL = "today"
export const taskUpcomingURL = "upcoming"

export const toTaskURL = `${userHomeURL}/${taskURL}`
export const toTaskListURL = `${userHomeURL}/${taskURL}/${taskListURL}`
export const toTaskTodayURL = `${userHomeURL}/${taskURL}/${taskTodayURL}`
export const toTaskUpcomingURL = `${userHomeURL}/${taskURL}/${taskUpcomingURL}`
