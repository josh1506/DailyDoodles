import apiRoute from "../utils/route.js"
import {apiTaskURL} from "../constants/routes/urls.js";


export const fetchTasksFromAPI = async () => {
    try {
        const {data} = await apiRoute.get(apiTaskURL)
        return data
    } catch (error) {
        console.error("Error fetching tasks:", error)
        throw new Error("Failed to fetch tasks from the API.")
    }
}
