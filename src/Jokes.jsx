import { useEffect, useState } from "react";

export default function Jokes(){
    let [joke,setJoke]=useState({id:"",punchline:"",setup:"",type:""});
    let URL="https://official-joke-api.appspot.com/random_joke";
    let getNewJoke=async()=>{
        let result=await fetch(URL);
        let JSONresult=await result.json();
        console.log(JSONresult);
        setJoke({id:JSONresult.id,punchline:JSONresult.punchline,setup:JSONresult.setup,type:JSONresult.type})
    }
    useEffect(()=>{
        async function getFirstJoke(){
            let result=await fetch(URL);
            let JSONresult=await result.json();
            setJoke({id:JSONresult.id,punchline:JSONresult.punchline,setup:JSONresult.setup,type:JSONresult.type});
        }
        getFirstJoke();
    },[]);
    return(
        <>
        <button onClick={getNewJoke}>Get a Joke !</button>
        <p>{joke.punchline}</p>
        <p>{joke.setup}</p>
        <p>{joke.type}</p>
        </>
    );
}