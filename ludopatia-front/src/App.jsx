import logo from './logo.svg';
import './App.css';
import Index from './views/Index'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar'
import About from './views/About'
import Rules from './views/Rules'
import Questions from './views/Questions'
import Team from './views/Team'
import Register from './views/Register'
import EditProfile from './views/EditProfile'
import LoggedSession from './views/LoggedSession'
import StartGame from './views/StartGame'
import WaitingRoom from './views/WaitingRoom'
import AuthContextProvider from "./context/AuthContext";

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="about" element={<About />} />
          <Route path="rules" element={<Rules />} />
          <Route path="questions" element={<Questions />} />
          <Route path="team" element={<Team />} />
          <Route path="editar_perfil" element={<EditProfile />} />
          <Route path="register" element={<Register />} />
          <Route path="logged" element={<LoggedSession />} />
          {/* <Route path="register/logged" element={<LoggedSession />} /> */}
          <Route path="game" element={<StartGame />} />
          <Route path="waiting" element={<WaitingRoom />} />
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
