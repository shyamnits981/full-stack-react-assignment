import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const Productlist = () => {
    const [product, setProduct] = useState([]);
    const navigator = useNavigate()

    useEffect(() => {
        getProducts();
    }, [])

    const getProducts = async() => {
        let result = await fetch('http://localhost:5000/addlist');
        result = await result.json();
        setProduct(result)
    }
    console.log("product",product)

    const Logout=()=>{
        localStorage.clear()
       
    }

    const addactivity=()=>{
        navigator("/addlist")
    }

    return (
        <div className="list">
            <div className="user"><p>user name</p></div>
        
            <div ><button className="right" onClick={addactivity}>Add new activity</button></div>
            <ul>
                <li className="font1">Activity</li>
                <li className="font1">Status</li>
                <li className="font1">Time</li>
            </ul>

{
    product.map((item,index)=>
    
    <ul className="font">

    <li>{item.activity}</li>
    <li>{item.status}</li>
    <li>{item.time}</li>
</ul>
    
    )
}
            
        </div>
    )
}

export default Productlist;