import React from 'react'
import './DashboardKpis.css'
import SideBar from '../../components/SideBar/SideBar'
import Title from '../../components/Title/Title'

export default function DashboardKpis () {
  return (
    <div className="dashboard-kpis-view-container">
      <SideBar user="Andrea Pereira" userType="Administrador"/>
      <div>
        <div className="maintitle-div">
          <Title text="Dashboard de Kpis" />
        </div>
        <div>
          <p>Vista del dashboard de kpis</p>
        </div>
      </div>
    </div>
  )
}
