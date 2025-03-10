import{useState} from 'react';
export default function Rform(){
    const [answer,setAnswer]=useState('');
    const [error,setError]=useState(null);
    const [status,setStatus]=useState('typing');

    if(status==='success'){
        return <h1> Sucessfully Arrive!</h1>
    }
    async function handleSubmit(e){
        e.preventDefault();
        setStatus('submitting');
        try{
            await submitForm(answer);
            setStatus('success');
        }catch(error){
            setError(error);
            setStatus('typing');
        }
    }
    function handleTextareChange(e){
        setAnswer(e.target.value);
    }

    return (
        <>
        <h1> City Quiz</h1>
        <p> In which city there a billboard taht turns air into drinkable water</p>
        <form onSubmit={handleSubmit}>
            <textarea value={answer} onChange={handleTextareChange} disabled={status==='submitting'}/>
            <br />
            <button disabled={answer.length===0 || status==='submitting'}>Submit</button>
            {error !=null &&  <p> {error.message} </p>}

        </form>
        
        </>
    );
}
function submitForm(answer){
    return new Promise((resolve,rejecct)=>{
        setTimeout(()=>{
            let shouldError=answer.toLowerCase() !=='zakir';
            if(shouldError){
                rejecct(new Error('Good guess but a wrong answer. Tyy agains!'));

            }else{
                resolve();
            }
        },1500);
    });
}