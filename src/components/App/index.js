// == Import
import './styles.scss';

// == Import des composants
import Accueil from 'src/components/Accueil'
import Header from 'src/components/Header';
import Intro from 'src/components/Intro';
import Projets from 'src/components/Projets';
import Oldix from 'src/components/Oldix';
import Experiences from 'src/components/Experiences';
import Formations from 'src/components/Formations';
import Qui from 'src/components/Qui';
import Contact from 'src/components/Contact'
import Menu from 'src/components/Menu'
import Button from 'react-bootstrap/Button'

// == Import des outils
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

// == Composant
const App = () => {
  const bgStyle = {
    backgroundPosition: 'top',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100vw',
    height: '100vh',
    position: 'fixed',
    overflowY: 'scroll',
  }
// ************************ VARIABLES D'ETAT ************************ //
const [colorMode, setColorMode] = useState("white__mode")
const [ welcome, setWelcome ] = useState(true);

useEffect(() => {
  const valueWelcome = sessionStorage.getItem('new');
  if (valueWelcome == "true") {
    const displayWelcome = setTimeout(() => {setWelcome(false), sessionStorage.setItem('new', 'false')}, 13000);
  } if (valueWelcome == "false") {
    setWelcome(false)
  } else {
    setWelcome(true)
    sessionStorage.setItem('new', 'true');
    const displayWelcome = setTimeout(() => {setWelcome(false), sessionStorage.setItem('new', 'false')}, 13000)
  }
}, []);

const swapIntro = () => {
  setWelcome(false)
  sessionStorage.setItem('new', 'false')
}

// ******************************** AFFICHAGE DE L'APP ********************************* //
  return (
  <div style={bgStyle} className="app">
    <Header colorMode={colorMode} setColorMode={setColorMode}/>
    <div className="read__page">
    <div className={welcome ? "home__title__container" : "hidden"}>
      <Intro />
      <Button className="button__swap" onClick={swapIntro}>Passer l'introduction</Button>
    </div>
    <div className={!welcome ? "home" : "hidden"}>
      <Menu />
    <Routes>
      <Route path="/" element={<Accueil />} exact />
      <Route path="/qui_suis_je" element={<Qui />} exact />
      <Route path="/experiences" element={<Experiences />} exact />
      <Route path="/formations" element={<Formations />} exact />
      <Route path="/projets" element={<Projets />} exact />
      <Route path="/projets/oldix" element={<Oldix />} exact />
      <Route path="/me_contacter" element={<Contact  />} exact />
    </Routes>
    </div>
      </div>
  </div>
  )};

// == Export
export default App;
