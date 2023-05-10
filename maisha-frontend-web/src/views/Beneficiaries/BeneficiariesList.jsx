import React from 'react'
import SideBar from '../../components/SideBar/SideBar'
import Title from '../../components/Title/Title'

export default function BeneficiariesList () {
  return (
    <div className="beneficiary-view-container">
      <SideBar user='Andrea Pereira' userType='Administrador'/>
      <div>
        <div className="maintitle-div">
          <Title text="Lista de Beneficiarias" />
        </div>
        <div>
          <p>Agregar lista de beneficiarias</p>
        </div>
      </div>
    </div>
  )
}
