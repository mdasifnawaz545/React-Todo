import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
export default function () {
    let [todo, settodo] = useState([{ task: "Salaam...", id: uuidv4(), isDone: false }]);
    let [task, settask] = useState([""]);
    let newTask = (event) => {
        settodo((prevarr) => (
            [...prevarr, { task: task, id: uuidv4(), isDone: false }]
        ))
        event.preventDefault();
        settask([""]);
        console.log("newtask is added");
    }
    let changeInput = (event) => {
        settask(event.target.value);

    }
    let deletes = (id) => {
        event.preventDefault();
        console.log("Items to be deleted.")
        console.log(id);
        settodo((prevtodo) => (
            prevtodo.filter((to) => (to.id != id))));
    }
    let Uppercase = () => {
        event.preventDefault();
        settodo((prevarr) => (
            prevarr.map((prev) => {
                return { ...prev, task: prev.task.toUpperCase() }
            })
        ))
    }
    let Uppercaseone = (id) => {
        event.preventDefault();
        settodo((prevtodo) => (
            prevtodo.map((tod) => {
                if (tod.id == id) {
                    return {
                        ...tod,
                        task: tod.task.toUpperCase()
                    };
                }
                else {
                    return tod;
                }
            })));

    }
    let Doneall = () => {
        event.preventDefault();
        settodo((prevarr) => (
            prevarr.map((prev) => { return { ...prev, isDone: true } })
        ))
    }
    let Doneone = (id) => {
        event.preventDefault();
        settodo((prevarr) => (
            prevarr.map((prev) => {
                if (prev.id == id) {
                    return { ...prev, isDone: true }
                }
                else {
                    return prev;
                }
            })))


        // Implement marks as not done and mark all as not done.

        let marknotdoneall=()=> {
            settodo((prevarr) => {

                prevarr.map((prev) => {
                    return { ...prev, isDone: false }
                })
            })
        }
        let marknotdone=()=> {
            settodo((prevarr) => {
                prevarr.map((prev) => {
                    if (prev.id == id) {

                        return { ...prev, isDone: false }
                    }
                    else {
                        return prev;
                    }
                })
            })
        }

        return (
            <form>
                <input style={{ marginBottom: "5px" }} onChange={changeInput} value={task} id="" />&nbsp;&nbsp;&nbsp;&nbsp;
                <button onClick={newTask}>Add Task</button>
                <h3>Todo List To do</h3>
                <hr />
                <ul>
                    {todo.map((to) => (
                        <li key={to.id} ><span style={to.isDone ? { textDecoration: "line-through" } : {}}>
                            {to.task}
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <button onClick={() => deletes(to.id)}>Delete</button> &nbsp;&nbsp;&nbsp;&nbsp;
                            <button onClick={() => Uppercaseone(to.id)}>UpperCase</button> &nbsp;&nbsp;&nbsp;&nbsp;<button onClick={() => Doneone(to.id)}>Mark As Done</button> &nbsp;&nbsp;&nbsp;&nbsp;<button onClick={() => marknotdone(to.id)}>Mark As NotDone</button>
                        </span>
                        </li>


                    ))}
                </ul>
                <button onClick={Uppercase}>UpperCase</button> &nbsp;&nbsp;&nbsp;&nbsp;
                <button onClick={Doneall}>Mark All As Done</button>
                <button onClick={marknotdoneall}>Mark All As Not Done</button>
            </form>
        );
    }
}