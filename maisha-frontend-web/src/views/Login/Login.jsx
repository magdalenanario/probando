import React, { useState } from 'react'
import Title from '../../components/Title/Title'
import Button from '../../components/Button/Button'
import FormLogin from '../../components/Forms/FormLogin'
import FormSignup from '../../components/Forms/FormSignup'
import img from '../../assets/logos/Logo_Maisha.png'
// import api from '../../services/api';
import './Login.css'

export default function LoginScreen () {
  let [authMode, setAuthMode] = useState('signin')
  // const navigate = useNavigate();
  const [disabledSignup, setDisabledSignup] = useState(false)
  const [disabledSignin, setDisabledSignin] = useState(true)

  const changeAuthModeToSignup = () => {
    setAuthMode(authMode = 'signup')
    setDisabledSignin(false)
    setDisabledSignup(true)

    console.log('authMode', authMode)

    console.log('disabled_signup', disabledSignup)
    console.log('disabled_signin', disabledSignin)
  }
  const changeAuthModeToSignin = () => {
    setAuthMode(authMode = 'signin')
    setDisabledSignin(true)
    setDisabledSignup(false)
    console.log('authMode', authMode)
  }

  return (
      <div className="login-screen">
        <div className="image-container">
          <img src={img} alt="Imagen de inicio de sesión" />
        </div>
        <div className="form-container">
          <Title text="Bienvenido" initialPage={true}/>
          <div className="section-buttons-container">
            <Button type="secondary" text="Registrarse" onClick={changeAuthModeToSignup} isDisabled={disabledSignup}/>
            <Button type="secondary" text="Iniciar sesión" onClick={changeAuthModeToSignin} isDisabled={disabledSignin}/>
          </div>
          {authMode === 'signin' ? <FormLogin /> : <FormSignup />}
        </div>
      </div>
  )
}
