import React from 'react'
import SideBar from '../../components/SideBar/SideBar'
import Title from '../../components/Title/Title'

export default function BeneficiariesEdit () {
  return (
    <div className="beneficiary-view-container">
      <SideBar user='Andrea Pereira' userType='Administrador'/>
      <div>
        <div className="maintitle-div">
          <Title text="Lista de Beneficiarias" />
        </div>
        <div>
          <p>Mismo formulario que crear pero con opción editar</p>
        </div>
      </div>
    </div>
  )
}
