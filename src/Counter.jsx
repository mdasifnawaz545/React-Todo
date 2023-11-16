import { useState } from "react";
export default function Counter(){
    // perform init operation like using Math.random();
    let init=()=>{
        return Math.floor(Math.random()*10);
    }
    let [count,setcount]=useState(init);
    let incCount=(event)=>{
        event.preventDefault();
        // setcount((currCount)=>{
        //     return currCount+1;
        // });
        // setcount((currCount)=>{
        //     return currCount+1;
        // });
        setcount((currCount)=>{
            return currCount+1;
        });
        // setcount(count+1);
        // setcount(count+=1);
        console.log(count)
    }
    let styles={textColor:"green"};
    return (
        <form onSubmit={incCount}>
            <h3>Count : {count}</h3>
            <button>Count</button>
            <h1 style={styles}>&hearts;</h1>
        </form>
    )
}