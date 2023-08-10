import apiRoute from "../utils/route.js"
import {apiTaskURL} from "../constants/routes/apiURL.js";


export const fetchTasksFromAPI = async () => {
    try {
        const authToken = localStorage.getItem("tokens")
        const {data} = await apiRoute.get(
            apiTaskURL,
            {
                headers: {
                    "Authorization": `Bearer ${JSON.parse(authToken).access}`
                }
            }
        )
        return data
    } catch (error) {
        console.error("Error fetching tasks:", error)
        throw new Error("Failed to fetch tasks from the API.")
    }
}

export const updateTaskFromAPI = async (taskData) => {
    try {
        const authToken = localStorage.getItem("tokens")
        const {data} = await apiRoute.put(
            apiTaskURL + taskData.id,
            taskData,
            {
                headers: {
                    "Authorization": `Bearer ${JSON.parse(authToken).access}`
                }
            }
        )
        return data
    } catch (error) {
        console.error("Error fetching tasks:", error)
        throw new Error("Failed to fetch tasks from the API.")
    }
}

export const deleteTaskFromAPI = async (taskData) => {
    try {
        const authToken = localStorage.getItem("tokens")
        const {data} = await apiRoute.delete(
            apiTaskURL + taskData.id,
            {
                headers: {
                    "Authorization": `Bearer ${JSON.parse(authToken).access}`
                }
            }
        )
        return data
    } catch (error) {
        console.error("Error fetching tasks:", error)
        throw new Error("Failed to fetch tasks from the API.")
    }
}
