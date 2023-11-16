import { useState } from "react"
export default function Ludo(){
    let countGreen=()=>{
        setMoves((incmove)=>{
            return {...incmove,Green:incmove.Green+1}
        });
    }
    let countBlue=()=>{
        setMoves((incmove)=>{
            return {...incmove,Blue:incmove.Blue+1}
        });
    }
    let countRed=()=>{
        setMoves((incmove)=>{
            return {...incmove,Red:incmove.Red+1}
        });
    }
    let countPurple=()=>{
        setMoves((incmove)=>{
            return {...incmove,Purple:incmove.Purple+1}
        });
    }
let [move,setMoves]=useState({Green:0,Blue:0,Red:0,Purple:0});
    return(
        <div>
            <p>Green : {move.Green}</p>
            <button onClick={countGreen} style={{backgroundColor:"Green"}}>{move.Green}</button>
            <p>Blue : {move.Blue}</p>
            <button onClick={countBlue}  style={{backgroundColor:"Blue"}}>{move.Blue}</button>
            <p>Red : {move.Red}</p>
            <button  onClick={countRed}  style={{backgroundColor:"Red"}}>{move.Red}</button>
            <p>Purple : {move.Purple}</p>
            <button  onClick={countPurple}  style={{backgroundColor:"Purple"}}>{move.Purple}</button>
        </div>
    )
}
