import {useState} from 'react';
export default function Sharingstate (){
    const [index,setIndex]=useState(0);
    return(
        <>
        <h1>All about Sharing State</h1>
        <Panel title="About"
        isactive={index===0}
        onshow={()=>setIndex(0)}>
            with a population of about 2 million people.
        </Panel>
        <Panel title='Economy'
        isactive={index===1}
        onshow={()=>setIndex(1)}
        >
            The name comes from <span lang ="kk-kZ">AMMA</span>
        </Panel>
        </>
    );
}
function Panel({title,children,isactive,onshow}){
    return(

        <section>
        <h3>{title}</h3>
        {
            isactive ? ( <p>{children}</p>):( <button onClick={onshow}>Show</button>)
        }
        </section>
    );

}