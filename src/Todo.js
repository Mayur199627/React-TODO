import React from "react";
import AllTask from "./AllTask";
import CraeteTask from "./CreateTask";

export default function Todo(){
let [tasks, setTasks] = React.useState([])

/* UseEffecet For Save Data On LocalStorage */

// React.useEffect(()=>{
//     let taskList = localStorage.getItem('tasks');
//     taskList = JSON.parse(taskList);
//     setTasks([...taskList])
// },[]);

// React.useEffect(()=>{
//     if(tasks.length !== 0) {
//         localStorage.setItem('tasks',JSON.stringify(tasks));
//     }
// },[]);



/* Function For Count Panding TODO */

function pandingTodoCount(){
    let count = 0;
    tasks.forEach(task=>{
        if(!task.completed){
            count++
        }
    })
    return count
}


/* Function For Add task in todo */

function addTask(task){
    setTasks(tasks =>{
        return [
            ...tasks,
            task
        ]
    })


}

/* Function For update task in todo */

function updateTask(index){
    setTasks(tasks => {
        let newTask = [...tasks]
        newTask[index].completed = true;
        return newTask
    })
}

/* Function For Remove task from todo */

function removeTask(index){
    setTasks(tasks => {
        const newTask = [...tasks]
        newTask.splice(index,1);
        return newTask;
    })
}

return (

    <div className="task-container">
        <div className="create-task">
            <CraeteTask addTask={addTask}></CraeteTask>
        </div>
        <div className="pending-task">
            <h2>Pending Tasks {pandingTodoCount()}</h2>
            {tasks.map((task,index)=><AllTask {...task} key={index} index={index} updateTask={updateTask} removeTask={removeTask}></AllTask>)}
        </div>

    </div>
)
}