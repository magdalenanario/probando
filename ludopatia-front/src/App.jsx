import logo from './logo.svg';
import './App.css';
import Index from './views/Index'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar'
import About from './views/About'
import Rules from './views/Rules'
import Questions from './views/Questions'
import Team from './views/Team'
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
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
