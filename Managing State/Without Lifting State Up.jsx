import {useState} from "react";
//Without Lifting state up
function Panel({title,children}){
    const [isopen,setIsopen]=useState(false);

    return (
        <div className="panel">
            <h2>{title}</h2>
            {
            isopen ?(<p>{children}</p>):( <button onClick={()=>setIsopen(true)}>Show</button> )
            
        } 


        </div>

    );
}
export default function Sharing(){
    return (
        <>
        <h1>With out Sharing State Lifting Up</h1>
        <Panel title="about">with a population of about 2 millions.</Panel>
        <Panel title="Location">It is located in the south of the country.</Panel>
        </>




    );
}