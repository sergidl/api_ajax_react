import React from "react";
import axios from "axios";
import UserDetails from "./UserDetails.js";

export default class UserList extends React.Component {
    state = {
        users: [],
    };

    handleClick(id){
        UserDetails(id)
    }
    componentDidMount() {
        axios.get('http://192.168.1.192:8080/users').then(response => {
            const users = response.data.users;
            this.setState({ users });
        })
    };

    render() {
        return (
            <ul>
                {this.state.users.map(e => 
                    <li key={e.id} onClick={()=> this.handleClick(e.id)} value={e.id}>Nom: {e.name}; Nickname: {e.username}; Email: {e.email} </li>
                )}
            </ul>
        )
    };

}



// Crear un component anomenat UserList que faci el render d'una llista d'usuaris. Cada usuari ha de mostrar-se com un element de llista i ha d'incloure el nom, nickname i el correu electrònic de l'usuari.


// Fer servir el cicle de vida del componentDidMount per fer servir una sol·licitud GET a una API d'usuaris fent servir axios. L'URL de l'API serà donada per el professor durant la classe. Quan la sol·licitud es completi, actualitzar l'estat del component UserList amb les dades dels usuaris.