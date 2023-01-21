import "./App.css"

export default function AllTask(props){

function handleMarkCompleted(){
    props.updateTask(props.index)
    // console.log(props.completed)
}

function handleRemoveTask(){
    props.removeTask(props.index)
}

const taskStyle = {
    background : props.completed ? "#D3D3D3" : "white",
    color:"black",
    fontSize:"1.5rem",
    borderRadius:'5px',
    padding:"10px",
    marginBottom:'5px'
}


    return (
        <div className="task" style={taskStyle}>
            <div>{props.title}</div>
            <div>
                {props.completed && <span><button className="completed" >Completed</button> <button className="remove" onClick={handleRemoveTask}>Remove</button></span> }
                {!props.completed && <span><button className="mcompleted" onClick={handleMarkCompleted}>Mark as Completed</button> <button className="remove" onClick={handleRemoveTask}>Remove</button></span>}
            </div>
        </div>
    )
}