import { useEffect, useState } from "react";

export default function Count(){
    let [countx,Setcountx]=useState(0);
    let [county,Setcounty]=useState(0);
    let incCountx=()=>{
        Setcountx((prevCount)=>(prevCount+1));
    }
    let incCounty=()=>{
        Setcounty((prevCount)=>(prevCount+1));
    }
    useEffect(function sideEffect(){
        console.log("Alhamdulillah Working Fine");
    },[countx])
    return(
        <div>
            <h3>Count={countx}</h3>
            <br /><br />
            <button onClick={incCountx}>+1</button>
            <h3>Count={county}</h3>
            <br /><br />
            <button onClick={incCounty}>+1</button>
        </div>
    );
}