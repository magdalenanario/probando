import "../styles/style.css";
import "../styles/fichas.css";
import "../styles/inicio_partida.css";
import { useNavigate, useLocation } from "react-router-dom";
import React, { useCallback, useEffect, useState } from "react";
import tablero from "../imgs/tablero.png"
import NavBar from '../components/NavBar'
import fichaRoja from '../imgs/ficha_roja.png'
import fichaAzul from '../imgs/ficha_azul.png'
import fichaVerde from '../imgs/ficha_verde.png'
import fichaAmarilla from '../imgs/ficha_amarilla.png'
import useAuth from "../hooks/useAuth";
import axios from "axios";


const StartGame = () => {
    const { currentUser, handleUserLogout } = useAuth();
    const [posicionesFichas, setPosicionesFichas] = useState();
    const [lista, setLista] = useState([]);
    const [resultado, setResultado] = useState();
    const [turno, setTurno] = useState(0)
    const [jugadorTurno, setJugadorTurno] = useState()
    const { state } = useLocation();
    const { id_partida, id_jugador } = state;
    const [players, setPlayers] = useState([]);
    const [checkedPre, setCheckedPre] = useState(false);
    const [checkedDuring, setCheckedDuring] = useState(false);
    const [greenPlayer, setGreenPlayer] = useState('');
    const [redPlayer, setRedPlayer] = useState('');
    const [bluePlayer, setBluePlayer] = useState('');
    const [yellowPlayer, setYellowPlayer] = useState('');
    const [cartaActiva, setCartaActiva] = useState('');
    const [asesinoDisable, setAsesinoDisable] = useState(true);
    const [libreDisable, setLibreDisable] = useState(true);
    const [x2Disable, setX2Disable] = useState(true);
    const [ladronDisable, setLadronDisable] = useState(true);
    const [eleccionDisable, setEleccionDisable] = useState(true);
    const [boostDisable, setBoostDisable] = useState(true);

    const configPartida = {
        method: "get",
        url: `${process.env.REACT_APP_API_URL}/partidas/${id_partida}`,
        headers: {
            Authorization: `Bearer ${currentUser?.access_token}`,
        },
    };

    useEffect(() => {
        axios(configPartida)
            .then((response) => {
                setPlayers(response.data.jugadores);
                setTurno(response.data.partida.turno);
                setJugadorTurno(response.data.partida.jugadores[response.data.partida.turno])
                let posiciones = []
                for (let i = 0; i < response.data.jugadores.length; i++) {
                    console.log(response.data.jugadores[i].fichas)
                    let posiciones_jugador = response.data.jugadores[i].fichas;
                    posiciones.push(posiciones_jugador)
                }
                setPosicionesFichas(posiciones);
                actualizar_posiciones(posicionesFichas);
            })
            .catch((error) => {
                console.log(error);
            });
    });


    function actualizar_posiciones(posiciones) {
        if (currentUser.id == jugadorTurno) {
            document.getElementById("nombre_turno").innerHTML = JSON.stringify("Clickee el dado", undefined, 2);
        }
        else {
            document.getElementById("nombre_turno").innerHTML = JSON.stringify(players[turno].username, undefined, 2);
            document.getElementById("respuestaDado").innerHTML = JSON.stringify("Espere su turno", undefined, 2);
        }
        console.log(posiciones.length);
        if (posiciones.length > 0) {
            for (let indexFicha = 0; indexFicha < posiciones.length; indexFicha++) {
                for (let subindex = 0; subindex < posiciones[indexFicha].length; subindex++) {
                    console.log(posiciones[indexFicha][subindex].position)
                    mover_ficha(subindex + 1, posiciones[indexFicha][subindex].position, posiciones[indexFicha][subindex].color)
                }
            }
        }
    };

    async function lanzar_dado() {
        const config = {
            method: 'POST',
            url: `${process.env.REACT_APP_API_URL}/users/lanzar/dado`,
            headers: {
                Authorization: `Bearer ${currentUser?.access_token}`,
            },
            data: { turno: turno, id_partida: id_partida, id_jugador: currentUser.id }
        };
        await axios(config)
            .then((respuesta) => {
                document.getElementById("respuestaDado").innerHTML = JSON.stringify(respuesta.data.num, undefined, 2);
                var dado = document.getElementById('dado');
                dado.style.backgroundImage = "url(../src/imgs/" + respuesta + ".png)";
                setResultado(respuesta.data.num);
            })
    };


    function mover_ficha(id, posicion, color) {
        var ficha = document.getElementById(`ficha_${id}_${color}`);
        console.log(color)
        if (color == "rojo") {
            if (posicion == 0) {
                ficha.style.left = pathR[5 + parseInt(id)].left;
                ficha.style.top = pathR[5 + parseInt(id)].top;
            }
            else if (posicion >= 57) {
                ficha.style.left = pathR[5].left;
                ficha.style.top = pathR[5].top;
            }
            else if (posicion > 51) {
                var indexR = parseInt(posicion) - 51
                ficha.style.left = pathR[indexR - 1].left;
                ficha.style.top = pathR[indexR - 1].top;
            }
            else {
                console.log("jiji")
                ficha.style.left = pathCommon[posicion - 1].left;
                ficha.style.top = pathCommon[posicion - 1].top;
            }
        }
        else if (color == "verde") {
            if (posicion == 0) {
                ficha.style.left = pathG[5 + parseInt(id)].left;
                ficha.style.top = pathG[5 + parseInt(id)].top;
            }
            else if (posicion >= 57) {
                ficha.style.left = pathG[5].left;
                ficha.style.top = pathG[5].top;
            }
            else if (posicion > 51) {
                var indexG = parseInt(posicion) - 51
                ficha.style.left = pathG[indexG - 1].left;
                ficha.style.top = pathG[indexG - 1].top;
            }
            else {
                if (parseInt(posicion) + 25 < 51) {
                    ficha.style.left = pathCommon[parseInt(posicion) + 25].left;
                    ficha.style.top = pathCommon[parseInt(posicion) + 25].top;
                }
                else {
                    ficha.style.left = pathCommon[parseInt(posicion) + 25 - 51].left;
                    ficha.style.top = pathCommon[parseInt(posicion) + 25 - 51].top;
                }
            }
        }
        else if (color == "azul") {
            if (posicion == 0) {
                ficha.style.left = pathB[5 + parseInt(id)].left;
                ficha.style.top = pathB[5 + parseInt(id)].top;
            }
            else if (posicion >= 57) {
                ficha.style.left = pathB[5].left;
                ficha.style.top = pathB[5].top;
            }
            else if (posicion > 51) {
                var indexB = parseInt(posicion) - 51
                ficha.style.left = pathB[indexB - 1].left;
                ficha.style.top = pathB[indexB - 1].top;
            }
            else {
                if (parseInt(posicion) + 39 - 1 < 51) {
                    ficha.style.left = pathCommon[parseInt(posicion) + 38].left;
                    ficha.style.top = pathCommon[parseInt(posicion) + 38].top;
                }
                else {
                    ficha.style.left = pathCommon[parseInt(posicion) + 38 - 51].left;
                    ficha.style.top = pathCommon[parseInt(posicion) + 38 - 51].top;
                }
            }
        }
        if (color == "amarillo") {
            if (posicion == 0) {
                ficha.style.left = pathY[5 + parseInt(id)].left;
                ficha.style.top = pathY[5 + parseInt(id)].top;
            }
            else if (posicion >= 57) {
                ficha.style.left = pathY[5].left;
                ficha.style.top = pathY[5].top;
            }
            else if (posicion > 51) {
                var indexY = parseInt(posicion) - 51
                ficha.style.left = pathY[indexY - 1].left;
                ficha.style.top = pathY[indexY - 1].top;
            }
            else {
                if (parseInt(posicion) + 12 < 51) {
                    console.log(parseInt(posicion) + 12);
                    ficha.style.left = pathCommon[parseInt(posicion) + 12].left;
                    ficha.style.top = pathCommon[parseInt(posicion) + 12].top;
                }
                else {
                    ficha.style.left = pathCommon[parseInt(posicion) + 12 - 51].left;
                    ficha.style.top = pathCommon[parseInt(posicion) + 12 - 51].top;
                }
            }
        }

    }

    useEffect(() => {
        for (let i = 0; i < players.length; i++) {
            if (players[i].fichas[0].color == "rojo") {
                let username = players[i].username
                setRedPlayer(username);
                document.getElementById("jugador_rojo").innerHTML = redPlayer
            }
            else if (players[i].fichas[0].color == "verde") {
                setGreenPlayer(players[i].username);
                document.getElementById("jugador_verde").innerHTML = greenPlayer
            }
            else if (players[i].fichas[0].color == "azul") {
                setBluePlayer(players[i].username);
                document.getElementById("jugador_azul").innerHTML = JSON.stringify(bluePlayer, undefined, 2);
            }
            else if (players[i].fichas[0].color == "amarillo") {
                setYellowPlayer(players[i].username);
                document.getElementById("jugador_amarillo").innerHTML = JSON.stringify(yellowPlayer, undefined, 2);
            };
        }
    }, [players]);

    // repartir cartas
    useEffect(() => {
        var id = currentUser.id;
        const config = {
            method: 'GET',
            url: `${process.env.REACT_APP_API_URL}/users/${id}/cartas`,
            headers: {
                Authorization: `Bearer ${currentUser?.access_token}`,
            },
        };
        axios(config)
            .then((respuesta) => {
                console.log("holaaaaaaaaaaaaaaaaaa")
                console.log(respuesta);
                var lista_carta = [];
                for (var i = 0; i < respuesta.data.length; i++) {
                    if (respuesta.data[i] == 1) {
                        lista_carta.push("ASESINO");
                        setAsesinoDisable(false);
                    }
                    else if (respuesta.data[i] == 2) {
                        lista_carta.push("LIBRE");
                        setLibreDisable(false);
                    }
                    else if (respuesta.data[i] == 3) {
                        lista_carta.push("X2");
                        setX2Disable(false);
                    }
                    else if (respuesta.data[i] == 4) {
                        lista_carta.push("LADRON");
                        setLadronDisable(false);
                    }
                    else if (respuesta.data[i] == 5) {
                        lista_carta.push("BOOST");
                        setBoostDisable(false);
                    }
                    else if (respuesta.data[i] == 6) {
                        lista_carta.push("ELECCION");
                        setEleccionDisable(false);
                    }
                }
                setLista(lista_carta);
            });
    }, []);

    // sacado de https://stackoverflow.com/questions/38806122/how-to-only-have-one-checkbox-checked-at-a-time
    function check_carta(id) {
        console.log("jiji")
        var checkbox = document.getElementById(id);
        var checkboxes = document.getElementsByClassName("cbox_carta");
        for (var i = 0; i < checkboxes.length; i++) {
            if (checkboxes[i].checked == true) {
                checkboxes[i].checked = false;
                setCheckedPre(false);
                setCheckedDuring(false);
            }
        }
        //set checked of clicked object
        if (checkbox.checked == false) {
            checkbox.checked = true;
            if (id == "cboxAsesino" || id == "cboxLibre" || id == "cboxBoost" || id == "cboxLadron") {
                setCartaActiva(id);
                setCheckedPre(true);
            }
            else {
                console.log("aquii")
                setCartaActiva(id);
                setCheckedDuring(true);
            }
        }
    }

    function aplicarCartaMove(index_ficha, color) {

        const datos = {
            id_jugador: currentUser.id,
            id_partida: id_partida,
            index_ficha: index_ficha - 1,
            color: color,
            carta: cartaActiva,
        }
        const configJugada = {
            method: 'POST',
            url: `${process.env.REACT_APP_API_URL}/users/usecarta`,
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${currentUser?.access_token}`,
            },
            data: JSON.stringify(datos),
        };
        axios(configJugada)
            .then(respuesta => {
                var checkbox = document.getElementById(cartaActiva);
                checkbox.checked = false;
                if (cartaActiva == "cboxAsesino") {
                    setAsesinoDisable(true);
                }
                else if (cartaActiva == "cboxLibre") {
                    setLibreDisable(true);
                }
                else if (cartaActiva == "cboxBoost") {
                    setBoostDisable(true);
                }
                else if (cartaActiva == "cboxLadron") {
                    setLadronDisable(true);
                }
                alert(respuesta.data.notificacion)
            })
    };


    async function partidaJugada(id_ficha, color) {
        if (players[turno].fichas[0].color != color) {
            return;
        }
        console.log(checkedDuring)
        if (checkedDuring) {
            var datos = {
                id_jugador: currentUser.id,
                id_partida: id_partida,
                numero: resultado,
                carta: cartaActiva,
                ficha: id_ficha,
            }
            var checkbox = document.getElementById(cartaActiva);
            checkbox.checked = false;
            if (cartaActiva == "cboxX2") {
                setX2Disable(true);
            }
        }
        else {
            var carta = "ninguna"
            var datos = {
                id_jugador: currentUser.id,
                id_partida: id_partida,
                numero: resultado,
                carta: null,
                ficha: id_ficha,
            }
        }
        const configJugada = {
            method: 'POST',
            url: `${process.env.REACT_APP_API_URL}/users/jugada`,
            headers: {
                Authorization: `Bearer ${currentUser?.access_token}`,
            },
            data: datos,
        };
        axios(configJugada)
            .then(respuesta => {
                console.log(respuesta.data.ficha.position)
                document.getElementById("respuestaDado").innerHTML = JSON.stringify(respuesta.data.dado_bloqueado, undefined, 2);
                setResultado(respuesta.data.dado_bloqueado)
            })
    };


    const pathCommon = [
        { left: '6.5%', top: '40%' }, //inicio rojo
        { left: '13%', top: '40%' },
        { left: '19.5%', top: '40%' },
        { left: '26%', top: '40%' },
        { left: '32.5%', top: '40%' },
        { left: '39%', top: '33%' },
        { left: '39%', top: '26.5%' },
        { left: '39%', top: '20%' },
        { left: '39%', top: '13.5%' },
        { left: '39%', top: '7%' },
        { left: '39%', top: '0.5%' },
        { left: '46%', top: '0.5%' }, // zona color amarrillo 11
        { left: '52.5%', top: '0.5%' },
        { left: '52.5%', top: '7%' }, //inicio amarillo 13
        { left: '52.5%', top: '13.5%' },
        { left: '52.5%', top: '20%' },
        { left: '52.5%', top: '26.5%' },
        { left: '52.5%', top: '33%' },
        { left: '59%', top: '39.5%' },
        { left: '65.5%', top: '39.5%' },
        { left: '72%', top: '39.5%' },
        { left: '78.5%', top: '39.5%' },
        { left: '85%', top: '39.5%' },
        { left: '92', top: '39.5%' },
        { left: '92%', top: '46%' }, // zona color verde 24
        { left: '92%', top: '52.5%' },
        { left: '85.5%', top: '52.5%' }, // verde inicio 26
        { left: '79%', top: '52.5%' },
        { left: '72.5%', top: '52.5%' },
        { left: '66%', top: '52.5%' },
        { left: '59.5%', top: '52.5%' },
        { left: '53%', top: '59%' },
        { left: '53%', top: '65.5%' },
        { left: '53%', top: '72%' },
        { left: '53%', top: '78.5%' },
        { left: '53%', top: '85%' },
        { left: '53%', top: '91.5%' },
        { left: '46.5%', top: '91.5%' },// zona color azul 37
        { left: '40%', top: '91.5%' },
        { left: '40%', top: '85%' }, //azul inicio 39
        { left: '40%', top: '78.5%' },
        { left: '40%', top: '72%' },
        { left: '40%', top: '66.5%' },
        { left: '40%', top: '60%' },
        { left: '33.5%', top: '53.5%' },
        { left: '27%', top: '53.5%' },
        { left: '20.5%', top: '53.5%' },
        { left: '14%', top: '53.5%' },
        { left: '7.5%', top: '53.5%' },
        { left: '1%', top: '53.5%' },
        { left: '1%', top: '47%' }, //zona color rojo 50
        { left: '1%', top: '40.5%' }]


    const pathR = [
        { left: '7.5%', top: '47.5%' },
        { left: '14%', top: '47.5%' },
        { left: '20.5%', top: '47.5%' },
        { left: '27%', top: '47.5%' },
        { left: '33.5%', top: '47.5%' },
        { left: '40%', top: '47.5%' },
        { left: '11.5%', top: '11.5%' }, //base ficha1
        { left: '22%', top: '11.5%' },//base ficha3
        { left: '11.5%', top: '22%' }, //base ficha2
        { left: '22%', top: '22%' }]//base ficha4]

    const pathG = [
        { left: '85.5%', top: '47.5%' },
        { left: '79%', top: '47.5%' },
        { left: '72.5%', top: '47.5%' },
        { left: '66%', top: '47.5%' },
        { left: '59.5%', top: '47.5%' },
        { left: '53%', top: '47.5%' },
        { left: '71.5%', top: '71.5%' }, //base ficha1
        { left: '82%', top: '71.5%' }, //base ficha2
        { left: '71.5%', top: '82%' },//base ficha3
        { left: '82%', top: '82%' }//base ficha4
    ]
    const pathY = [
        { left: '46%', top: '7%' },
        { left: '46%', top: '13.5%' },
        { left: '46%', top: '20%' },
        { left: '46%', top: '26.5%' },
        { left: '46%', top: '33%' },
        { left: '46%', top: '39.5%' },
        { left: '71.5%', top: '11.5%' }, //base ficha1
        { left: '82%', top: '11.5%' }, //base ficha2
        { left: '71.5%', top: '22%' },//base ficha3
        { left: '82%', top: '22%' }]//base ficha4
    const pathB = [
        { left: '46.5%', top: '85%' },
        { left: '46.5%', top: '78.5%' },
        { left: '46.5%', top: '72%' },
        { left: '46.5%', top: '65.5%' },
        { left: '46.5%', top: '59%' },
        { left: '46.5%', top: '52.5%' },
        { left: '11.5%', top: '71.5%' }, //base ficha1
        { left: '22%', top: '71.5%' }, //base ficha2
        { left: '11.5%', top: '82%' },//base ficha3
        { left: '22%', top: '82%' }//base ficha4
    ]

    return (
        <body>
            <NavBar />
            <section id="section-one">
                <div id="lanzar_dado">
                    <div id="dado" onClick={() => { lanzar_dado() }}>
                    </div>
                    <p>Resultado Dado:</p>
                    <p id="respuestaDado" onChange={(e) => console.log(e.target.value)}></p>
                </div>
                <div>
                    <h3>Turno:</h3>
                    <p id="nombre_turno"></p>
                </div>
                <div id="tablero">
                    <img id="imagen-tablero" src={tablero}></img>
                    <p id="jugador_rojo"></p>
                    <p id="jugador_verde"></p>
                    <p id="jugador_azul"></p>
                    <p id="jugador_amarillo"></p>
                    <img id="ficha_1_rojo" onClick={() => { checkedPre ? aplicarCartaMove(1, "rojo") : partidaJugada(1, "rojo") }} src={fichaRoja}></img>
                    <img id="ficha_2_rojo" onClick={() => { checkedPre ? aplicarCartaMove(2, "rojo") : partidaJugada(2, "rojo") }} src={fichaRoja}></img>
                    <img id="ficha_3_rojo" onClick={() => { checkedPre ? aplicarCartaMove(3, "rojo") : partidaJugada(3, "rojo") }} src={fichaRoja}></img>
                    <img id="ficha_4_rojo" onClick={() => { checkedPre ? aplicarCartaMove(4, "rojo") : partidaJugada(4, "rojo") }} src={fichaRoja}></img>
                    <img id="ficha_1_azul" onClick={() => { checkedPre ? aplicarCartaMove(1, "azul") : partidaJugada(1, "azul") }} src={fichaAzul}></img>
                    <img id="ficha_2_azul" onClick={() => { checkedPre ? aplicarCartaMove(2, "azul") : partidaJugada(2, "azul") }} src={fichaAzul}></img>
                    <img id="ficha_3_azul" onClick={() => { checkedPre ? aplicarCartaMove(3, "azul") : partidaJugada(3, "azul") }} src={fichaAzul}></img>
                    <img id="ficha_4_azul" onClick={() => { checkedPre ? aplicarCartaMove(4, "azul") : partidaJugada(4, "azul") }} src={fichaAzul}></img>
                    <img id="ficha_1_verde" onClick={() => { checkedPre ? aplicarCartaMove(1, "verde") : partidaJugada(1, "verde") }} src={fichaVerde}></img>
                    <img id="ficha_2_verde" onClick={() => { checkedPre ? aplicarCartaMove(2, "verde") : partidaJugada(2, "verde") }} src={fichaVerde}></img>
                    <img id="ficha_3_verde" onClick={() => { checkedPre ? aplicarCartaMove(3, "verde") : partidaJugada(3, "verde") }} src={fichaVerde}></img>
                    <img id="ficha_4_verde" onClick={() => { checkedPre ? aplicarCartaMove(4, "verde") : partidaJugada(4, "verde") }} src={fichaVerde}></img>
                    <img id="ficha_1_amarillo" onClick={() => { checkedPre ? aplicarCartaMove(1, "amarillo") : partidaJugada(1, "amarillo") }} src={fichaAmarilla}></img>
                    <img id="ficha_2_amarillo" onClick={() => { checkedPre ? aplicarCartaMove(2, "amarillo") : partidaJugada(2, "amarillo") }} src={fichaAmarilla}></img>
                    <img id="ficha_3_amarillo" onClick={() => { checkedPre ? aplicarCartaMove(3, "amarillo") : partidaJugada(3, "amarillo") }} src={fichaAmarilla}></img>
                    <img id="ficha_4_amarillo" onClick={() => { checkedPre ? aplicarCartaMove(4, "amarillo") : partidaJugada(4, "amarillo") }} src={fichaAmarilla}></img>
                </div>
                <div id="elecciones">Cartas:
                    {lista.map((carta) => (
                        <p>{carta}</p>
                    ))}
                    <p> Elija carta a utilizar</p>
                    <div id="elec_carta">
                        <label><input disabled={asesinoDisable} type="checkbox" id="cboxAsesino" className="cbox_carta" onClick={() => { check_carta("cboxAsesino") }}></input>
                            1. ASESINO</label><br></br>
                        <label><input disabled={libreDisable} type="checkbox" id="cboxLibre" className="cbox_carta" onClick={() => { check_carta("cboxLibre") }}></input>
                            2. LIBRE</label><br></br>
                        <label><input disabled={x2Disable} type="checkbox" id="cboxX2" className="cbox_carta" onClick={() => { check_carta("cboxX2") }}></input>
                            3. X2</label><br></br>
                        <label><input disabled={boostDisable} type="checkbox" id="cboxBoost" className="cbox_carta" onClick={() => { check_carta("cboxBoost") }}></input>
                            4. BOOST</label><br></br>
                        <label><input disabled={ladronDisable} type="checkbox" id="cboxLadron" className="cbox_carta" onClick={() => { check_carta("cboxLadron") }}></input>
                            5. LADRON</label><br></br>
                    </div>
                    <p>Si elije una carta "ELECCION", indique que numero quiere elegir:</p>
                    <input type="text" placeholder="numero_eleccion" id="numero_eleccion"></input>
                    <p>Si elije una carta "LADRON", indique el id del jugador a quien le quiere robar:</p>
                    <input type="text" placeholder="id_robar" id="id_robar"></input>
                </div>
            </section>
        </body>)
};
export default StartGame;