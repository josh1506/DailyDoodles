import {createContext, useContext, useRef, useState} from "react";

import {createTaskFromAPI, deleteTaskFromAPI, updateTaskFromAPI} from "../../actions/taskAPI.js";
import {useListTask} from "./TaskListProvider.jsx";


const ModifyTasksContext = createContext()

export const useModifyTask = () => {
    return useContext(ModifyTasksContext)
}

// The API expects null, not "", for a cleared date input.
const withNullableDate = (taskData) => ({...taskData, due_date: taskData.due_date || null})

const ModifyTaskProvider = ({children}) => {
    const {setTask} = useListTask()
    const [selectedTask, setSelectedTask] = useState(null)
    const [taskCreateForm, setTaskCreateForm] = useState("")
    // The ref is the synchronous guard (two clicks can land before a re-render); the state drives the UI.
    const inFlight = useRef(new Set())
    const [pending, setPending] = useState(() => new Set())
    const [taskError, setTaskError] = useState("")

    // Pessimistic updates (state changes only after the server confirms), with a per-item
    // in-flight guard so double clicks can't send duplicate or conflicting requests.
    const run = (key, request, onSuccess, failMessage) => {
        if (inFlight.current.has(key)) {
            return
        }
        inFlight.current.add(key)
        setPending(new Set(inFlight.current))
        setTaskError("")
        request()
            .then(onSuccess)
            .catch(() => setTaskError(failMessage))
            .finally(() => {
                inFlight.current.delete(key)
                setPending(new Set(inFlight.current))
            })
    }

    const replaceTask = (data) => setTask(prev => prev.map(t => t.id === data.id ? data : t))

    const handleUpdateTask = () => {
        const taskData = withNullableDate(selectedTask)
        run(`save-${taskData.id}`, () => updateTaskFromAPI(taskData), data => {
            replaceTask(data)
            setSelectedTask(current => current?.id === data.id ? data : current)
        }, "Couldn't save your changes. Please try again.")
    }

    const handleDeleteTask = () => {
        const {id} = selectedTask
        run(`delete-${id}`, () => deleteTaskFromAPI(selectedTask), () => {
            setTask(prev => prev.filter(t => t.id !== id))
            setSelectedTask(current => current?.id === id ? null : current)
        }, "Couldn't delete the task. Please try again.")
    }

    const handleCreateTask = (e) => {
        e.preventDefault()
        const title = taskCreateForm.trim()
        if (!title) {
            return
        }
        run("create", () => createTaskFromAPI({title}), data => {
            setTask(prev => [...prev, data])
            setTaskCreateForm("")
        }, "Couldn't add the task. Please try again.")
    }

    const handleChangeTaskStatus = (taskData) => {
        const updated = withNullableDate({...taskData, is_completed: !taskData.is_completed})
        run(`toggle-${taskData.id}`, () => updateTaskFromAPI(updated), replaceTask,
            "Couldn't update the task. Please try again.")
    }

    const isPending = (key) => pending.has(key)

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
            isPending,
            taskError,
        }}>
            {children}
        </ModifyTasksContext.Provider>
    )
}

export default ModifyTaskProvider
