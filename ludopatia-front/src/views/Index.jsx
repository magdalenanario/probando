import "../styles/style.css";
import { useNavigate } from "react-router-dom";
import React, { useCallback, useEffect, useState } from "react";
import tablero from "../imgs/tablero_inicio.jpg"
import NavBar from '../components/NavBar'

const Index = () => {
    const navigate = useNavigate();
    console.log("holi");
    return (
        <body>
            <NavBar />
            <section id="section-one">
                <div id="tablero_inicio">
                    <img src={tablero}></img>
                    <div className="centrado">Ludopatía</div>
                </div>
                    {/* <div className="form">
                        <h2>Log in</h2>
                        <div className="item">
                            <i></i>
                            <input type="text" placeholder="username" name="username" id="username"></input>
                        </div>
                        <div className="item">
                            <i></i>
                            <input type="password" placeholder="password" name="password" id="password"></input>
                        </div>
                        <div className="item">
                            <button className="boton">Log in</button>
                        </div>
                        <p>Olvidé la contraseña</p>
                        <hr></hr>
                        <p>¿No tienes cuenta?</p>
                        <button className="boton" onClick={() => { navigate('/Register') }}>Sign up</button>
                    </div> */}
            </section>

        </body >)
};
export default Index;