import List from "./List/index.jsx";
import Today from "./Today/index.jsx";
import Upcoming from "./Upcoming/index.jsx";

import "../../assets/styles/task/task.scss"


const Tasks = () => {
    return (
        <div className={"task-page"}>
            <List/>
            {/*<Today/>*/}
            {/*<Upcoming/>*/}
        </div>
    )
}

export default Tasks
