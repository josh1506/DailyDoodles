import {createContext, useContext, useEffect, useMemo, useState} from "react";

import {fetchTasksFromAPI} from "../../actions/taskAPI.js";
import {isDueToday, isUpcoming} from "../../utils/dueDate.js";
import {useUserAuth} from "../auth/UserAuthProvider.jsx";


const ListTaskContext = createContext()

export const useListTask = () => {
    return useContext(ListTaskContext)
}

const ListTaskProvider = ({children}) => {
    const {authTokens} = useUserAuth()
    const signedIn = !!authTokens
    const [task, setTask] = useState([])
    const [loadState, setLoadState] = useState("loading")  // "loading" | "ready" | "error"

    // Today/Upcoming are derived, so they can never drift out of sync with the task list.
    const taskCurrentDueDate = useMemo(() => task.filter(t => isDueToday(t.due_date)), [task])
    const taskUpcomingDueDate = useMemo(() => task.filter(t => isUpcoming(t.due_date)), [task])

    useEffect(() => {
        if (!signedIn) {
            return
        }
        let cancelled = false
        setLoadState("loading")
        fetchTasksFromAPI()
            .then(data => {
                if (!cancelled) {
                    setTask(data)
                    setLoadState("ready")
                }
            })
            .catch(() => !cancelled && setLoadState("error"))
        return () => {
            cancelled = true
        }
    }, [signedIn])

    return (
        <ListTaskContext.Provider value={{
            task,
            setTask,
            loadState,
            taskCurrentDueDate,
            taskUpcomingDueDate,
            totalTask: task.length,
            totalTaskCurrentDueDate: taskCurrentDueDate.length,
            totalTaskUpcomingDueDate: taskUpcomingDueDate.length,
        }}>
            {children}
        </ListTaskContext.Provider>
    )
}

export default ListTaskProvider
