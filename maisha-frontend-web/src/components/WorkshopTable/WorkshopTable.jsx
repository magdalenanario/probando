/* eslint-disable react/prop-types */
import React from 'react'
import Button from '../Button/Button'
import Title from '../Title/Title'
import './WorkshopTable.css'

export default function WorkshopTable ({ workshops }) {
  // Const para definir los diferentes parametros de la tabla
  const params = {
    name: 'Nombre',
    tipo: 'Tipo',
    tema: 'Tema',
    date: 'Fecha',
    responsable: 'Responsable'
  }
  // Const para utilizar los diferentes tipos de botones
  const BUTTON_TYPE = {
    submit: 'submit',
    primarySmall: 'primary-small',
    secondary: 'secondary',
    secondarySmall: 'secondary-small',
    outlinedSmall: 'primary-outlined-small'
  }
  return (
    <div className="workshop-table">
      <div className="table-header">
        <Title text="Talleres" />
        <Button text="Crear taller" type={BUTTON_TYPE.primarySmall} />
      </div>
      <table>
        <thead>
          <tr>
            <th>{params.name}</th>
            <th>{params.tipo}</th>
            <th>{params.tema}</th>
            <th>{params.date}</th>
            <th>{params.responsable}</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {workshops.map((workshop) => (
            <tr key={workshop.id}>
              <td>{workshop.name}</td>
              <td>{workshop.type}</td>
              <td>{workshop.topic}</td>
              <td>{workshop.date}</td>
              <td>{workshop.responsible}</td>
              <td>
                <Button text="Ver taller" type={BUTTON_TYPE.primarySmall} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
