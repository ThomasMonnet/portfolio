import { Link } from 'react-router-dom';
import { useState } from 'react'

const Menu = () => {

  const [ displayMenu, setDisplayMenu ] = useState(false);
  const [ changeMenu, setChangeMenu ] = useState(false)

  const openMenu = () => {
    if (displayMenu == true) {
      const display = setTimeout(() => {setChangeMenu(false)}, 1000);
      setDisplayMenu(false)
    } else {
      setChangeMenu(true);
      setDisplayMenu(true);
    }
  }



  return (
    <div className="menu__fixed menu__index">
      <div className="menu" onClick={openMenu}>
        <h1 className="menu__center__title">Menu</h1>
      </div>
      <div className={changeMenu ? "menu__center" : "hidden"}>
        <Link to="/" className={displayMenu ? "menu__center__text menu__center__text__accueil menu__center__text__accueil__open" : "menu__center__text menu__center__text__accueil menu__center__text__accueil__close"} >
          <h1>Accueil</h1>
        </Link>
        <Link to="/qui_suis_je" className={displayMenu ? "menu__center__text menu__center__text__qui menu__center__text__qui__open" : "menu__center__text menu__center__text__qui menu__center__text__qui__close"}>
          <h1>Pourquoi développeur ?</h1>
        </Link>
        <Link to="/formations" className={displayMenu ? "menu__center__text menu__center__text__formations menu__center__text__formations__open" : "menu__center__text menu__center__text__formations menu__center__text__formations__close"}>
          <h1>Formations</h1>
        </Link>
        <Link to="experiences" className={displayMenu ? "menu__center__text menu__center__text__experiences menu__center__text__experiences__open" : "menu__center__text menu__center__text__experiences menu__center__text__experiences__close"}>
          <h1>Expériences</h1>
        </Link>
        <Link to="projets" className={displayMenu ? "menu__center__text menu__center__text__projets menu__center__text__projets__open" : "menu__center__text menu__center__text__projets menu__center__text__projets__close"}>
          <h1>Projets</h1>
        </Link>
    </div>
    </div>

  );
  };

export default Menu
