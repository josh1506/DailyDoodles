import {createContext, useContext, useState} from "react";

import {createTaskFromAPI, deleteTaskFromAPI, updateTaskFromAPI} from "../../actions/taskAPI.js";
import {useListTask} from "./TaskListProvider.jsx";


const ModifyTasksContext = createContext()

export const useModifyTask = () => {
    return useContext(ModifyTasksContext)
}

const ModifyTaskProvider = ({children}) => {
    const {
        task,
        setTask,
        handleCurrentAndUpcomingDueDate,
    } = useListTask()
    const [selectedTask, setSelectedTask] = useState(null)
    const [taskCreateForm, setTaskCreateForm] = useState("")

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

    const handleCreateTask = (e) => {
        e.preventDefault()
        createTaskFromAPI({title: taskCreateForm})
            .then(data => {
                const newTaskList = [...task, data]
                setTask(newTaskList)
                handleCurrentAndUpcomingDueDate(newTaskList)
                setTaskCreateForm("")
            })
    }

    const handleChangeTaskStatus = (taskID) => {
        const newTaskList = [...task]
        const index = newTaskList.findIndex(taskData => taskData.id === taskID)
        const taskData = {...newTaskList[index], is_completed: !newTaskList[index].is_completed}

        if (taskData.due_date === "") {
            taskData.due_date = null
        }

        updateTaskFromAPI(taskData)
            .then(data => {
                newTaskList[index] = data
                setTask(newTaskList)
                handleCurrentAndUpcomingDueDate(newTaskList)
            })
    }

    return (
        <ModifyTasksContext.Provider value={{
            selectedTask,
            setSelectedTask,
            handleUpdateTask,
            handleDeleteTask,
            handleCreateTask,
            handleChangeTaskStatus,
            taskCreateForm,
            setTaskCreateForm,
        }}>
            {children}
        </ModifyTasksContext.Provider>
    )
}

export default ModifyTaskProvider
