/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'
// import Title from '../../../components/Title/Title';
import Subtitle from '../../../components/Subtitle/Subtitle'
// import Button from '../../../components/Button/Button';
import WorkshopTable from '../../../components/WorkshopTable/WorkshopTable'
import api from '../../../services/api'

export default function BeneficiaryWorkshops () {
  const [workshops, setWorkshops] = useState([])
  // const { id } = useParams()

  const fetchWorkshops = async () => {
    try {
      const response = await api.get('workshops/')
      setWorkshops(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchWorkshops()
  }, [])

  /* const workshopsMock = [
    {
      id: 1,
      type: 'Taller de costura',
      topic: 'Confección de faldas',
      date: '01/01/2021',
      subtopic: 'Falda larga'
    }
  ] */

  return (
    <div className = "secondaryview-maintitle">

      <Subtitle type = "primary" text="Talleres" />
      {/* <WorkshopTable workshops={workshops} /> */}
    </div>
  )
}
