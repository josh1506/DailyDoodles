import Aside from "./Aside.jsx";

import "../../../assets/styles/task/task-template.scss"


const Template = (props) => {
    return (
        <>
            <div className={"task-content"}>
                <div className={"task-list"}>
                    <div className={"task-title"}>
                        <h2>{props.title}</h2>
                        <span>{props.totalTask}</span>
                    </div>
                    <div className={"task-input"}>
                        <input type="text"/>
                        <i className="bi bi-plus-lg"></i>
                    </div>
                    <div className={"tasks-container"}>
                        {props.task && props.task.map((task, index) => (
                            <div className={"task-item"} key={index}>
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
