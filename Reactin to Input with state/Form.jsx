export default function Form({status}){
    if(status === "success"){
        return <h1> Sucessfully Arrive!</h1>
    }
    return(
        <form>
            <textarea disabled={status==='submitting'}/>
            <br />
            <button disabled={status==='submitting' || status==='empty'}>Submit</button>
            {
                status==='error' && <p> Good Guess but a wrong answer.Try Again!</p>
            }

        </form>
    );
}