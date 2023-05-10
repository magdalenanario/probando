/* eslint-disable react/prop-types */
import React from 'react'
import Button from '../Button/Button'
import Title from '../Title/Title'
import './BillsTable.css'

export default function BillsTable ({ bills }) {
  const params = {
    descripcion: 'Descripción',
    monto: 'Monto',
    date: 'Fecha',
    comprobante: 'Comprobante'
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
    <div className="bills-table">
      <div className="table-header">
        <Title text="Planilla de Gastos" />
        <Button text="Agregar Gasto" type={BUTTON_TYPE.primarySmall} />
      </div>
      <table>
        <thead>
          <tr>
            <th>{params.descripcion}</th>
            <th>{params.monto}</th>
            <th>{params.date}</th>
            <th>{params.comprobante}</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {bills.map((bill) => (
            <tr key={bill.id}>
              <td>{bill.descripcion}</td>
              <td>${bill.monto}</td>
              <td>{bill.date}</td>
              <td>{bill.comprobante}</td>
              <td>
                <Button text="Ver gasto" type="primary-small"/>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
