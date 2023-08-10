import ListTaskProvider from "./TaskListProvider.jsx";
import ModifyTaskProvider from "./TaskModifyProvider.jsx";


const TaskProvider = ({children}) => {
    return (
        <ListTaskProvider>
            <ModifyTaskProvider>
                {children}
            </ModifyTaskProvider>
        </ListTaskProvider>
    )
}

export default TaskProvider
