import "../styles/style.css";
import NavBar from '../components/NavBar'
import useAuth from "../hooks/useAuth";
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const EditProfile = () => {
    const { currentUser, handleUserLogout } = useAuth();
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState('');
    const [editName, setEditName] = useState('');
    const [editLastname, setEditLastname] = useState('');
    const [editUsername, setEditUsername] = useState('');
    const [editMail, setEditMail] = useState('');


    const edit_user = async function (event) {
        event.preventDefault();

        const data = JSON.stringify({
            id: currentUser.id,
            name: editName,
            lastname: editLastname,
            username: editUsername,
            mail: editMail,
        });

        const config = {
            method: 'POST',
            url: `${process.env.REACT_APP_API_URL}/users/update`,
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${currentUser?.access_token}`,
            },
            data: data,
        };

        await axios(config)
            .then(response => {
                alert("Successfully Updated!");
                navigate('/logged');
            })
            .catch(error => {
                setErrorMessage(error.response.data);
            });
    };
    
    
    const delete_user = async function (event) {
        event.preventDefault();
        var id = currentUser.id;

        const data = JSON.stringify({
            id: currentUser.id,
        });

        const config = {
            method: 'DELETE',
            url: `${process.env.REACT_APP_API_URL}/users/${id}`,
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${currentUser?.access_token}`,
            },
            data: data,
        };

        await axios(config)
            .then(response => {
                alert("Se ha eliminado correctamente el usuario")
                handleUserLogout();
            })
            .catch(error => {
                setErrorMessage(error.response.data);
            });
    };



    return (
        <body>
            <NavBar />
            <section id="section-one">
                <div id="inicio-login">
                    <div className="form">
                        <h2>Editar Perfil</h2>
                        <div className="item">
                            <i></i>
                            <input
                                type="text"
                                placeholder= {"Nombre: " + currentUser.name}
                                id="name"
                                name="name"
                                onChange={(e) => setEditName(e.target.value)} />
                        </div>
                        <div className="item">
                            <i></i>
                            <input
                                type="text"
                                placeholder= {"Apellido: " + currentUser.lastname}
                                id="lastname"
                                name="lastname"
                                onChange={(e) => setEditLastname(e.target.value)} />
                        </div>
                        <div className="item">
                            <i></i>
                            <input
                                type="text"
                                placeholder= {"Username: " + currentUser.username}
                                id="username"
                                name="username"
                                onChange={(e) => setEditUsername(e.target.value)} />
                        </div>
                        <div className="item">
                            <i></i>
                            <input
                                type="text"
                                placeholder= {"Mail: " + currentUser.mail}
                                id="mail"
                                name="mail"
                                onChange={(e) => setEditMail(e.target.value)} />
                        </div>
                        <button
                            type="button"
                            className="boton"
                            id="boton_editar"
                            onClick={edit_user}>Editar Perfil</button>
                        <br></br>
                        <br></br>
                        <button
                            type="button"
                            className="boton"
                            id="boton_eliminar"
                            onClick={delete_user}>Eliminar Perfil</button>
                    </div>
                </div>
            </section>

        </body >)
}

export default EditProfile;