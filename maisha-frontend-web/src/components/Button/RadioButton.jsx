/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import * as React from 'react'
import Radio from '@mui/material/Radio'
import './RadioButton.css'

export default function StyledRadioButtons ({ options, direction }) {
  const [selectedValue, setSelectedValue] = React.useState()

  const handleChange = (event) => {
    setSelectedValue(event.target.value)
  }

  return (
    <div className={direction}>
      {options.map((option) => (
        <div className="radio-button-container {
          ">
          <Radio
            checked={selectedValue === option.value}
            onChange={handleChange}
            value={option.value}
            name="radio-buttons"
            inputProps={{ 'aria-label': option.value, className: 'radio-button-style' }}
          />
          <label className="radio-button-label">{option.label}</label>
        </div>
      ))}
    </div>
  )
}
