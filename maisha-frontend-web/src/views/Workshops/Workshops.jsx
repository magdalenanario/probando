import React from 'react'
import SideBar from '../../components/SideBar/SideBar'
import WorkshopTable from '../../components/WorkshopTable/WorkshopTable'
import './Workshops.css'

export default function Workshops () {
  const workshops = [
    {
      id: 1,
      name: '-',
      type: 'Salud',
      topic: '-',
      date: '02/04/2023 - 15:05(KN)',
      responsible: 'Andrea Pereira'
    },
    {
      id: 2,
      name: '-',
      type: 'Sustentabilidad',
      topic: '-',
      date: '01/04/2023 - 15:50(CL)',
      responsible: 'Eloisa Undurraga'
    }
  ]

  return (
    <div className="workshops-view-container">
      <SideBar user='Andrea Pereira' userType='Administrador'/>
      <WorkshopTable workshops={workshops} />
    </div>
  )
}
