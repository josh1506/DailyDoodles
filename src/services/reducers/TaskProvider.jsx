import {createContext, useContext, useEffect, useMemo, useState} from "react"

import {deleteTaskFromAPI, fetchTasksFromAPI, updateTaskFromAPI} from "../actions/taskAPI.js"


const SelectTaskContext = createContext()
const SelectCurrentTaskContext = createContext()
const SelectUpcomingTaskContext = createContext()
const SelectSelectedTaskContext = createContext()
const SelectSelectedTaskUpdateContext = createContext()

const SelectTotalTaskContext = createContext()
const SelectTotalCurrentTaskContext = createContext()
const SelectTotalUpcomingTaskContext = createContext()
const SelectUpdateTaskContext = createContext()
const SelectDeleteTaskContext = createContext()

export const useTask = () => {
    return useContext(SelectTaskContext)
}

export const useCurrentTask = () => {
    return useContext(SelectCurrentTaskContext)
}

export const useUpcomingTask = () => {
    return useContext(SelectUpcomingTaskContext)
}

export const useSelectedTask = () => {
    return useContext(SelectSelectedTaskContext)
}

export const useSelectedTaskUpdate = () => {
    return useContext(SelectSelectedTaskUpdateContext)
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

export const useUpdateTask = () => {
    return useContext(SelectUpdateTaskContext)
}

export const useDeleteTask = () => {
    return useContext(SelectDeleteTaskContext)
}

const TaskProvider = ({children}) => {
    const [task, setTask] = useState([])
    const [taskCurrentDueDate, setTaskCurrentDueDate] = useState([])
    const [taskUpcomingDueDate, setTaskUpcomingDueDate] = useState([])
    const [selectedTask, setSelectedTask] = useState(null)

    const totalTask = useMemo(() => task.length, [task])
    const totalTaskCurrentDueDate = useMemo(() => taskCurrentDueDate.length, [taskCurrentDueDate])
    const totalTaskUpcomingDueDate = useMemo(() => taskUpcomingDueDate.length, [taskUpcomingDueDate])

    const handleCurrentAndUpcomingDueDate = (data) => {
        const currentDate = new Date()
        setTaskCurrentDueDate(data.filter(task => {
            const dueDate = new Date(task.due_date)
            return (
                dueDate.getFullYear() === currentDate.getFullYear() &&
                dueDate.getMonth() === currentDate.getMonth() &&
                dueDate.getDate() === currentDate.getDate()
            )
        }))
        setTaskUpcomingDueDate(data.filter(task => new Date(task.due_date) > currentDate))
    }

    useEffect(() => {
        fetchTasksFromAPI()
            .then(data => {
                setTask(data)
                handleCurrentAndUpcomingDueDate(data)
            })
    }, [])

    const handleUpdateTask = () => {
        if (selectedTask.due_date === "") {
            selectedTask.due_date = null
        }
        updateTaskFromAPI(selectedTask)
            .then(data => {
                const newTaskList = [...task]
                const index = newTaskList.findIndex(taskData => taskData.id === data.id)
                newTaskList[index] = data
                setTask(newTaskList)
                handleCurrentAndUpcomingDueDate(newTaskList)
            })
    }

    const handleDeleteTask = () => {
        deleteTaskFromAPI(selectedTask)
            .then(() => {
                const newTaskList = [...task.filter(data => data.id !== selectedTask.id)]
                setTask(newTaskList)
                handleCurrentAndUpcomingDueDate(newTaskList)
                setSelectedTask(null)
            })
    }

    return (
        <SelectTaskContext.Provider value={task}>
            <SelectCurrentTaskContext.Provider value={taskCurrentDueDate}>
                <SelectUpcomingTaskContext.Provider value={taskUpcomingDueDate}>
                    <SelectSelectedTaskContext.Provider value={selectedTask}>
                        <SelectSelectedTaskUpdateContext.Provider value={setSelectedTask}>
                            <SelectTotalTaskContext.Provider value={totalTask}>
                                <SelectTotalCurrentTaskContext.Provider value={totalTaskCurrentDueDate}>
                                    <SelectTotalUpcomingTaskContext.Provider value={totalTaskUpcomingDueDate}>
                                        <SelectDeleteTaskContext.Provider value={handleDeleteTask}>
                                            <SelectUpdateTaskContext.Provider value={handleUpdateTask}>
                                                {children}
                                            </SelectUpdateTaskContext.Provider>
                                        </SelectDeleteTaskContext.Provider>
                                    </SelectTotalUpcomingTaskContext.Provider>
                                </SelectTotalCurrentTaskContext.Provider>
                            </SelectTotalTaskContext.Provider>
                        </SelectSelectedTaskUpdateContext.Provider>
                    </SelectSelectedTaskContext.Provider>
                </SelectUpcomingTaskContext.Provider>
            </SelectCurrentTaskContext.Provider>
        </SelectTaskContext.Provider>
    )
}

export default TaskProvider
