/* eslint-disable camelcase */
import React, { useState } from 'react'
import SideBar from '../../components/SideBar/SideBar'
import Button from '../../components/Button/Button'
import Input from '../../components/Input/Input'
import Title from '../../components/Title/Title'
import Subtitle from '../../components/Subtitle/Subtitle'
import DatePicker from '../../components/DatePicker/DatePicker'

const AddBeneficiary = () => {
  const [nameBeneficiary, setNameBeneficiary] = useState('')
  const [last_nameBeneficiary, setLastNameBeneficiary] = useState('')
  const [idBeneficiary, setIdBeneficiary] = useState('')
  const [date_of_birthBeneficiary, setDateOfBirthBeneficiary] = useState('')
  const [ageBeneficiary, setAgeBeneficiary] = useState('')
  const [education_levelBeneficiary, setEducationLevelBeneficiary] = useState('')
  const [nameEmergencyContact, setNameEmergencyContact] = useState('')
  const [numberEmergencyContact, setNumberEmergencyContact] = useState('')

  const handleFormSubmit = (event) => {
    event.preventDefault()
    // Añadir aquí la lógica para enviar los datos del formulario al backend
  }

  return (
    <div className="beneficiary-view-container">
      <SideBar user='Andrea Pereira' userType='Administrador'/>
      <div>
        <div className="maintitle-div">
          <Title text="Nueva Beneficiaria" />
        </div>
        <div></div>
        <div className="basic-beneficiary-info-div">
        <form onSubmit={handleFormSubmit} style={ { display: 'flex', gridTemplateColumns: 'repeat(2)' } }>
          <div className="basic-beneficiary-info-div-left">
          <Subtitle type ="primary" text="Datos Personales" />
            <Input type="text" text={nameBeneficiary} onChange={(e) => setNameBeneficiary(e.target.value)} placeholder='placeholder Text' label='Nombre' />
            <Input type="text" text={last_nameBeneficiary} onChange={(e) => setLastNameBeneficiary(e.target.value)} placeholder='placeholder Text' label='Apellido' />
            <Input type="text" text={idBeneficiary} onChange={(e) => setIdBeneficiary(e.target.value)} placeholder='placeholder Text' label='Id' />
            <Input type="text" text={nameEmergencyContact} onChange={(e) => setNameEmergencyContact(e.target.value)} placeholder='placeholder Text' label='Nombre Contacto de Emergencia' />
            <Input type="text" text={numberEmergencyContact} onChange={(e) => setNumberEmergencyContact(e.target.value)} placeholder='placeholder Text' label='Número Contacto de Emergencia' />
          </div>
          <div className="basic-beneficiary-info-div-right">
            <DatePicker text={date_of_birthBeneficiary} onChange={(e) => setDateOfBirthBeneficiary(e.target.value)} label='Fecha de Nacimiento' />
            <Input type="text" text={ageBeneficiary} onChange={(e) => setAgeBeneficiary(e.target.value)} placeholder='placeholder Text' label='Edad' />
            <Input type="text" text={education_levelBeneficiary} onChange={(e) => setEducationLevelBeneficiary(e.target.value)} placeholder='placeholder Text' label='Nivel de Escolaridad' />
            <Button type="submit" text="Guardar" />
          </div>
        </form>
        </div>
      </div>
    </div>
  )
}

export default AddBeneficiary
