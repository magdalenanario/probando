import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Subtitle from '../../../components/Subtitle/Subtitle'
import api from '../../../services/api'
import '../Beneficiaries.css'
import Title from '../../../components/Title/Title'
import { booleanToSiNo } from '../../../utils/usefulFunctions'

export default function BeneficiaryMedicalData () {
  const [beneficiaryPrenatal, setBeneficiaryPrenatal] = useState([])
  const [beneficiaryPostnatal, setBeneficiaryPostnatal] = useState([])
  const [beneficiaryParto, setBeneficiaryParto] = useState([])
  // eslint-disable-next-line no-unused-vars
  const [volunteer, setVolunteer] = useState([])
  const { id } = useParams()

  const fetchBeneficiaryPrenatal = async () => {
    try {
      const response = await api.get(`beneficiaries/${id}/prenatal/`)
      setBeneficiaryPrenatal(response.data)
    } catch (error) {
      console.log(error)
    }
  }
  const fetchBeneficiaryPostnatal = async () => {
    try {
      const response = await api.get(`beneficiaries/${id}/postnatal/`)
      setBeneficiaryPostnatal(response.data)
    } catch (error) {
      console.log(error)
    }
  }
  const fetchBeneficiaryParto = async () => {
    try {
      const response = await api.get(`beneficiaries/${id}/parto/`)
      setBeneficiaryParto(response.data)
      console.log('parto', response.data)
    } catch (error) {
      console.log(error)
    }
  }
  const fetchVolunteer = async (volunteerId) => {
    try {
      const response = await api.get(`users/${volunteerId}/`)
      setVolunteer(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchBeneficiaryPrenatal()
    fetchBeneficiaryPostnatal()
    fetchBeneficiaryParto()
    fetchVolunteer()
  }, [])

  return (
    <>
    <div className="secondaryview-maintitle">
      <Title type = "primary" text="Datos Médicos" />

    </div>
    <Subtitle type = "primary" text="Prenatal" />
    <div className="data-secondaryview-div">
        <div className="data-secondaryview-div-left">
          <Subtitle type = "secondary" text="Controles de emergencia" />
          <p className = "secondaryview-data"> {beneficiaryPrenatal.emergencyAttentions}</p>
          <Subtitle type = "secondary" text="Utrasonidos" />
          <p className = "secondaryview-data">{beneficiaryPrenatal.ultrasounds}</p>
        </div>
        <div className="data-secondaryview-div-right">
          <Subtitle type = "secondary" text="Anticonceptivos" />
          <p className = "secondaryview-data">{beneficiaryPrenatal.birthControls}</p>
          <Subtitle type = "secondary" text="Infecciones Prenatal" />
          <p className = "secondaryview-data">{booleanToSiNo(beneficiaryPrenatal.prenatalInfection)}</p>
        </div>
      </div>
      <Subtitle type = "primary" text="Postnatal" />
       <div className="data-secondaryview-div">
        <div className="data-secondaryview-div-left">
          <Subtitle type = "secondary" text="Tipo de Parto" />
          <p className = "secondaryview-data"> {beneficiaryPostnatal.birthType}</p>
          <Subtitle type = "secondary" text="Infección Post Parto" />
          <p className = "secondaryview-data">{booleanToSiNo(beneficiaryPostnatal.postpartumInfection)}</p>
          <Subtitle type = "secondary" text="Control día a día" />
          <p className = "secondaryview-data">{booleanToSiNo(beneficiaryPostnatal.dayToDayControl)}</p>
          <Subtitle type = "secondary" text="Control post Alta" />
          <p className = "secondaryview-data">{booleanToSiNo(beneficiaryPostnatal.postDischargeControl)}</p>
        </div>
        <div className="data-secondaryview-div-right">
          <Subtitle type = "secondary" text="Hospitalización del Neo Nato" />
          <p className = "secondaryview-data">{booleanToSiNo(beneficiaryPostnatal.neonatalHospitalization)}</p>
          <Subtitle type = "secondary" text="Lactancia Efectiva" />
          <p className = "secondaryview-data">{booleanToSiNo(beneficiaryPostnatal.efectiveLactancy)}</p>
          <Subtitle type = "secondary" text="Muerte Peri-Natal" />
          <p className = "secondaryview-data">{booleanToSiNo(beneficiaryPostnatal.perinatalDeath)}</p>
          <Subtitle type = "secondary" text="Muerte Maternal" />
          <p className = "secondaryview-data">{booleanToSiNo(beneficiaryPostnatal.maternalDeath)}</p>
        </div>
      </div>
      <Subtitle type = "primary" text="Parto" />
        <div className="data-secondaryview-div">
          <div className="data-secondaryview-div-left">
            <Subtitle type = "secondary" text="Adopción" />
            <p className = "secondaryview-data"> {beneficiaryParto.adoption}</p>
            <Subtitle type = "secondary" text="Fecha" />
            <p className = "secondaryview-data">{beneficiaryParto.date}</p>
            <Subtitle type = "secondary" text="Numero de form" />
            <p className = "secondaryview-data">{beneficiaryParto.formNumber}</p>
          </div>
          <div className="data-secondaryview-div-right">
            <Subtitle type = "secondary" text="VIH" />
            <p className = "secondaryview-data">{booleanToSiNo(beneficiaryParto.vih)}</p>
            <Subtitle type = "secondary" text="Voluntaria asociada" />
            <p className = "secondaryview-data">{beneficiaryParto.volunteer_id}</p>
        </div>
      </div></>
  )
}
