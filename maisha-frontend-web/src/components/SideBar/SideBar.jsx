/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong'
import CoPresentIcon from '@mui/icons-material/CoPresent'
import PregnantWomanIcon from '@mui/icons-material/PregnantWoman'
import ChildFriendlyIcon from '@mui/icons-material/ChildFriendly'
import DashboardIcon from '@mui/icons-material/Dashboard'
import PersonSearchIcon from '@mui/icons-material/PersonSearch'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import { useNavigate } from 'react-router-dom'
import img from '../../assets/logos/Logo_Maisha.png'
import './SideBar.css'

const SideBar = ({ user, userType }) => {
  const navigate = useNavigate()
  const [selectedValue, setSelectedValue] = useState('')
  const [openedSideBar, setOpenedSideBar] = useState(true)

  const handleListItemClick = (value) => {
    setSelectedValue(value)
    if (value === 'bills') {
      navigate('/bills/view')
    } else if (value === 'workshops') {
      navigate('/workshops/view')
    } else if (value === 'beneficiary') {
      navigate('/beneficiaries/view')
    } else if (value === 'trainings') {
      navigate('/trainings')
    } else if (value === 'dashboard') {
      navigate('/dashboard')
    } else if (value === 'users') {
      navigate('/users')
    };
  }

  const handleHomeButtonClick = () => {
    navigate('/home')
  }

  const closeSideBar = () => {
    setOpenedSideBar(!openedSideBar)
  }

  return (
    <div className='complete-sidebar'>
      {openedSideBar &&
        <div className='sidebar-container'>
          <div className="image-container">
            <img src={img} className='img' alt="Imagen de inicio de sesión" />
          </div>
          <div className='user-container'>
            <h1 className='user-name'>{user}</h1>
            <h2 className='user-type'>{userType}</h2>
          </div>
          <List id='sidebar-list'>
            <ListItemButton
              selected={selectedValue === 'bills'}
              onClick={() => handleListItemClick('bills')}
            >
              <ListItemIcon>
                <ReceiptLongIcon />
              </ListItemIcon>
              <ListItemText primary="Planilla Gastos" />
            </ListItemButton>
            <ListItemButton
              selected={selectedValue === 'beneficiary'}
              onClick={() => handleListItemClick('beneficiary')}
            >
              <ListItemIcon>
                <PregnantWomanIcon />
              </ListItemIcon>
              <ListItemText primary="Beneficiairias" />
            </ListItemButton>
            <ListItemButton
              selected={selectedValue === 'workshops'}
              onClick={() => handleListItemClick('workshops')}
            >
              <ListItemIcon>
                <CoPresentIcon />
              </ListItemIcon>
              <ListItemText primary="Talleres" />
            </ListItemButton>
            <ListItemButton
              selected={selectedValue === 'trainings'}
              onClick={() => handleListItemClick('trainings')}
            >
              <ListItemIcon>
                <ChildFriendlyIcon />
              </ListItemIcon>
              <ListItemText primary="Capacitaciones" />
            </ListItemButton>
            {userType === 'Administrador' &&
            <>
              <ListItemButton
                selected={selectedValue === 'dashboard'}
                onClick={() => handleListItemClick('dashboard')}
              >
                <ListItemIcon>
                  <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
              </ListItemButton>
              <ListItemButton
                selected={selectedValue === 'users'}
                onClick={() => handleListItemClick('users')}
              >
                <ListItemIcon>
                  <PersonSearchIcon />
                </ListItemIcon>
                <ListItemText primary="Usuarios" />
              </ListItemButton>
            </>
            }
          </List>
          <div className='home-button' onClick={() => handleHomeButtonClick()}>
            <ArrowBackIosNewIcon/>
            <h2 className='home-button-text'>Inicio</h2>
          </div>
        </div>
      }
      <button className='close-sidebar-button' onClick={() => closeSideBar()}>
        {openedSideBar
          ? <ArrowBackIosNewIcon className='close-sidebar-arrow'/>
          : <ArrowForwardIosIcon className='close-sidebar-arrow'/>
        }
      </button>
    </div>
  )
}

export default SideBar
