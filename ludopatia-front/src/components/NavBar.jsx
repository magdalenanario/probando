import React from "react";
import { Link } from "react-router-dom";
import "../styles/style.css";
import home_image from "../imgs/casa_inicio.png"
import useAuth from "../hooks/useAuth";

function NavBar() {
    const { currentUser, handleUserLogout } = useAuth();
    return (
        <div className="navbar">
            <div className="navbar_izquierda">
                <img src={home_image} alt="Imagen"></img>
                <a>
                    <Link to="/">Ludopatia</Link>
                </a>
                <a>
                    <Link to="/team">Team</Link>
                </a>
                <a>
                    <Link to="/about">About</Link>
                </a>
                <a>
                    <Link to="/rules">Rules</Link>
                </a>
                <a>
                    <Link to="/questions">Questions</Link>
                </a>
                <a>
                    {currentUser ? (
                            <Link to="/editar_perfil" >Editar Perfil</Link>
                        ) : (
                            <Link to="/"></Link>
                        )}
                </a>
            </div>
            <div className="navbar_derecha">
                <a>
                    {currentUser ? (
                        <Link to="/" onClick={handleUserLogout}>Logout</Link>
                        // <button type="button" onClick={handleUserLogout}>Logout</button>
                    ) : (
                        <Link to="/">Log in</Link>
                    )}
                </a>
            </div>
        </div>
    );
};
export default NavBar;