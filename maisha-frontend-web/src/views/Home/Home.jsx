/* eslint-disable react/jsx-key */
import React, { useState } from 'react'
import Title from '../../components/Title/Title'
import img from '../../assets/logos/Logo_Maisha.png'
import Button from '../../components/Button/Button'
import { useNavigate } from 'react-router-dom'
import api from '../../services/api'
import './Home.css'

const billsOptions = [
  { value: 'Planilla gastos', path: '/bills/view' },
  { value: 'Agregar gasto', path: '/bills/add' },
  { value: 'Ver resumen', path: '/bills/resume' }
]

const workShopsOptions = [
  { value: 'Ver talleres', path: '/workshops/view' },
  { value: 'Crear Taller', path: '/workshops/add' },
  { value: 'Ver Beneficiarias', path: '/beneficiaries/view' },
  { value: 'Agregar Beneficiaria', path: '/beneficiaries/add' }
]

export default function Home () {
  const navigate = useNavigate()
  const [selectedOption, setSelectedOption] = useState('')

  const handleOptionClick = (option, path = '') => {
    setSelectedOption(option)
    if (path !== '') {
      navigate(path)
    }
  }

  async function handleLogOut (event) {
    console.log('logout token', localStorage.getItem('token'))
    // const token = localStorage.getItem('token')
    try {
      const response = await api.post('users/logout')
      console.log(response.data)
    } catch (error) {
      console.error(error)
    }
    navigate('/')
  }

  return (
    <div className='main-page-container'>
      <div className='main-page-header'>
        <img src={img} alt="Imagen de inicio de sesión" className='main-page-logo' />
        <div className='main-page-user-container'>
          {/* Despues hay que usar el usuario correcto cuando conectemos con back */}
          <h1 className='main-page-user-name'>Andrea Pereira</h1>
          <h2 className='main-page-user-type'>Administradora</h2>
          <Button text='Editar perfil' type='primary-outlined-small' onClick={() => navigate('/profile/edit')}></Button>
        </div>
        <Button text='Cerrar Sesión' type='primary-small' onClick={() => handleLogOut()}></Button>
      </div>
      <div className='main-page-base-container'>
        <Title text="¿A dónde quieres ir?" />
        <div className='main-page-base-options-container'>
          <div className='main-page-base-options'>
            <Button text='Gastos' type='secondary' onClick={() => handleOptionClick('bills')} isDisabled={selectedOption === 'bills'} />
            <Button text='Talleres' type='secondary' onClick={() => handleOptionClick('workshops')} isDisabled={selectedOption === 'workshops'} />
            <Button text='Capacitaciones' type='secondary' onClick={() => handleOptionClick('trainings', '/trainings')} isDisabled={selectedOption === 'trainings'} />
            <Button text='Dashboard kpis' type='secondary' onClick={() => handleOptionClick('dashboard', '/dashboard')} isDisabled={selectedOption === 'dashboard'} />
            <Button text='Usuarios' type='secondary' onClick={() => handleOptionClick('users', '/users')} isDisabled={selectedOption === 'users'} />
          </div>
          <div className='main-page-line'></div>
          {selectedOption === 'bills' &&
            <div className='main-page-sub-options-container'>
              {billsOptions.map((option) => (
                <button className='sub-option-button' onClick={() => handleOptionClick('bills', option.path)}>{option.value}</button>
              ))}
            </div>
          }
          {selectedOption === 'workshops' &&
            <div className='main-page-sub-options-container'>
              {workShopsOptions.map((option) => (
                <button className='sub-option-button' onClick={() => handleOptionClick('workshops', option.path)}>{option.value}</button>
              ))}
            </div>
          }
        </div>
      </div>

    </div>
  )
}
