import {useState} from 'react';
export default function Redundant(){
    const [first,setFirst]=useState('');
    const [second, setSecond]=useState('');

    const fullname='Md '+first +' ' + second;
    function handlefirstName(e){
        setFirst(e.target.value);
    }
    function handlesecondName(e){
        setSecond(e.target.value);
    }

    return (
        <>
        <h1>let's check you in </h1>

        <label>
        Firt Name: {''}
        <input value={first} onChange={handlefirstName} />
        </label>

        <label>
            Last Name: {''}
            <input value={second} onChange={handlesecondName} />
        </label>


        <br />
        <br />
        <h3>Full name :{fullname}</h3>
        </>



    );
}