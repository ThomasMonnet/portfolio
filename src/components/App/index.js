// == Import
import './styles.scss';

// == Import des composants
import Header from 'src/components/Header';
import Home from 'src/components/Home';
import Projets from 'src/components/Projets';
import Oldix from 'src/components/Oldix';
import Experiences from 'src/components/Experiences';
import Formations from 'src/components/Formations';
import Qui from 'src/components/Qui';
import Contact from 'src/components/Contact'

// == Import des outils
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

// == Composant
const App = () => {
  const bgStyle = {
    backgroundPosition: 'top',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100vw',
    height: '100.5vh',
    position: 'fixed',
    overflowY: 'scroll',
  }
// ************************ VARIABLES D'ETAT ************************ //
const [colorMode, setColorMode] = useState("white__mode")

// ******************************** AFFICHAGE DE L'APP ********************************* //
  return (
  <div style={bgStyle} className="app">
    <Header colorMode={colorMode} setColorMode={setColorMode}/>
    <Routes>
      <Route path="/" element={<Home />} exact />
      <Route path="/qui_suis_je" element={<Qui />} exact />
      <Route path="/experiences" element={<Experiences />} exact />
      <Route path="/formations" element={<Formations />} exact />
      <Route path="/projets" element={<Projets />} exact />
      <Route path="/projets/oldix" element={<Oldix />} exact />
      <Route path="/me_contacter" element={<Contact  />} exact />
    </Routes>
  </div>
  )};

// == Export
export default App;
