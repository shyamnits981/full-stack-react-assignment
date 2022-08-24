import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import M from 'materialize-css';
import { useNavigate } from "react-router-dom";


const SignIn = () => {
    const navigate = useNavigate();
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")

    const PostData =async () => {
       let result = await fetch('http://localhost:5000/signin',{
        method:'post',
        body:JSON.stringify({email,password}),
        headers:{
            'Content-Type': 'application/json'
        }
       })
       result = await result.json();
       console.log(result)
       if(result.name){
          localStorage.setItem("user",JSON.stringify(result));
       }else{
        alert("Signup successfully")
       }
       navigate("/list")
    }
  

    return (
       <div className='bt'>
         <div className='mycard'>

<div className='card auth-card'>
    <h2>Member Login</h2>
    <input type="text" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} className="input"/>

    <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" />

    <button className="input" onClick={() => PostData()}>Signin</button>

    <h5>
        <Link to="/signup">Don't have an account?</Link>
    </h5>

</div>
</div>
       </div>
    )
}

export default SignIn;

