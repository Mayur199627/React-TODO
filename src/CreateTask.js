import "./App.css"
import React from "react"

export default function CraeteTask(props){

    let [value,setValue] = React.useState("")

    function handleSubmit(e){
        e.preventDefault();
        props.addTask({
            title:value,
            completed:false
        })
        setValue("")
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input className="todo_input" type="text" placeholder="Add A Todo" value={value} onChange={(e)=>{setValue(e.target.value)}}></input>
                <input className="todo_sbt" type="submit" Value="AddTask" />
            </form>
        </div>
    )
}