import { useState } from "react";

export default function WithLifitingStateUp(){
    const [active,setIsactive]=useState(0);
    return(

        <>
        <h1>Sharing State lifiting up</h1>
        <Panel title="About" isactive={active===0} onshow={()=>setIsactive(0)}> With the help of Sharing State lifting Up</Panel>
        <Panel title="Home" isactive={active===1} onshow={()=>setIsactive(1)}> With the help of Sharing State lifting Up</Panel>

        
        
        </>
    );
}
function Panel({title,children,isactive,onshow}){
    return(
    <>
     <h1>{title}</h1>
     {isactive ? ( <p>{children}</p>) : (<button onClick={onshow}>Show</button>)}
    </>
    );
}