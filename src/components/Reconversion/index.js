import './reconversion.scss'
import oClock from "src/assets/img/oclock.png"
import React from "src/assets/img/react_icon.png"
import Apo from 'src/assets/img/oclock.png'
import { Card } from 'react-bootstrap'
import { useState, useEffect } from 'react';

const Reconversion = () => {
  
const [ open1, setOpen1 ] = useState(true);
const [ open2, setOpen2 ] = useState(false);
const [ open3, setOpen3 ] = useState(false);
const [ openReact, setOpenReact ] = useState(false);
const [ openApo, setOpenApo ] = useState(false);
  
  const display1 = () => {
    setOpen1(true);
    setOpen2(false);
    setOpen3(false);
    setOpenReact(false);
    setOpenApo(false);
  }
  
  const display2 = () => {
    setOpen1(false);
    setOpen2(true);
    setOpen3(false);
    setOpenReact(false);
    setOpenApo(false);
  }
  
  const display3 = () => {
    setOpen1(false);
    setOpen2(false);
    setOpen3(true);
    setOpenReact(false);
    setOpenApo(false);
  }
  
  const displayReact = () => {
    setOpen1(false);
    setOpen2(false);
    setOpen3(false);
    setOpenReact(true);
    setOpenApo(false);
  }
  
  const displayApo = () => {
    setOpen1(false);
    setOpen2(false);
    setOpen3(false);
    setOpenReact(false);
    setOpenApo(true);
  }

  const bgNumber = {
    backgroundImage: `url(${oClock})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat'
  }
  
  return (
  <div className="page__size" id="reconversion">
    <div className="page__espace"></div>
    <Card.Title className="commercial__title" >
      Un profil commercial avec plus de 5 années d'expérience ! 
    </Card.Title>

    <Card className="commercial__card">
      <div className="commercial__experiences__img__container">
        <Card.Title className="commercial__experiences__title">Le Socle</Card.Title>
        <div className={open1 ? "commercial__experiences__img__selected" : "commercial__experiences__img number"} style={bgNumber} onMouseEnter={display1}>1</div>
        <div className={open2 ? "commercial__experiences__img__selected" : "commercial__experiences__img number"} style={bgNumber} onMouseEnter={display2}>2</div>
        <div className={open3 ? "commercial__experiences__img__selected" :"commercial__experiences__img number"} style={bgNumber} onMouseEnter={display3}>3</div>
      </div>
      <div className="commercial__experiences__text__container">

        <div className={open1? "commercial__experiences__text" : "hidden"}>
          <Card.Text className="commercial__experiences__title">1er Mois</Card.Text>
          <Card.Title className="commercial__card__title">Employé Polyvalent</Card.Title>
          <Card.Title className="commercial__card__title__second">2010 - 2012</Card.Title>
          <Card.Text className="commercial__card__title__third">Contrat étudiant 15h / semaine</Card.Text>
        </div>
        <div className={open2 ? "commercial__experiences__text" : "hidden"}>
          <Card.Text className="commercial__experiences__title">2ème mois</Card.Text>
          <Card.Title className="commercial__card__title">Technico-Commercial BtoB en produit de nettoyage industriel</Card.Title>
          <Card.Title className="commercial__card__title__second">2012 - 2013</Card.Title>
          <Card.Text className="commercial__card__title__third">Contrat en apprentissage (1ère année de DUT Technique de Commercialisation)</Card.Text>
        </div>

        <div className={open3 ? "commercial__experiences__text" : "hidden"}>
          <Card.Text className="commercial__experiences__title">3ème mois</Card.Text>
          <Card.Title className="commercial__card__title">Téléprospecteur BtoB en informatique</Card.Title>
          <Card.Title className="commercial__card__title__second">2013 - 2014</Card.Title>
          <Card.Text className="commercial__card__title__third">Contrat en apprentissage (2ème année de DUT Technique de Commercialisation)</Card.Text>
        </div>

        <div className={openReact ? "commercial__experiences__text" : "hidden"}>
          <Card.Text className="commercial__experiences__title">Lycée Gustave React Armentières</Card.Text>
          <Card.Title className="commercial__card__title">Bac Sciences et Technologies en Laboratoire :<br></br> Option Physique</Card.Title>
          <Card.Title className="commercial__card__title__second">2008 - 2010</Card.Title>
          <Card.Text className="commercial__card__title__third">Obtenu</Card.Text>
        </div>

        <div className={openApo ? "commercial__experiences__text" : "hidden"}>
          <Card.Text className="commercial__experiences__title">Apo Lille</Card.Text>
          <Card.Title className="commercial__card__title">BTS Management des Unités Commerciales</Card.Title>
          <Card.Title className="commercial__card__title__second">2010 - 2012</Card.Title>
          <Card.Text className="commercial__card__title__third">Niveau</Card.Text>
        </div>


      </div>
      <div className="commercial__experiences__img__container">
        <Card.Title className="commercial__experiences__title">La spécialisation</Card.Title>
        <Card.Img src={React} className={openReact ? "commercial__experiences__img__selected" : "commercial__experiences__img"} onMouseEnter={displayReact}></Card.Img>
        <Card.Img src={oClock} className={openApo ? "commercial__experiences__img__selected" : "commercial__experiences__img"} onMouseEnter={displayApo}></Card.Img>
        <div className="commercial__experiences__img__empty"></div>
      </div>
  </Card>
    </div>
)}

export default Reconversion;
