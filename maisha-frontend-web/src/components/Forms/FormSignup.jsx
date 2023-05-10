/* eslint-disable object-shorthand */
import React, { useState } from 'react'
import Input from '../../components/Input/Input'
import Button from '../Button/Button'
import { useNavigate } from 'react-router-dom'
import api from '../../services/api'

export default function FormSignup () {
  const [username, setUsername] = useState(null)
  const [password, setPassword] = useState(null)

  const navigate = useNavigate()

  async function sendSignup (event) {
    event.preventDefault()

    try {
      const response = await api.post('auth/signup', {
        username: username,
        password: password
      })
      if (!response.data.error) {
        navigate('/home')
      }
    } catch (error) {
      window.alert('No se pudo realizar el registro.')
    }
  }

  return (
      <form className="form-login">
        <label>
          <Input
            type="text"
            label="username"
            placeholder="Ingresa tu nombre de usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label>
          <Input
            type="text"
            label="Contraseña"
            placeholder="Ingresa tu contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)} />
        </label>
        <Button text="Crear Usuario" type="submit" onClick = {sendSignup} />
      </form>
  )
}
