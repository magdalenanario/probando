/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import SideBar from '../../components/SideBar/SideBar'
import Button from '../../components/Button/Button'
import Input from '../../components/Input/Input'
import Title from '../../components/Title/Title'
import Subtitle from '../../components/Subtitle/Subtitle'
import DatePicker from '../../components/DatePicker/DatePicker'

const AddWorkshops = () => {
  const [nombreTaller, setNombreTaller] = useState('')
  const [idTaller, setIdTaller] = useState('')
  const [tipoTaller, setTipoTaller] = useState('')
  const [temaTaller, setTemaTaller] = useState('')
  const [subtemaTaller, setSubtemaTaller] = useState('')
  const [nombreEncargada, setNombreEncargada] = useState('')
  const [fechaTaller, setFechaTaller] = useState('')
  const [evaluacionTaller, setEvaluacionTaller] = useState('')
  const [communityTaller, setCommunityTaller] = useState('')

  const options = [{ value: 'option1', label: 'Opción 1' }, { value: 'option2', label: 'Opción 2' }, { value: 'option3', label: 'Opción 3' }]

  const evaluationOptions = [
    { value: 'Excelente', label: 'Excelente' },
    { value: 'Bueno', label: 'Bueno' },
    { value: 'Regular', label: 'Regular' },
    { value: 'Malo', label: 'Malo' }
  ]

  const handleFormSubmit = (event) => {
    event.preventDefault()
    // Añadir aquí la lógica para enviar los datos del formulario al backend
  }

  return (
    <div className="workshops-view-container">
      <SideBar user="Andrea Pereira" userType="Administrador" />
      <form onSubmit={handleFormSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <Title text="Nuevo Taller" />
        <Subtitle type="primary" text="Información" />
        <div style={{ display: 'flex', gap: '2rem' }}>
          <div>
            <Input type="text" text={nombreTaller} onChange={(e) => setNombreTaller(e.target.value)} placeholder='placeholder Text' label='Nombre Taller' />
            <Input type="text" text={idTaller} onChange={(e) => setIdTaller(e.target.value)} placeholder='placeholder Text' label='ID' />
            <Input type="text" text={tipoTaller} onChange={(e) => setTipoTaller(e.target.value)} placeholder='placeholder Text' label='Tipo' />
            <Input type="text" text={temaTaller} onChange={(e) => setTemaTaller(e.target.value)} placeholder='placeholder Text' label='Tema' />
            <Input type="text" text={subtemaTaller} onChange={(e) => setSubtemaTaller(e.target.value)} placeholder='placeholder Text' label='Sub-Tema' />
          </div>
          <div>
            <Input type="text" text={nombreEncargada} onChange={(e) => setNombreEncargada(e.target.value)} placeholder='placeholder Text' label='Nombre Encargada' />
            <DatePicker label='Fecha Taller' value={fechaTaller} onChange={(date) => setFechaTaller(date)} />
            <Input type='select' text={communityTaller} onChange={(e) => setCommunityTaller(e.target.value)} placeholder='Selecciona una opción' label='Comunidad:'
              options={[
                { value: 'option1', label: 'Comunidad 1' },
                { value: 'option2', label: 'Comunidad 2' },
                { value: 'option3', label: 'Comunidad 3' }
              ]} />
            <Input type='select' text={evaluacionTaller} onChange={(e) => setEvaluacionTaller(e.target.value)} label='Evaluación:'
              options={[
                { value: 'excelente', label: 'Excelente' },
                { value: 'bueno', label: 'Bueno' },
                { value: 'regular', label: 'Regular' },
                { value: 'malo', label: 'Malo' }
              ]}
            />
            <Button text="Crear Taller" type="submit" />
          </div>
        </div>
      </form>
    </div>
  )
}

export default AddWorkshops
