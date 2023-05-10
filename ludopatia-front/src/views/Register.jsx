import "../styles/style.css";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from '../components/NavBar'
import axios from 'axios';

async function createUser(name, lastname, username, mail, password) {
    const data = JSON.stringify({
        name: name,
        lastname: lastname,
        username: username,
        mail: mail,
        password: password
    });

    const config = {
        method: "POST",
        url: `${process.env.REACT_APP_API_URL}/users`,
        headers: {
            "Content-Type": "application/json",
        },
        data: data,
    };

    return await axios(config)
        .then(function (response) {
            // console.log(response.data)
            return [true, response.data.id];
        })
        .catch(function (error) {
            return [false, error.response.data];
        });
}

const Register = () => {

    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [mail, setEmail] = useState('');
    const navigate = useNavigate();
    const [errors, setErrors] = useState([]);

    return (
        <body>
            <NavBar />
            <section id="section-one">
                <div id="inicio-login">
                    <div className="form">
                        <h2>Sign up</h2>
                        <div className="item">
                            <i></i>
                            <input type="text" placeholder="name" id="newname" name="name" onChange={(event) => setName(event.target.value)}></input>
                        </div>
                        <div className="item">
                            <i></i>
                            <input type="text" placeholder="last name" id="lastname" name="lastname" onChange={(event) => setLastname(event.target.value)}></input>
                        </div>
                        <div className="item">
                            <i></i>
                            <input type="text" placeholder="username" id="username" name="username" onChange={(event) => setUsername(event.target.value)}></input>
                        </div>
                        <div className="item">
                            <i></i>
                            <input type="text" placeholder="mail" id="mail" name="mail" onChange={(event) => setEmail(event.target.value)}></input>
                        </div>
                        <div className="item">
                            <i></i>
                            <input type="password" placeholder="password" id="password" name="password" onChange={(event) => setPassword(event.target.value)}></input>
                        </div>
                        <button
                            type="button"
                            class="boton"
                            id="boton_registrar"
                            onClick={async () => {
                                const user = await createUser(name, lastname, username, mail, password); if (user[0]) { navigate("/"); } else {
                                    setErrors(user[1]);
                                    console.log(user);
                                }
                            }} >Sign up
                        </button>
                        {errors.map((error) => (
                            <p>{error}</p>
                        ))}

                    </div>
                </div>
            </section>
        </body >)
};
export default Register;