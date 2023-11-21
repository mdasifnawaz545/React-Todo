import { useState } from "react";

export default function Form() {
    // let [fullname, setfullname] = useState("MOHAMMAD ASIF NAWAZ");
    // let [username, setusername] = useState("MOHAMMAD ASIF NAWAZ");
    let [formData,setFormData]=useState({fullname:"",username:"",password:"",});
    let handleMultipleChange=(event)=>{
        setFormData((currData)=>{
            console.log(event.target.name);
            console.log(event.target.value);
            return {...currData,[event.target.name]:event.target.value}
    });}

    let handleSubmit=(event)=>{
        event.preventDefault();
        console.log(formData);
        setFormData({
            fullname:"",
            username:"",
        });
    }
    
    return (
        
            <form onSubmit={handleSubmit}>  
                <label htmlFor="names">Name</label>
                <input type="text" placeholder="Enter Your Beautiful Name - " value={formData.fullname} id="names" onChange={handleMultipleChange} name="fullname"/>
                <br />
                <input type="text" placeholder="Enter Your Username" id="username" value={formData.username} onChange={handleMultipleChange} name="username"/>
                <br />
                <input type="text" onChange={handleMultipleChange} name="password" value={formData.password} placeholder="Enter Your Password"/>
                <button type="submit">Enter</button>
            </form>


        
    );
}