import "../styles/style.css";
import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const initialValues = {
    username: '',
    password: '',
};

export default function Login() {
    const navigate = useNavigate();

    const [values, setValues] = useState(initialValues);
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const { currentUser, handleUserLogin } = useAuth();

    const handleSubmit = async function handleSubmit(event) {
        setLoading(true);
        event.preventDefault();
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(values),
        };
        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/session`, requestOptions);
            if (!response.ok) {
                const error = await response.text();
                throw new Error(error);
            }
            const user = await response.json();
            handleUserLogin(user);
        } catch (error) {
            setErrorMessage(error.message);
        } finally {
            setLoading(false);
        }
    };

    const handleChange = function handleChange(event) {
        setValues((preValues) => ({
            ...preValues,
            [event.target.name]: event.target.value,
        }));
    };

    if (loading) {
        return <h2>Loading...</h2>
    }

    if (currentUser) return <Navigate to="/logged" />;

    return (
        <div>
            {/* <Link to="/">Go Back</Link> */}
            <h2>Log in</h2>
            <form onSubmit={handleSubmit}>
                <div className="item">
                    {/* <label htmlFor="email">Email:</label> */}
                    <input
                        type="text"
                        id="username"
                        name="username"
                        placeholder="username"
                        value={values.username}
                        onChange={handleChange}
                    />
                </div>
                <div className="item">
                    {/* <label htmlFor="password">Password:</label> */}
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="password"
                        value={values.password}
                        onChange={handleChange}
                    />
                </div>
                <div className="item">
                    <button className="boton" type="submit" disabled={!(values.username && values.password)}>Login</button>
                </div>
                <p>Olvidé la contraseña<a href=""></a></p>
                <hr></hr>
                <p>¿No tienes cuenta?</p>
                <button className="boton" onClick={() => { navigate('./register') }}>Sign up</button>
                {/* <Link to="./register">registarse</Link> */}
            </form>
            <p>{errorMessage}</p>
        </div>
    );
}