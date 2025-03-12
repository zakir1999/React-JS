

import React, { useState, useEffect,useRef } from 'react';
export default function timer(){
    const [count,setCount] = useState(0);
    const intervalRef=useRef(null);
    function handleStart(){
        intervalRef.current=setInterval(()=>{
            setCount((prevCount)=>prevCount+1);
        },1000)
    }
    function stopTimer(){
        clearInterval(intervalRef.current);
        intervalRef.current=null;
    }
    function handleReset(){
        setCount(0);
        stopTimer();
    }


   return (
    <>
    <h1>Timer: {count}</h1>
    <button onClick={handleStart}>Start</button>
    <br/>
    <button onClick={stopTimer}>Stop</button>
    <br/>
    <button onClick={handleReset}>Reset</button>
   
    </>

   );

}