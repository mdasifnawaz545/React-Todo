import { useState } from "react";

export default function CommentForm(){
    let [commentData,setCommentData]=useState({username:"",remark:"",rating:"1"});
    let multipleHandler=(event)=>{
        console.log("Alhamdulillah Working");
        setCommentData((currData)=>{
            return {...currData,[event.target.name]:event.target.value}
        });
    }
    let handleSubmit=(event)=>{
        event.preventDefault();
        console.log(commentData);
        setCommentData({username:"",remark:"",rating:"1"});
    }
    return(
    <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>&nbsp;&nbsp;&nbsp;
        <input type="text" value={commentData.username}  onChange={multipleHandler} id="username" name="username"/>
        <br />
        <br />
        <label htmlFor="remark">Remarks</label>&nbsp;&nbsp;&nbsp;
        <input type="text" value={commentData.remark}  onChange={multipleHandler} id="remark" name="remark"/>
        <br />
        <br />
        <label htmlFor="rating">Ratings</label>&nbsp;&nbsp;&nbsp;
        <input type="range" value={commentData.rating}  onChange={multipleHandler} min={1} max={5} id="rating" name="rating"/>
        <br />
        <br />
        <button type="submit">Submit</button>
    </form>);
}