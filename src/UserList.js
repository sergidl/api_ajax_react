import { useEffect } from "react";
import axios from "axios";

function UserList() {
    let tmp =0
    console.log("1")
    useEffect(() => {
        axios.get('http://192.168.1.192:8080/users').then(response => {
            console.log(response)
            tmp=response.data.users.length
            console.log(tmp)
        })
        
        
        
        
    },[])
    
    return (
        <div>{tmp}</div>
    )
}

export default UserList




// Crear un component anomenat UserList que faci el render d'una llista d'usuaris. Cada usuari ha de mostrar-se com un element de llista i ha d'incloure el nom, nickname i el correu electrònic de l'usuari.


// Fer servir el cicle de vida del componentDidMount per fer servir una sol·licitud GET a una API d'usuaris fent servir axios. L'URL de l'API serà donada per el professor durant la classe. Quan la sol·licitud es completi, actualitzar l'estat del component UserList amb les dades dels usuaris.