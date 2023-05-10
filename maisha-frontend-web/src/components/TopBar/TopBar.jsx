/* eslint-disable react/react-in-jsx-scope */
import HomeIcon from '@mui/icons-material/Home'
import PersonIcon from '@mui/icons-material/Person'
import Button from '../Button/Button'
import { useNavigate } from 'react-router-dom'
import './TopBar.css'

const TopBar = () => {
  const navigate = useNavigate()
  const handleCloseSesion = () => {
    navigate('/')
  }
  const handleHomeIconClick = () => {
    navigate('/home')
  }
  const handleUserIconClick = () => {
    // navigate('/profile');
  }
  return (
    <div className='top-bar-container'>
      <div><HomeIcon className='top-bar-icons' onClick={() => handleHomeIconClick()}/></div>
      <div><PersonIcon className='top-bar-icons' onClick={() => handleUserIconClick()}/></div>
      <div><Button type='primary-small' text='Cerrar Sesion' onClick={() => handleCloseSesion()}></Button></div>
    </div>
  )
}

export default TopBar
