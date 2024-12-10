import { useState } from "react";




const InputContainer = () => {
    const [vorname, setName] = useState("");
    const [nachname, setNachname] = useState("")
    const [email, setEmail] = useState("")

    return ( 
        <div className="input__container">
            <input onChange={(event) => setName(event?.target.value)} value={vorname} type="text" placeholder="Vorname" />
            <input onChange={(event) => setNachname(event?.target.value)} value={nachname}  type="text" placeholder="Nachname"/>
            <input onChange={(event) => setEmail(event?.target.value)} value={email}  type="text" placeholder="Email"/>

            <p>Vorname: {vorname}</p>
            <p>Nachname: {nachname}</p>
            <p>Email: {email}</p>
        </div>

    );
}

export default InputContainer;