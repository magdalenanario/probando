import "../styles/style.css";
import NavBar from '../components/NavBar'
import useAuth from "../hooks/useAuth";
import { useState } from 'react';
import axios from 'axios';
import tablero from "../imgs/tablero_inicio.jpg"
import { useNavigate } from "react-router-dom";

const LoggedSession = () => {
    const [colorCreate, setColorCreate] = useState('');
    const [colorJoin, setColorJoin] = useState('');
    const { currentUser, handleUserLogout } = useAuth();
    const [errorMessage, setErrorMessage] = useState('');
    const [gameIdJoin, setGameIdJoin] = useState('');
    const navigate = useNavigate();


    const handleSubmitCreate = async function handleSubmitCreate(event) {
        event.preventDefault();

        const data = JSON.stringify({
            cartas: [1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5],
            id_usuario: currentUser.id,
            turno: 0,
            cartas_repartidas: false,
        });

        const config = {
            method: 'POST',
            url: `${process.env.REACT_APP_API_URL}/partidas`,
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${currentUser?.access_token}`,
            },
            data: data,
        };
        console.log(config);

        await axios(config)
            .then(response => {
                alert("Successfully Created!");
                navigate('/waiting', { state: { id_partida: response.data.id, id_jugador: currentUser.id } });
            })
            .catch(error => {
                setErrorMessage(error.response.data);
            });
    }

    console.log(gameIdJoin)
    const handleSubmitJoin = async function (event) {
        event.preventDefault();

        const dataJoin = JSON.stringify({
            cartas: [1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5],
            id_usuario: currentUser.id,
            id_partida: gameIdJoin,
        });

        const config = {
            method: "POST",
            url: `${process.env.REACT_APP_API_URL}/users/unirse`,
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${currentUser?.access_token} `,
            },
            data: dataJoin,
        };


        await axios(config)
            .then(response => {
                alert("Successfully joined!");
                navigate('/waiting', { state: { id_partida: response.data.id, id_jugador: currentUser.id } });
            })
            .catch(error => {
                setErrorMessage(error.response.data);
                // alert(error.response.data);
            });
    }


    return (
        <body>
            <NavBar />
            <section id="section-one">
                <div id="tablero_inicio">
                    <img src={tablero}></img>
                    <div className="centrado">Ludopatía</div>
                </div>
                <div>
                    <div>
                        <form id="create-form">
                            <button
                                type="button"
                                className="boton"
                                id="boton_partida"
                                onClick={handleSubmitCreate}>Create
                                Game</button>
                        </form>
                    </div>

                    <div>
                        <form id="join-form">
                            <label>ID Game</label>
                            <input
                                type="text"
                                placeholder="ID Game"
                                id="id_partida"
                                name="name"
                                onChange={(e) => setGameIdJoin(e.target.value)} />
                            <button
                                type="button"
                                className="boton"
                                id="boton_partida"
                                onClick={handleSubmitJoin}>Join
                                Game</button>
                            <p>{errorMessage}</p>
                        </form>
                    </div>
                </div>
            </section>

        </body>)
};
export default LoggedSession;

