import React from 'react'
import SideBar from '../../components/SideBar/SideBar'
import BillsTable from '../../components/BillsTable/BillsTable'
import './Bills.css'

export default function BillsView () {
  const bills = [
    {
      id: 1,
      descripcion: 'Compra fruta',
      monto: '3.500',
      date: '02/04/2023 - 15:50(KN)',
      comprobante: 'Si'
    },
    {
      id: 2,
      descripcion: 'Útiles',
      monto: '2.200',
      date: '28/03/2023 - 11:30(KN)',
      comprobante: 'No'
    },
    {
      id: 3,
      descripcion: 'Transporte',
      monto: '14.000',
      date: '07/04/2023 - 8:35(KN)',
      comprobante: 'Si'
    }
  ]

  return (
    <div className="bills-view-container">
      <SideBar user="Andrea Pereira" userType="Administrador" />
      <BillsTable bills={bills} />
    </div>
  )
};
