import React, { useState } from 'react'
import SideBar from '../../components/SideBar/SideBar'
import Button from '../../components/Button/Button'
import Input from '../../components/Input/Input'
import Title from '../../components/Title/Title'
import DatePicker from '../../components/DatePicker/DatePicker'
import api from '../../services/api'

export default function AddBills () {
  // const [bill, setBill] = useState([{ Descripcion: '', Monto: '', fechaGasto: '', Comprobante: '', ComprobanteAdjuntado: '' }])
  const [Descripcion, setDescripcion] = useState('')
  const [Monto, setMonto] = useState('')
  const [fechaGasto, setFechaGasto] = useState('')
  const [Comprobante, setComprobante] = useState('')
  const [ComprobanteAdjuntado, setComprobanteAdjuntado] = useState('')

  const handleFormSubmit = (event) => {
    event.preventDefault()
    try {
      const response = api.post('bills/', {
        Descripcion,
        Monto,
        fechaGasto,
        Comprobante,
        ComprobanteAdjuntado
      })
      console.log(response)
    } catch (error) {
      window.alert(error)
    }
    // Aquí va la lógica para enviar los datos del formulario al backend
  }

  return (
    <div className="bills-view-container">
      <SideBar user="Andrea Pereira" userType="Administrador" />
      <form className="form-bill" onSubmit={handleFormSubmit}>
        <Title text="Nuevo Gasto" />
        <div style={{ display: 'flex', gap: '2rem' }}>
          <div>
            <Input type="text" text={Descripcion} onChange={(e) => setDescripcion(e.target.value)} placeholder='placeholder Text' label='Descripción' />
            <Input type="text" text={Monto} onChange={(e) => setMonto(e.target.value)} placeholder='placeholder Text' label='Monto' />
            <DatePicker label='Fecha' value={fechaGasto} onChange={(date) => setFechaGasto(date)} />
          </div>
          <div>
            <Input type="text" text={Comprobante} onChange={(e) => setComprobante(e.target.value)} placeholder='placeholder Text' label='Comprobante' />
            <Input type="text" text={ComprobanteAdjuntado} onChange={(e) => setComprobanteAdjuntado(e.target.value)} placeholder='placeholder Text' label='Adjuntado' />
          </div>
          <div style={{ marginTop: '25px' }}>
            <Button text="Agregar Gasto" type="primary-small" />
          </div>
        </div>
      </form>
    </div>

  )
};
