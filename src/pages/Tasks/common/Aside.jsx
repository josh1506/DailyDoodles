import "../../../assets/styles/task/task-aside.scss"


const Aside = () => {
    return (
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
                        <input type="date"/>
                    </div>
                </div>
            </div>
            <div className={"button-container"}>
                <button>Delete Task</button>
                <button>Save changes</button>
            </div>
        </aside>
    )
}

export default Aside
