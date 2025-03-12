import { React,useState } from "react";
import ComponentB from "./ComponentB";
export default function ComponentA(){
    const [user,setUser]=useState('Zakir Hossen');
    return(
        <div className="Box">
            <h1>Component A</h1>
            <ComponentB user={user}></ComponentB>
        </div>
    );
}