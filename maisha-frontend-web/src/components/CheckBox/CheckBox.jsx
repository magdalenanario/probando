/* eslint-disable react/prop-types */
import * as React from 'react'
import Checkbox from '@mui/material/Checkbox'
import './CheckBox.css'

export default function StyledCheckBox ({ text }) {
  const [checked, setChecked] = React.useState(true)

  const handleChange = (event) => {
    setChecked(event.target.checked)
  }

  return (
    <div className='checkbox-container'>
      <Checkbox
        checked={checked}
        onChange={handleChange}
        inputProps={{ 'aria-label': 'controlled', className: 'checkbox-style' }}
      />
      <label className='checkbox-label'>{text}</label>
    </div>
  )
}
