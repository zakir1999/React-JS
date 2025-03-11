import { useState } from "react";
import Chat from "./Chat";
import ContactList from "./ContactList";

export default function Resettingstate(){
    const [to,setTo]=useState(contact[0]);
    return(

        <div>
            <ContactList contacts={contact}
            selectedContact={to}
            onSelect={contact=>setTo(contact)}
        />
        <Chat key={to.id} contact={to}/>

        </div>

    );
}

const contact=[{id:0,name:'Zakir Hossen',email:'m.zakirhossen99@gmail.com'},
    {id:1,name:'Shamim',email:'s.mshamim99@gmail.com'},
    {
        id:2,
        name:'Nibir vau',
        email:'nibirvau@gmail.com',
    }
]