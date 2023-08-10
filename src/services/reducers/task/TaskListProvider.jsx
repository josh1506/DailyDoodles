import {createContext, useContext, useEffect, useMemo, useState} from "react";

import {fetchTasksFromAPI} from "../../actions/taskAPI.js";


const ListTaskContext = createContext()

export const useListTask = () => {
    return useContext(ListTaskContext)
}

const ListTaskProvider = ({children}) => {
    const [task, setTask] = useState([])
    const [taskCurrentDueDate, setTaskCurrentDueDate] = useState([])
    const [taskUpcomingDueDate, setTaskUpcomingDueDate] = useState([])

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

    return (
        <ListTaskContext.Provider value={{
            task,
            setTask,
            taskCurrentDueDate,
            taskUpcomingDueDate,
            totalTask,
            totalTaskCurrentDueDate,
            totalTaskUpcomingDueDate,
            handleCurrentAndUpcomingDueDate
        }}>
            {children}
        </ListTaskContext.Provider>
    )
}

export default ListTaskProvider
