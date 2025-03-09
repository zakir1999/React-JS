import {useEffect, useRef} from 'react';


export default function Form() {
    const inputref=useRef(null);
    useEffect(()=>{
        inputref.current.focus();
    },[]);
    return (
        <div>
        <p>
        <input type="text" ref={inputref} placeholder="Enter something"/>
        </p>
        </div>
    );
}