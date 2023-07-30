import {createContext, useContext, useEffect, useMemo, useState} from "react"

import {fetchTasksFromAPI} from "../actions/taskAPI.js"


const SelectTaskContext = createContext()
const SelectCurrentTaskContext = createContext()
const SelectUpcomingTaskContext = createContext()

const SelectTotalTaskContext = createContext()
const SelectTotalCurrentTaskContext = createContext()
const SelectTotalUpcomingTaskContext = createContext()

export const useTask = () => {
    return useContext(SelectTaskContext)
}

export const useCurrentTask = () => {
    return useContext(SelectCurrentTaskContext)
}

export const useUpcomingTask = () => {
    return useContext(SelectUpcomingTaskContext)
}

export const useTotalTask = () => {
    return useContext(SelectTotalTaskContext)
}

export const useTotalCurrentTask = () => {
    return useContext(SelectTotalCurrentTaskContext)
}

export const useTotalUpcomingTask = () => {
    return useContext(SelectTotalUpcomingTaskContext)
}

const TaskProvider = ({children}) => {
    const [task, setTask] = useState([])
    const [taskCurrentDueDate, setTaskCurrentCurrentDueDate] = useState([])
    const [taskUpcomingDueDate, setTaskUpcomingDueDate] = useState([])

    const totalTask = useMemo(() => task.length, [task])
    const totalTaskCurrentDueDate = useMemo(() => taskCurrentDueDate.length, [taskCurrentDueDate])
    const totalTaskUpcomingDueDate = useMemo(() => taskUpcomingDueDate.length, [taskUpcomingDueDate])

    useEffect(() => {
        const currentDate = new Date()
        fetchTasksFromAPI()
            .then(data => {
                setTask(data)
                setTaskCurrentCurrentDueDate(data.filter(task => new Date(task.due_date) <= currentDate))
                setTaskUpcomingDueDate(data.filter(task => new Date(task.due_date) > currentDate))
            })
    }, [])

    return (
        <SelectTaskContext.Provider value={task}>
            <SelectCurrentTaskContext.Provider value={taskCurrentDueDate}>
                <SelectUpcomingTaskContext.Provider value={taskUpcomingDueDate}>
                    <SelectTotalTaskContext.Provider value={totalTask}>
                        <SelectTotalCurrentTaskContext.Provider value={totalTaskCurrentDueDate}>
                            <SelectTotalUpcomingTaskContext.Provider value={totalTaskUpcomingDueDate}>
                                {children}
                            </SelectTotalUpcomingTaskContext.Provider>
                        </SelectTotalCurrentTaskContext.Provider>
                    </SelectTotalTaskContext.Provider>
                </SelectUpcomingTaskContext.Provider>
            </SelectCurrentTaskContext.Provider>
        </SelectTaskContext.Provider>
    )
}

export default TaskProvider
