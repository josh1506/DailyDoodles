import Template from "../common/Template.jsx";
import {useTask, useTotalTask} from "../../../services/reducers/TaskProvider.jsx";


const List = () => {
    const title = "List"
    const task = useTask()
    const totalTask = useTotalTask()

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

export default List
