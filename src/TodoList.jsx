import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
export default function TodoList() {
    let [todo, settodo] = useState([{ task: "Salaam", id: uuidv4(), isDone: false }]);
    let [task, settask] = useState([""]);
    let input = (event) => {
        event.preventDefault();
        settask(event.target.value);
    }
    let addTask = (event) => {
        event.preventDefault();
        settodo((prevarr) => {
            return [...prevarr, { task: task, id: uuidv4(), isDone: false }]
        });
        settask([""]);

    }
    let markDone = (id) => {
        event.preventDefault();

        settodo((prevarr) => (
            prevarr.map((prev) => {
                if (prev.id == id) {

                    return { ...prev, isDone: true }
                }
                else {
                    return prev;
                }
            })
        ))

    }
    let undone = (id) => {


        settodo((prevarr) => (
            prevarr.map((prev) => {
                if (prev.id == id) {
                    return { ...prev, isDone: false }
                }
                return prev;
            })
        ))
    }
    let deleteOne = (id) => {
        settodo((prevarr) => (
            prevarr.filter((prev) => (
                prev.id != id
            ))
        ))
    }
    let deleteAll=()=>{
        settodo(
            [""]
            
        )
    }

    return (
        <div>
            <form>
                <label>Enter Your Task&nbsp;&nbsp;&nbsp;</label>
                <input type="text" onChange={input} value={task} />
                <br /><br />
                <button type="submit" onClick={addTask}>Add Task</button>
            </form>
            <br />
            <hr />
            <br />
            <h4>- &nbsp; Todo List Item &nbsp; -</h4>
            <br />
            <ul>
                {todo.map((to) => <li key={to.id}><span style={to.isDone ? { textDecorationLine: "line-through" } : {}}>{to.task}&nbsp;&nbsp;&nbsp;<button onClick={() => markDone(to.id)}
                >Mark as Done</button>&nbsp;&nbsp;&nbsp;<button onClick={() => undone(to.id)}>Mark as Undone</button>&nbsp;&nbsp;&nbsp;<button onClick={() => deleteOne(to.id)}>Delete</button></span></li>)}
            </ul>
            <button onClick={deleteAll}>Delete All</button>
            {/* <button onClick={markdoneAll}>Mark as Done All</button> */}
        </div>
    );



}