import Template from "../common/Template.jsx";
import {useListTask} from "../../../services/reducers/task/TaskListProvider.jsx";


const Upcoming = () => {
    const title = "Upcoming"
    const {taskUpcomingDueDate, totalTaskUpcomingDueDate} = useListTask()

    return (
        <>
            <Template
                title={title}
                totalTask={totalTaskUpcomingDueDate}
                task={taskUpcomingDueDate}
            />
        </>
    )
}

export default Upcoming
