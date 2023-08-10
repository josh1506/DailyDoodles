import Template from "../common/Template.jsx";
import {useListTask} from "../../../services/reducers/task/TaskListProvider.jsx";


const Today = () => {
    const title = "Today"
    const {taskCurrentDueDate, totalTaskCurrentDueDate} = useListTask()

    return (
        <>
            <Template
                title={title}
                totalTask={totalTaskCurrentDueDate}
                task={taskCurrentDueDate}
            />
        </>
    )
}

export default Today
