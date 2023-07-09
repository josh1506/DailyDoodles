import {useEffect, useState} from "react";

import Template from "../common/Template.jsx";


const Today = () => {
    const title = "Today"
    const [taskList, setTaskList] = useState([0, 0, 0, 0, 0, 0])
    const [totalTask, setTotalTask] = useState(0)

    useEffect(() => {
        setTotalTask(taskList.length)
    }, [taskList])

    return (
        <>
            <Template
                title={title}
                totalTask={totalTask}
                taskList={taskList}
            />
        </>
    )
}

export default Today
