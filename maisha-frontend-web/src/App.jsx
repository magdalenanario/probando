/* eslint-disable react/react-in-jsx-scope */
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import Login from './views/Login/Login'
import Home from './views/Home/Home'
import BeneficiariesView from './views/Beneficiaries/BeneficiariesView'
import Workshops from './views/Workshops/Workshops'
import AddBeneficiary from './views/Beneficiaries/BeneficiariesCreate'
import AddWorkshops from './views/Workshops/WorkshopsCreate'
import BillsView from './views/Bills/BillsView'
import AddBills from './views/Bills/BillsCreate'
import BillsResume from './views/Bills/BillsResume'
import Users from './views/Users/Users'
import Trainings from './views/Trainings/Trainings'
import DashboardKpis from './views/Kpis/DashboardKpis'
import EditProfile from './views/Profile/EditProfile'

function App () {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/beneficiaries/view/:id" element={<BeneficiariesView />} />
        <Route path="/workshops/view" element={<Workshops />} />
        <Route path="/beneficiaries/add" element={<AddBeneficiary/>} />
        <Route path='/workshops/add' element={<AddWorkshops />} />
        <Route path='/bills/view' element={<BillsView/>} />
        <Route path='/bills/add' element={<AddBills/>} />
        <Route path='/bills/resume' element={<BillsResume/>} />
        <Route path='/users' element={<Users/>} />
        <Route path='/trainings' element={<Trainings/>} />
        <Route path='/dashboard' element={<DashboardKpis/>} />
        <Route path='/profile/edit' element={<EditProfile/>} />

      </Routes>
    </Router>
  )
}

export default App
