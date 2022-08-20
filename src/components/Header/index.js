import Profil from 'src/assets/img/profil.jpeg';
import Arrow from 'src/assets/img/arrow.png'
import menuData from 'src/data/menu';
import { NavLink } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import reseauxData from 'src/data/reseaux'
import Button from 'react-bootstrap/Button';
import Modal from 'react'
import './header.scss';

const Header = ({ }) => {

  // ************************ ETAT DE L'OUVERTURE DU MENU ************************ //  
  
  // ************************ AFFICHAGE DU SITE ************************ //

  return (
    <div className={"header__container"} >
      <Card className="header__top__card">
        <Card.Img className="header__top__pdp" src={Profil}></Card.Img>
        <Card.Title className="header__top__title">Thomas Monnet</Card.Title>
      </Card>
      <div className="separator"></div>
      <Card>
      <ul className="menu__ul">
        {menuData.map((data, id) =>
        <NavLink key="{id}" to={data.route}>
          <li className="menu__li">
            {data.label}
          </li>
        </NavLink>)}
      </ul>
      </Card>
      <div className="separator"></div>
          <Card>
            {reseauxData.map((reseaux, key) =>
            <h1 key="{key}">{reseaux.url}</h1>
            )}
          </Card>
    </div>
  );
};

export default Header;
