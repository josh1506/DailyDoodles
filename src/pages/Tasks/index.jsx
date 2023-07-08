import "../../assets/styles/task/task.scss"


const Tasks = () => {
    return (
        <div className={"task-page"}>
            <div className={"task-content"}></div>

            <aside className={"task-aside"}>
                <div>
                    <h3 className={"task-detail-title"}>Task:</h3>
                    <div className={"task-description"}>
                        <input type="text" placeholder={"Title"}/>
                        <textarea name="" id="" cols="30" rows="10" placeholder={"Description"}/>
                    </div>
                    <div className={"task-additional-description"}>
                        <div>
                            <label htmlFor="">List</label>
                            <select name="" id="">
                                <option value=""></option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="">Due date</label>
                            <select name="" id="">
                                <option value=""></option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className={"button-container"}>
                    <button>Delete Task</button>
                    <button>Save changes</button>
                </div>
            </aside>
        </div>
    )
}

export default Tasks
