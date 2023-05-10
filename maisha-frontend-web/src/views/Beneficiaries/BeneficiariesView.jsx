import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Title from '../../components/Title/Title'
import Subtitle from '../../components/Subtitle/Subtitle'
import Button from '../../components/Button/Button'
import './Beneficiaries.css'
import BeneficiaryWorkshops from './SecondaryViews/Workshops'
import BeneficiaryMedicalData from './SecondaryViews/MedicalData'
import BeneficiaryFollowUp from './SecondaryViews/FollowUp'
import BeneficiaryVisits from './SecondaryViews/Visits'
import BeneficiaryKpis from './SecondaryViews/Kpis'
import SideBar from '../../components/SideBar/SideBar'
import api from '../../services/api'

export default function BeneficiaryView () {
  const token = localStorage.getItem('token')
  const [beneficiary, setBeneficiary] = useState({})
  let secondaryView = null
  // let secondaryViewComponent = null;
  const [secondaryViewComponent, setSecondaryViewComponent] = useState(null)
  // const [loading, setLoading] = useState(true);
  // const [setError] = useState(null)
  const { id } = useParams()
  const [disabledWorkshops, setDisabledWorkshops] = useState(false)
  const [disabledMedicalData, setDisabledMedicalData] = useState(false)
  const [disabledFollowUp, setDisabledFollowUp] = useState(false)
  const [disabledVisits, setDisabledVisits] = useState(false)
  const [disabledKpis, setDisabledKpis] = useState(false)
  // const navigate = useNavigate();

  const fetchBeneficiary = async () => {
    try {
      console.log('id', id)
      console.log('token', token)
      // eslint-disable-next-line key-spacing
      const response = await api.get(`beneficiaries/${id}/`)
      console.log('response', response)
      if (response.status === 200) {
        setBeneficiary(response.data)
        console.log('response data', response.data)
        console.log('beneficiary', beneficiary)
      }
      // const response = await fetch(`http://localhost:8000/api/beneficiaries/${id}/`);
      // const data = await response.json();
      // setBeneficiary(beneficiaryMock)
    } catch (error) {
      console.log(error)
      // setError(error)
    }
  }

  useEffect(() => {
    fetchBeneficiary()
  }, {})

  // funcion que se encarga de cambiar el estado de la variable secondaryView

  async function getSecondaryView (number) {
    console.log('number', number)
    secondaryView = number
    console.log('secondaryView', secondaryView)

    if (secondaryView === 1) {
      console.log('case 1')
      setDisabledWorkshops(true)
      setDisabledMedicalData(false)
      setDisabledFollowUp(false)
      setDisabledVisits(false)
      setDisabledKpis(false)
      setSecondaryViewComponent(<BeneficiaryWorkshops />)
    } else if (secondaryView === 2) {
      console.log('case 2')
      setDisabledMedicalData(true)
      setDisabledWorkshops(false)
      setDisabledFollowUp(false)
      setDisabledVisits(false)
      setDisabledKpis(false)
      setSecondaryViewComponent(<BeneficiaryMedicalData />)
    } else if (secondaryView === 3) {
      console.log('case 3')
      setDisabledWorkshops(false)
      setDisabledMedicalData(false)
      setDisabledFollowUp(true)
      setDisabledVisits(false)
      setDisabledKpis(false)
      setSecondaryViewComponent(<BeneficiaryFollowUp />)
    } else if (secondaryView === 4) {
      console.log('case 4')
      setDisabledWorkshops(false)
      setDisabledMedicalData(false)
      setDisabledFollowUp(false)
      setDisabledVisits(true)
      setDisabledKpis(false)
      setSecondaryViewComponent(<BeneficiaryVisits />)
    } else if (secondaryView === 5) {
      console.log('case 5')
      setDisabledWorkshops(false)
      setDisabledMedicalData(false)
      setDisabledFollowUp(false)
      setDisabledVisits(false)
      setDisabledKpis(true)
      setSecondaryViewComponent(<BeneficiaryKpis />)
    } else {
      setDisabledWorkshops(false)
      setDisabledMedicalData(false)
      setDisabledFollowUp(false)
      setDisabledVisits(false)
      setDisabledKpis(false)
      console.log('default')
      setSecondaryViewComponent(null)
    }
  }

  return (
    <div className='beneficiary-view-container'>
      <SideBar user='Andrea Pereira' userType='Administrador'/>
      <div>
        <div className="maintitle-div">
        {/*  Esto tiene que ser un componente */}
          <Title text= {beneficiary.firstName} />
          <Title text={beneficiary.lastName} />
        </div>
        <div className="basic-beneficiary-info-div">
          <div className="basic-beneficiary-info-div-left">
            <Subtitle type ="primary" text="Datos Personales" />
            <Subtitle type ="secondary" text="Nombre" />
            <p className ="primaryview-data"> {beneficiary.firstName}</p>
            <Subtitle type ="secondary" text="Apellido" />
            <p className ="primaryview-data" > {beneficiary.lastName}</p>
            <Subtitle type ="secondary" text="Fecha de Nacimiento" />
            <p className ="primaryview-data">{beneficiary.birthday}</p>
            <Subtitle type ="secondary" text="Edad" />
            <p className ="primaryview-data">{beneficiary.age}</p>
            <Subtitle type ="secondary" text="Nivel de Escolaridad" />
            <p className ="primaryview-data"> {beneficiary.educationLevel}</p>
          </div>
          <div className="basic-beneficiary-info-div-right">
            <Subtitle type="primary" text="Datos de Contacto" />
            <Subtitle type ="secondary" text="Contacto de Emergencia 1"></Subtitle>
            <p className="primaryview-data">Nombre: </p>
            <p className="primaryview-data">Teléfono: </p>
            <Subtitle type ="secondary" text="Contacto de Emergencia 2"></Subtitle>
            <p className="primaryview-data">Nombre: </p>
            <p className="primaryview-data">Teléfono: </p>
          </div>
        </div>
        <div className="buttons-div">
          <Button type ="secondary-small" text="Talleres" onClick={() => getSecondaryView(1)} isDisabled ={disabledWorkshops}/>
          <Button type ="secondary-small" text="Datos Médicos" onClick={() => getSecondaryView(2)} isDisabled = {disabledMedicalData}/>
          <Button type ="secondary-small" text="Seguimiento" onClick={() => getSecondaryView(3)} isDisabled ={disabledFollowUp}/>
          <Button type ="secondary-small" text="Visitas" onClick={() => getSecondaryView(4)} isDisabled ={disabledVisits}/>
          <Button type ="secondary-small" text="KPIs" onClick={() => getSecondaryView(5)} isDisabled ={disabledKpis}/>
        </div>
        <div className="secondary-view">
          {secondaryViewComponent}
        </div>
      </div>
    </div>
  )
}
