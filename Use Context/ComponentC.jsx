import React from "react";
import ComponentD from "./ComponentD";

export default function ComponentC(props){
    return(
      <div className="Box">
        <h1>
            Component C
        </h1>
        <ComponentD user={props.user}></ComponentD>
      </div>  
    );
}