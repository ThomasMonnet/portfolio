// == Import
import './styles.scss';
import Header from 'src/components/Header';
import { Routes, Route } from 'react-router-dom';
import Home from 'src/components/Home';
import Projets from 'src/components/Projets';
import { useState } from 'react';

// == Composant
const App = () => {

// ************************ GESTION DES COULEURS DU SITE ************************ //
    let colorUser;
    const defaultColor ='#5a2122';
  
    const updateBackground = (event) => {
      const background = document.querySelector('.background');
      if (background) {
        background.style.background = event.target.value;
        //localStorage.setItem('userColor', event.target.value);
      }
    };

    const updateColor = (event) => {
      const color = document.querySelector('.color');
      if (color) {
        color.style.color = event.target.value;
      }
    };
  
    const changeColor = () => {
      colorUser = document.querySelector('#colorUser');
      colorUser.value = defaultColor;
      colorUser.addEventListener('input', updateBackground, false);
      colorUser.addEventListener('input', updateColor, false);
      colorUser.addEventListener('input', updateBorder, false);
      colorUser.addEventListener('input', updateLink, false);
      colorUser.select();
    };

    const colorStyle = {
      color: defaultColor
    }
    
    const updateLink = (event) => {
      const link = document.querySelector('.link');
      if (link) {
        link.style.color = event.target.value;
      }
    };
    
    const linkStyle = {
      color: defaultColor,
      fontSize: "1.5rem",
    }

    const updateBorder = (event) => {
      const border = document.querySelector('.border');
      if (border) {
        border.style.border = "solid 3px" + event.target.value;
      }
    };

    const borderStyle = {
      border: "solid 4px" + defaultColor
    }

    window.addEventListener('load', changeColor, false)

// ************************ VARIABLE D'ETAT D'OUVERTURE DU MENU ************************ //
  const [openMenu, setOpenMenu] = useState(true);


  // ************************ AFFICHAGE DE L'APP ************************ //
  return (
  <div className="app">
    <Header openMenu={openMenu} setOpenMenu={setOpenMenu} colorUser={colorUser}/>
    <Routes>
      <Route path="/" element={<Home linkStyle={linkStyle} openMenu={openMenu} colorUser={colorUser} colorStyle={colorStyle} borderStyle={borderStyle}/>} exact />
      <Route path="/qui_suis_je" element={<Home openMenu={openMenu} colorUser={colorUser} colorStyle={colorStyle} borderStyle={borderStyle}/>} exact />
      <Route path="/projets" element={<Projets openMenu={openMenu}/>} exact />
    </Routes>
  </div>
  )};

// == Export
export default App;
