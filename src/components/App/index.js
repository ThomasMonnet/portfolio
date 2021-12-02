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

// ************************ GESTION DES COULEURS DU SITE ************************ //
    let colorUser;
    const defaultColor ='#6d1c1e';
  
    const updateBackground = (event) => {
      const background = document.querySelector('.background');
      if (background) {
        background.style.background = event.target.value;
      }
    };

    const updateCard = (event) => {
      const card = document.querySelector('.card');
      if (card) {
        card.style.background = event.target.value;
      }
    };

    const updateColor = (event) => {
      const color = document.querySelector('.color');
      if (color) {
        color.style.color = event.target.value;
      }
    };
    
    const updateBorder = (event) => {
      const border = document.querySelector('.border');
      if (border) {
        border.style.border = "solid 3px" + event.target.value;
      }
    };

    const updateLink = (event) => {
      const link = document.querySelector('.link');
      if (link) {
        link.style.color = event.target.value;
      }
    };

    const changeColor = () => {
      colorUser = document.querySelector('#colorUser');
      colorUser.value = defaultColor;
      colorUser.addEventListener('input', updateBackground, false);
      colorUser.addEventListener('input', updateCard, false);
      colorUser.addEventListener('input', updateColor, false);
      colorUser.addEventListener('input', updateBorder, false);
      colorUser.addEventListener('input', updateLink, false);
      colorUser.select();
    };

    const colorStyle = {
      color: defaultColor
    }

    const backgroundStyle = {
      backgroundColor: defaultColor
    }
    
    const linkStyle = {
      color: defaultColor,
      fontSize: "1.5rem",
    }

    const borderStyle = {
      border: "solid 4px" + defaultColor
    }

    window.addEventListener('load', changeColor, false)

// ************************ VARIABLE D'ETAT D'OUVERTURE DU MENU ************************ //
  const [openMenu, setOpenMenu] = useState(true);


// ******************************** AFFICHAGE DE L'APP ********************************* //
  return (
  <div className="app">
    <Header openMenu={openMenu} setOpenMenu={setOpenMenu} colorUser={colorUser}/>
    <Routes>
      <Route path="/" element={<Home linkStyle={linkStyle} openMenu={openMenu} colorUser={colorUser} colorStyle={colorStyle} borderStyle={borderStyle}/>} exact />
      <Route path="/qui_suis_je" element={<Qui openMenu={openMenu} colorUser={colorUser} colorStyle={colorStyle} borderStyle={borderStyle}/>} exact />
      <Route path="/experiences" element={<Experiences openMenu={openMenu} borderStyle={borderStyle}/>} exact />
      <Route path="/formations" element={<Formations openMenu={openMenu} borderStyle={borderStyle}/>} exact />
      <Route path="/projets" element={<Projets openMenu={openMenu}/>} exact />
      <Route path="/projets/oldix" element={<Oldix openMenu={openMenu}/>} exact />
      <Route path="/me_contacter" element={<Contact openMenu={openMenu} colorUser={colorUser} colorStyle={colorStyle} backgroundStyle={backgroundStyle}/>} exact />
    </Routes>
  </div>
  )};

// == Export
export default App;
