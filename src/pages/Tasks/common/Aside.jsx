import {useEffect, useRef} from "react";

import {useModifyTask} from "../../../services/reducers/task/TaskModifyProvider.jsx";

import "../../../assets/styles/task/task-aside/task-aside.scss"


const Aside = () => {
    const {
        selectedTask,
        setSelectedTask,
        handleUpdateTask,
        handleDeleteTask,
        isPending,
        taskError,
    } = useModifyTask()
    const titleRef = useRef(null)
    const selectedId = selectedTask?.id

    // Move focus into the panel when a different task is opened; Escape closes it.
    useEffect(() => {
        if (selectedId === undefined) {
            return
        }
        titleRef.current?.focus()
        const onKeyDown = (e) => e.key === "Escape" && setSelectedTask(null)
        document.addEventListener("keydown", onKeyDown)
        return () => document.removeEventListener("keydown", onKeyDown)
    }, [selectedId, setSelectedTask])

    if (!selectedTask) {
        return null
    }

    const saving = isPending(`save-${selectedTask.id}`)
    const deleting = isPending(`delete-${selectedTask.id}`)

    return (
        <aside className={"task-aside active"} aria-labelledby={"task-detail-heading"}>
            <button
                className={"close-btn"}
                aria-label={"Close task details"}
                onClick={() => setSelectedTask(null)}
            >
                <i className="bi bi-x" aria-hidden="true"></i>
            </button>
            <div>
                <h3 className={"task-detail-title"} id={"task-detail-heading"}>Task:</h3>
                <div className={"task-description"}>
                    <input
                        ref={titleRef}
                        type="text"
                        placeholder={"Title"}
                        aria-label={"Title"}
                        value={selectedTask.title || ""}
                        onChange={e => setSelectedTask({...selectedTask, title: e.target.value})}
                    />
                    <textarea
                        cols="30"
                        rows="10"
                        placeholder={"Description"}
                        aria-label={"Description"}
                        value={selectedTask.description ? selectedTask.description : ""}
                        onChange={e => setSelectedTask({...selectedTask, description: e.target.value})}
                    />
                </div>
                <div className={"task-additional-description"}>
                    <div>
                        <label htmlFor="task-due-date">Due date</label>
                        <input
                            id="task-due-date"
                            type="date"
                            value={selectedTask.due_date ? selectedTask.due_date : ""}
                            onChange={e => setSelectedTask({...selectedTask, due_date: e.target.value})}
                        />
                    </div>
                </div>
            </div>
            {taskError && <p className={"status-message error"} role="alert">{taskError}</p>}
            <div className={"button-container"}>
                <button onClick={handleDeleteTask} disabled={deleting || saving}>
                    {deleting ? "Deleting…" : "Delete Task"}
                </button>
                <button onClick={handleUpdateTask} disabled={deleting || saving}>
                    {saving ? "Saving…" : "Save changes"}
                </button>
            </div>
        </aside>
    )
}

export default Aside
