/* eslint-disable react/prop-types */
import * as React from 'react'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers/'
import './DatePicker.css'

const StyledDatePicker = ({ label }) => {
  return (
    <div className='date-picker-container'>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <label className="date-picker-label">{label}</label>
        <DatePicker
          format='DD/MM/YYYY'
          className='date-picker-style'
        />
      </LocalizationProvider>
    </div>
  )
}

export default StyledDatePicker
