import Template from "../common/Template.jsx";
import {useTotalUpcomingTask, useUpcomingTask} from "../../../services/reducers/TaskProvider.jsx";


const Upcoming = () => {
    const title = "Upcoming"
    const task = useUpcomingTask()
    const totalTask = useTotalUpcomingTask()

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

export default Upcoming
