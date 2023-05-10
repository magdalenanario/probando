import React, { useState, useEffect } from 'react'
import Input from '../../components/Input/Input'
import Button from '../Button/Button'
import { useNavigate } from 'react-router-dom'
// import removeTokenFromLocalStorage from '../../utils/removeTokenFromLocalStorage';
// import { removeTokenFromLocalStorage } from "../../utils/removeTokenFromLocalStorage";
import api from '../../services/api'

export default function FormLogin () {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    localStorage.removeItem('token')
  }, [])

  async function sendLogin (event) {
    event.preventDefault()
    try {
      console.log(username, password)
      const response = await api.post('auth/login', {
        username,
        password
      }
      )
      // response.object.header('Access-Control-Allow-Origin', '*')
      if (!response.data.error) {
        console.log('token', response.data.jwt)
        if (!localStorage.getItem('token')) {
          localStorage.setItem('token', response.data.jwt)
        }
        navigate('/home')
      }
    } catch (error) {
      window.alert(error)
    }
  }
  return (
      <form className="form-login" >
        <label>
          <Input
            type="text"
            label="Username"
            placeholder="Ingresa su nombre de usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label>
          <Input
            type="password"
            label="Contraseña"
            placeholder="Ingresa tu contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)} />
        </label>
      <Button text="Ingresar" type="submit" onClick={sendLogin} />
      </form>
  )
}
