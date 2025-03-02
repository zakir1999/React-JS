import React,{useState} from "react";

function Button(){
    const [name,setName]=useState("GEST");
    const [age,setAge]=useState(0);
    const [address,setAddress]=useState("Machine");
    const updateage=()=>{
        setAge(age+1);
    };
    const handleclick = () =>{
        setName("Zakir Hossen");
    };
    function handleaddress(event){
        setAddress(event.target.value);
    };

    return (
        <div>
    <p>Name: {name}

    </p>
    <button onClick={handleclick}>Click Me 😆</button>
    <p>Age: {age}</p>
    <button onClick={updateage}>Click For Age</button>
    <br></br>
    <input value={address} onChange={handleaddress} />
    <p>Address:{address}</p>
    </div>
    );
    
}
export default Button