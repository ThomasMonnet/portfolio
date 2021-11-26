// == Import
import './styles.scss';
import Header from 'src/components/Header';
import { Routes, Route } from 'react-router-dom';
import Home from 'src/components/Home';
import Oldix from 'src/components/Oldix';
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
      }
    };
  
    const changeBackground = () => {
      colorUser = document.querySelector('#colorUser');
      colorUser.value = defaultColor;
      colorUser.addEventListener('input', updateBackground, false);
      colorUser.select();
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
      colorUser.addEventListener('input', updateColor, false);
      colorUser.select();
    };
  
    const updateBorder = (event) => {
      const border = document.querySelector('.border');
      if (border) {
        border.style.border = event.target.value;
      }
    };
  
    const changeBorder = () => {
      colorUser = document.querySelector('#colorUser');
      colorUser.value = defaultColor;
      colorUser.addEventListener('input', updateBorder, false);
      colorUser.select();
    };
  
    window.addEventListener('load', changeBorder, false);
    window.addEventListener('load', changeBackground, false);
    window.addEventListener('load', changeColor, false)

// ************************ VARIABLE D'ETAT D'OUVERTURE DU MENU ************************ //
  const [openMenu, setOpenMenu] = useState(true);


  // ************************ AFFICHAGE DE L'APP ************************ //
  return (
  <div className="app">
    <Header openMenu={openMenu} setOpenMenu={setOpenMenu} colorUser={colorUser}/>
    <Routes>
      <Route path="/" element={<Home openMenu={openMenu} colorUser={colorUser} />} exact />
      <Route path="/Home" element={<Home />} exact />
      <Route path="/projets/oldix" element={<Oldix />} exact />
    </Routes>
  </div>
  )};

// == Export
export default App;
