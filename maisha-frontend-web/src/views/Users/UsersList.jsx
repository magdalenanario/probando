/* eslint-disable react/prop-types */
import React from 'react'
import Button from '../../components/Button/Button'

export default function UsersList ({ users }) {
  return (
    <table className='user-list-container'>
      <thead className='user-list-header'>
        <tr>
          <th>Nombre</th>
          <th>Edad</th>
          <th>Telefono</th>
          <th>Rol</th>
          <th>Estado</th>
        </tr>
      </thead>
      <tbody className='user-list-items'>
        {users.map((user) => (
          <tr key={user.id} className='user-list-item'>
            <td>{user.name}</td>
            <td>{user.age}</td>
            <td>{user.phone}</td>
            <td>{user.type}</td>
            <td>{user.status}</td>
            <td>
              <Button text="Ver perfil" type="primary-small" />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
};
