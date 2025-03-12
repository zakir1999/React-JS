import React from "react";
import ComponentC from "./ComponentC";
export default function ComponentB(props){
    return(
        <div className="Box">
            <h1>Component B</h1>
            <ComponentC user={props.user}></ComponentC>
        </div>
    );
}