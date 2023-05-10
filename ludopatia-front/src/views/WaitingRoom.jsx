import { useEffect, useState } from "react";
import axios from "axios";
import useAuth from "../hooks/useAuth";
import { useNavigate, useLocation } from 'react-router-dom';
import "../styles/waiting_room.css";
import NavBar from '../components/NavBar'

const WaitingRoom = () => {
    const [players, setPlayers] = useState([]);
    const { currentUser } = useAuth();
    const { state } = useLocation();
    const { id_partida, id_jugador } = state;
    console.log(state);
    const navigate = useNavigate();

    const config = {
        method: "get",
        url: `${process.env.REACT_APP_API_URL}/partidas/${id_partida}`,
        headers: {
            Authorization: `Bearer ${currentUser?.access_token}`,
        },
    };

    useEffect(() => {
        axios(config)
            .then((response) => {
                setPlayers(response.data.jugadores);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    useEffect(() => {
        console.log(players.length)
        if (players.length == 4) {
            navigate('/game', { state: { id_partida: id_partida, id_jugador: id_jugador } });
        }
    }, [players]);


    return (
        <body>
            <NavBar />
            <div>
                <div>
                    <h2>Waiting Room</h2>
                </div>
                <h3>P L A Y E R S</h3>
                <ul id="lista2">
                    {players.map((player) => (
                        <li id="no-waiting">{player.username}</li>
                    ))}
                    {1 - players.length > 0 &&
                        [...Array(4 - players.length)].map(() => (
                            <li id="waiting">Waiting for player</li>
                        ))}
                    <p>Faltan {4 - players.length} jugador/es para iniciar la partida...</p>
                    <p>Invita a tus amigos! El ID de la partida es {id_partida}</p>
                </ul>

            </div>
        </body>
    );
}

export default WaitingRoom;