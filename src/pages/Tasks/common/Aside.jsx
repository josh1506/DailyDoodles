import "../../../assets/styles/task/task-aside.scss"
import {useSelectedTask, useSelectedTaskUpdate, useUpdateTask} from "../../../services/reducers/TaskProvider.jsx";


const Aside = () => {
    const selectedTask = useSelectedTask()
    const setSelectedTask = useSelectedTaskUpdate()
    const handleUpdateTask = useUpdateTask()

    return (
        <>
            {selectedTask && <aside className={"task-aside"}>
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
                            value={selectedTask.description}
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
                    <button>Delete Task</button>
                    <button onClick={handleUpdateTask}>Save changes</button>
                </div>
            </aside>}
        </>
    )
}

export default Aside
