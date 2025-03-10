import Form from "./Form";

let statuses=['empty','typing','submitting','success','error'];
export default function Status(){
    return (
    <>
    {statuses.map(status=>(
            <section key={status}>
                <h4>Form ({status}):</h4>
                <Form status={status}/>
            </section>
        ))}
    </>
    );

}