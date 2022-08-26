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
    <div className="header__container" >
      <Card className="header__top__card">
        <Card.Img className="header__top__pdp" src={Profil}></Card.Img>
        <Card.Title className="header__top__title">Thomas Monnet</Card.Title>
      </Card>
      <div className="separator"></div>
      <Card className="header__adresse">
        <Card.Title className="header__adresse__title">Front End Developpeur</Card.Title>
        <Card.Title className="header__adresse__text">21 D Tripoteau Nord, <br></br>33230 Abzac</Card.Title>
        <Card.Title className="header__adresse__text">06.12.11.65.35</Card.Title>
        <Card.Title className="header__adresse__text">thomas.monnet.9@gmail.com</Card.Title>
      </Card>
      <div className="separator"></div>
      <div className="star__competences__container">
      <Card className="star__competences">
          <h1>HTML5</h1>
          <div className="star__container">
            <div className="star star__100"></div>
            <div className="star star__100"></div>
            <div className="star star__100"></div>
            <div className="star star__100"></div>
            <div className="star star__50"></div>
          </div>
        </Card>
        <Card className="star__competences">
          <h1>CSS3</h1>
          <div className="star__container">
            <div className="star star__100"></div>
            <div className="star star__100"></div>
            <div className="star star__100"></div>
            <div className="star star__100"></div>
            <div className="star star__75"></div>
          </div>
        </Card>
        <Card className="star__competences">
          <h1>SCSS</h1>
          <div className="star__container">
            <div className="star star__100"></div>
            <div className="star star__100"></div>
            <div className="star star__100"></div>
            <div className="star star__100"></div>
            <div className="star star__50"></div>
          </div>
        </Card>
        <Card className="star__competences">
          <h1>PHP</h1>
          <div className="star__container">
            <div className="star star__100"></div>
            <div className="star star__100"></div>
            <div className="star star__100"></div>
            <div className="star star__50"></div>
            <div className="star star__0"></div>
          </div>
        </Card>
        <Card className="star__competences">
          <h1>JavaScript</h1>
          <div className="star__container">
            <div className="star star__100"></div>
            <div className="star star__100"></div>
            <div className="star star__100"></div>
            <div className="star star__100"></div>
            <div className="star star__50"></div>
          </div>
        </Card>
        <Card className="star__competences">
          <h1>React</h1>
          <div className="star__container">
            <div className="star star__100"></div>
            <div className="star star__100"></div>
            <div className="star star__100"></div>
            <div className="star star__100"></div>
            <div className="star star__25"></div>
          </div>
        </Card>
        <Card className="star__competences">
          <h1>React Bootstrap</h1>
          <div className="star__container">
            <div className="star star__100"></div>
            <div className="star star__100"></div>
            <div className="star star__100"></div>
            <div className="star star__75"></div>
            <div className="star star__0"></div>
          </div>
        </Card>
        <Card className="star__competences">
          <h1>Git</h1>
          <div className="star__container">
            <div className="star star__100"></div>
            <div className="star star__100"></div>
            <div className="star star__100"></div>
            <div className="star star__25"></div>
            <div className="star star__0"></div>
          </div>
        </Card>
        <Card className="star__competences">
          <h1>VSCode</h1>
          <div className="star__container">
            <div className="star star__100"></div>
            <div className="star star__100"></div>
            <div className="star star__100"></div>
            <div className="star star__100"></div>
            <div className="star star__50"></div>
          </div>
        </Card>
        </div>
      <div className="separator"></div>
          <Card className="menu__reseaux">
          {reseauxData.map((reseaux) =>
            <a className="menu__reseaux__container" href={reseaux.url} target="_blank">
              <Card.Img className="menu__img" src={reseaux.image}></Card.Img>
              <Card.Text className="menu__text">{reseaux.name}</Card.Text>
            </a>
        )}
          </Card>
    </div>
  );
};

export default Header;
