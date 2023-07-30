import Template from "../common/Template.jsx";
import {useCurrentTask, useTotalCurrentTask} from "../../../services/reducers/TaskProvider.jsx";


const Today = () => {
    const title = "Today"
    const task = useCurrentTask()
    const totalTask = useTotalCurrentTask()

    return (
        <>
            <Template
                title={title}
                totalTask={totalTask}
                task={task}
            />
        </>
    )
}

export default Today
