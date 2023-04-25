import React,{useState} from "react"
import axios from "axios";

function CreateUser() {
    
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");

    function handleClick() {
        axios.post('http://192.168.1.192:8080/users', {
                name: name,
                username: username,
                email: email
            }).catch((error)=>console.error(error))
    }

    function handleName(name) {
        setName(name.target.value)
    }

    function handleUsername(username) {
        setUsername(username.target.value)

    }

    function handleEmail(email) {
        setEmail(email.target.value)

    }

    return(
            <form id="register" onSubmit={handleClick}>
                <label forhtml="name">Nom:</label>
                <input type="text" id="name" name="name" onChange={handleName}></input>
                <label forhtml="nickname">Nickname:</label>
                <input type="text" id="nickname" name="nickname" onChange={handleUsername}></input>
                <label forhtml="email">EMail:</label>
                <input type="email" id="name" name="name" onChange={handleEmail}></input>
                <button type="submit">Envia</button>
            </form>
    )
}

export default CreateUser