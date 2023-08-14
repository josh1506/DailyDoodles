import {useModifyTask} from "../../../services/reducers/task/TaskModifyProvider.jsx";

import "../../../assets/styles/task/task-aside/task-aside.scss"


const Aside = () => {
    const {
        selectedTask,
        setSelectedTask,
        handleUpdateTask,
        handleDeleteTask
    } = useModifyTask()

    return (
        <>
            {selectedTask && <aside className={selectedTask ? "task-aside active" : "task-aside"}>
                <button
                    className={"close-btn"}
                    onClick={() => setSelectedTask(null)}
                >
                    <i className="bi bi-x"></i>
                </button>
                <div>
                    <h3 className={"task-detail-title"}>Task:</h3>
                    <div className={"task-description"}>
                        <input
                            type="text"
                            placeholder={"Title"}
                            value={selectedTask.title}
                            onChange={e => setSelectedTask({...selectedTask, title: e.target.value})}
                        />
                        <textarea
                            name=""
                            id=""
                            cols="30"
                            rows="10"
                            placeholder={"Description"}
                            value={selectedTask.description ? selectedTask.description : ""}
                            onChange={e => setSelectedTask({...selectedTask, description: e.target.value})}
                        />
                    </div>
                    <div className={"task-additional-description"}>
                        <div>
                            <label htmlFor="">Due date</label>
                            <input
                                type="date"
                                value={selectedTask.due_date ? selectedTask.due_date : ""}
                                onChange={e => setSelectedTask({...selectedTask, due_date: e.target.value})}
                            />
                        </div>
                    </div>
                </div>
                <div className={"button-container"}>
                    <button onClick={handleDeleteTask}>Delete Task</button>
                    <button onClick={handleUpdateTask}>Save changes</button>
                </div>
            </aside>}
        </>
    )
}

export default Aside
