import React from 'react'
import Subtitle from '../../../components/Subtitle/Subtitle'

export default function BeneficiaryVisits () {
  return (
    <><div className="secondaryview-maintitle">

    <Subtitle type = "primary" text="Visitas" />

  </div><div className="data-secondaryview-div">
      <div className="data-secondaryview-div-left">
        <Subtitle type = "secondary" text="subtitle-1" />
        <p className = "secondaryview-data">Voluntario</p>
        <Subtitle type = "secondary" text="subtitle-2" />
        <p className = "secondaryview-data">Abandono Familiar</p>
        <Subtitle type = "secondary" text="subtitle-3" />

      </div>
      <div className="data-secondaryview-div-right">
        <Subtitle type = "secondary" text="Antecedentes importantes" />
        <p className = "secondaryview-data">Si</p>
        <Subtitle type = "secondary" text="subtitle-4" />
        <p className = "secondaryview-data">Si</p>

      </div>
    </div></>
  )
}
