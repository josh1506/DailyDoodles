import Template from "../common/Template.jsx";
import {useListTask} from "../../../services/reducers/task/TaskListProvider.jsx";


const List = () => {
    const title = "List"
    const {task, totalTask} = useListTask()

    return (
        <>
            <Template
                title={title}
                totalTask={totalTask}
                task={task}
                showCreateForm={true}
            />
        </>
    )
}

export default List
