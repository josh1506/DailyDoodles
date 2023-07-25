import route from "../utils/route.js";

export const fetchTask = async () => {
    const {data} = await route.get("api/tasks")
    return data
}
