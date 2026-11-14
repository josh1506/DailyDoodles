import Aside from "./Aside.jsx";
import {clickable} from "../../../services/utils/a11y.js";
import {useListTask} from "../../../services/reducers/task/TaskListProvider.jsx";
import {useModifyTask} from "../../../services/reducers/task/TaskModifyProvider.jsx";

import "../../../assets/styles/task/task-template/task-template.scss"


const Template = (props) => {
    const {loadState} = useListTask()
    const {
        selectedTask,
        setSelectedTask,
        taskCreateForm,
        setTaskCreateForm,
        handleCreateTask,
        handleChangeTaskStatus,
        isPending,
        taskError,
    } = useModifyTask()

    const tasks = props.task || []

    return (
        <>
            <div className={"task-content"}>
                <div className={"task-list"}>
                    <div className={"task-title"}>
                        <h2>{props.title}</h2>
                        <span aria-label={`${props.totalTask} tasks`}>{props.totalTask}</span>
                    </div>
                    {props.showCreateForm && <form className={"task-input"} onSubmit={handleCreateTask}>
                        <input
                            type={"text"} name={"task"} value={taskCreateForm}
                            aria-label={"Add a new task"}
                            maxLength={255}
                            onChange={e => setTaskCreateForm(e.target.value)}
                        />
                        <i className="bi bi-plus-lg" aria-hidden="true"></i>
                    </form>}
                    {taskError && !selectedTask && <p className={"status-message error"} role="alert">{taskError}</p>}
                    <div className={"tasks-container"} aria-busy={loadState === "loading"}>
                        {loadState === "loading" && <p className={"status-message"} role="status">Loading tasks…</p>}
                        {loadState === "error" && <p className={"status-message error"} role="alert">
                            Couldn&apos;t load your tasks. Refresh the page to try again.
                        </p>}
                        {loadState === "ready" && tasks.length === 0 &&
                            <p className={"status-message"}>{props.emptyMessage || "No tasks yet."}</p>}
                        {tasks.map((task) => (
                            <div className={"task-item"} key={task.id}>
                                <div>
                                    <div>
                                        <input
                                            type="checkbox"
                                            aria-label={`Mark "${task.title || "Untitled"}" as ${task.is_completed ? "not done" : "done"}`}
                                            checked={task.is_completed}
                                            disabled={isPending(`toggle-${task.id}`)}
                                            onChange={() => handleChangeTaskStatus(task)}
                                        />
                                    </div>
                                    <div
                                        className={"task-item-title"}
                                        aria-label={`Open details for "${task.title || "Untitled"}"`}
                                        {...clickable(() => setSelectedTask(task))}
                                    >
                                        <span>{task.title}</span>
                                    </div>
                                </div>
                                {/* Mouse shortcut duplicating the title button; hidden from AT and tab order. */}
                                <div className={"icon"} aria-hidden="true" onClick={() => setSelectedTask(task)}>
                                    <i className="bi bi-caret-right-fill"></i>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <Aside/>
        </>
    )
}

export default Template
