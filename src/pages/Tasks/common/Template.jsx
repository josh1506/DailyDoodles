import Aside from "./Aside.jsx";

import "../../../assets/styles/task/task-template.scss"
import {
    useCreateTask,
    useSelectedTaskUpdate,
    useTaskCreateForm,
    useTaskCreateFormUpdate
} from "../../../services/reducers/TaskProvider.jsx";


const Template = (props) => {
    const setSelectedTask = useSelectedTaskUpdate()
    const taskCreateForm = useTaskCreateForm()
    const setTaskCreateForm = useTaskCreateFormUpdate()
    const handleCreateTask = useCreateTask()

    return (
        <>
            <div className={"task-content"}>
                <div className={"task-list"}>
                    <div className={"task-title"}>
                        <h2>{props.title}</h2>
                        <span>{props.totalTask}</span>
                    </div>
                    {props.showCreateForm && <form className={"task-input"} onSubmit={handleCreateTask}>
                        <input
                            type={"text"} name={"task"} value={taskCreateForm}
                            onChange={e => setTaskCreateForm(e.target.value)}
                        />
                        <i className="bi bi-plus-lg"></i>
                    </form>}
                    <div className={"tasks-container"}>
                        {props.task && props.task.map((task, index) => (
                            <div className={"task-item"} key={index} onClick={() => setSelectedTask(task)}>
                                <div>
                                    <div>
                                        <input
                                            type="checkbox"
                                            placeholder={"Add New Task"}
                                            checked={task.is_completed}
                                            readOnly
                                        />
                                    </div>
                                    <div className={"task-item-title"}>
                                        <span>{task.title}</span>
                                    </div>
                                </div>
                                <div className={"icon"}>
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
