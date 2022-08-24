import React from 'react';
import { useNavigate } from "react-router-dom";

const Addlist=()=>{
    const[activity,setActivity] = React.useState('');
    const[status, setStatus] = React.useState('');
    const[time,setTime] = React.useState('');
    const navigate = useNavigate()
    

    const handleaddlist = async () => {
        console.log(activity,status,time)
        let result = await fetch('http://localhost:5000/addlist', {
            method: 'post',
            body:JSON.stringify({activity,status,time}),
            headers: {
                'Content-Type': 'application/json'
            },  
        })
        result = await result.json()
        console.log(result)
        navigate("/list")

    }


    return(
        <div className='product'>
        <h1>Add list</h1>
        <select type="text" placeholder="activity" className='inputBox' value={activity} onChange={(e)=>setActivity(e.target.value)}>
            <option>Running</option>
            <option>Drinking</option>
            <option>Sleeping</option>
            <option>Eating</option>
            <option>Washing</option>
        </select>
        <select type="text" placeholder="status" className='inputBox' value={status} onChange={(e)=>setStatus(e.target.value)}>
            <option>Pending</option>
            <option>Completed</option>
        </select>
        <input type="text" placeholder="time" className='inputBox' value={time} onChange={(e)=>setTime(e.target.value)}/>
    

     <button className='appButton' onClick={handleaddlist}> Add list</button>
        </div>
    )
}

export default Addlist;