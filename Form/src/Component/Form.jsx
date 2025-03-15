import {React,useState } from "react";


export default function Form(){
  const [input, setInput]=useState({
    title:'',
    text:"",
    library:"React"
  }
  );
  const handleChange =(e)=>{
    const {name,value}=e.target;
    setInput((prev)=>({
        ...prev,
        [name]:value,
        
    }));

  };

  const handleSubmit =(e)=>{
    e.preventDefault();
    console.log('Form Data Sumbitted: ',input);
    alert(`Title:${input.title} \n Deatils: ${input.text}`);
    setInput({title:"",text:""});
  }
    return(
     <div style={{ textAlign: "center", marginTop: "50px", backgroundColor:"green",padding:"20px 20px"}}>
      <h2>Simple Form</h2>
        <form onSubmit={handleSubmit} style={{ maxWidth: "400px", margin: "auto" }}>
            <input type="text" name="title" style={{padding:"10px 20px",color:"black", border:"2px",borderRadius:"20px",backgroundColor:"white",display:"flex",justifyContent:"center",textAlign:"center"}} placeholder="Enter title"
             value={input.title} onChange={handleChange} required/>

             <br/>
             <br/>
             <textarea name="text"  placeholder ="Enter Details" value={input.text} onChange={handleChange} style={{
                padding:"10px 20px",color:"black", border:"2px",borderRadius:"20px",backgroundColor:"white",textAlign:"center"
             }}></textarea>
             <br/>

             <select onChange={handleChange} value={input.library} style={{backgroundColor:"white",color:"black",width:"100px",height:"30px",borderRadius:"20px"}}>
                <option value="React">React</option>
                <option value="Angular">Angular</option>
             </select>
             <br/>
             <br/>
             <button type="submit" style={{
                padding:"10px 20px",fontSize:"18px",curson:"pointer",color:"Green",backgroundColor:"white"
             }}>Submit</button>
        </form>
        </div>
    );
}