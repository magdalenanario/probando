import React, { useState } from 'react'
import TopBar from '../../components/TopBar/TopBar'
import SideBar from '../../components/SideBar/SideBar'
import Title from '../../components/Title/Title'
import Button from '../../components/Button/Button'
import UsersList from './UsersList'
import UsersCreate from './UsersCreate'
import UsersEdit from './UsersEdit'
import './Users.css'

const users = [
  {
    id: 1,
    name: 'Rodrigo Villalobos',
    type: 'Voluntario',
    age: '26',
    phone: '+56993457820',
    status: 'Activo'
  },
  {
    id: 2,
    name: 'Andrea Pereira',
    type: 'Administrador',
    age: '38',
    phone: '+56913423820',
    status: 'Activo'
  },
  {
    id: 3,
    name: 'Pedro Martinez',
    type: 'coordinador',
    age: '32',
    phone: '+56911111111',
    status: 'Activo'
  }
]

export default function Users () {
  const [selectedOption, setSelectedOption] = useState('list')

  const handleOptionClick = (option) => {
    setSelectedOption(option)
  }
  return (
    <div className='users-page-container'>
      <SideBar user='Andrea Pereira' userType='Administrador'></SideBar>
      <div className='users-container'>
        <TopBar></TopBar>
        <Title text='Usuarios'/>
        <div className='users-content-container'>
          <div className='users-options-container'>
            <Button type='secondary-small' text='Lista Usuarios' onClick={() => handleOptionClick('list')} isDisabled={selectedOption === 'list'}></Button>
            <Button type='secondary-small' text='Editar Usuarios' onClick={() => handleOptionClick('edit')} isDisabled={selectedOption === 'edit'}></Button>
            <Button type='secondary-small' text='Agregar Usuario' onClick={() => handleOptionClick('add')} isDisabled={selectedOption === 'add'}></Button>
          </div>
          {selectedOption === 'list' && <UsersList users={users}></UsersList>}
          {selectedOption === 'edit' && <UsersEdit></UsersEdit>}
          {selectedOption === 'add' && <UsersCreate></UsersCreate>}
        </div>
      </div>
    </div>
  )
};
