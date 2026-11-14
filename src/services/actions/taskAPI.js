import apiRoute from "../utils/route.js"
import {apiTaskURL} from "../constants/routes/apiURL.js";

// Auth header and token refresh are handled by the apiRoute interceptors.

export const fetchTasksFromAPI = async () => {
    const {data} = await apiRoute.get(apiTaskURL)
    return data
}

export const updateTaskFromAPI = async (taskData) => {
    const {data} = await apiRoute.put(apiTaskURL + taskData.id, taskData)
    return data
}

export const deleteTaskFromAPI = async (taskData) => {
    const {data} = await apiRoute.delete(apiTaskURL + taskData.id)
    return data
}

export const createTaskFromAPI = async (taskData) => {
    const {data} = await apiRoute.post(apiTaskURL, taskData)
    return data
}
