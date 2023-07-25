import {createContext, useContext, useEffect, useMemo, useState} from "react"

import {fetchTasksFromAPI} from "../actions/taskAPI.js";


const SelectTaskContext = createContext()
const SelectTotalTaskContext = createContext()

export const useTask = () => {
    return useContext(SelectTaskContext)
}

export const useTotalTask = () => {
    return useContext(SelectTotalTaskContext)
}

const TaskProvider = ({children}) => {
    const [task, setTask] = useState([])
    const totalTask = useMemo(() => task.length, [task])

    useEffect(() => {
        fetchTasksFromAPI()
            .then(data => setTask(data))
    }, [])

    return (
        <SelectTaskContext.Provider value={task}>
            <SelectTotalTaskContext.Provider value={totalTask}>
                {children}
            </SelectTotalTaskContext.Provider>
        </SelectTaskContext.Provider>
    )
}

export default TaskProvider
