import './reconversion.scss'
import oClock from "src/assets/img/oclock.png"
import React from "src/assets/img/react.png"
import Apo from 'src/assets/img/oclock.png'
import { Card } from 'react-bootstrap'
import { useState, useEffect } from 'react';

const Reconversion = () => {
  
const [ open1, setOpen1 ] = useState(true);
const [ open2, setOpen2 ] = useState(false);
const [ open3, setOpen3 ] = useState(false);
const [ open4, setOpen4 ] = useState(false);
const [ openReact, setOpenReact ] = useState(false);
const [ openApo, setOpenApo ] = useState(false);
  
  const display1 = () => {
    setOpen1(true);
    setOpen2(false);
    setOpen3(false);
    setOpen4(false);
    setOpenReact(false);
    setOpenApo(false);
  }
  
  const display2 = () => {
    setOpen1(false);
    setOpen2(true);
    setOpen3(false);
    setOpen4(false);
    setOpenReact(false);
    setOpenApo(false);
  }
  
  const display3 = () => {
    setOpen1(false);
    setOpen2(false);
    setOpen3(true);
    setOpen4(false);
    setOpenReact(false);
    setOpenApo(false);
  }

  const display4 = () => {
    setOpen1(false);
    setOpen2(false);
    setOpen3(false);
    setOpen4(true);
    setOpenReact(false);
    setOpenApo(false);
  }
  
  const displayReact = () => {
    setOpen1(false);
    setOpen2(false);
    setOpen3(false);
    setOpen4(false);
    setOpenReact(true);
    setOpenApo(false);
  }
  
  const displayApo = () => {
    setOpen1(false);
    setOpen2(false);
    setOpen3(false);
    setOpen4(false);
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
      Une reconversion professionnelle chez O'Clock
    </Card.Title>

    <Card className="commercial__card">
      <div className="commercial__experiences__img__container">
        <Card.Title className="commercial__experiences__title">Le Socle</Card.Title>
        <div className={open1 ? "commercial__experiences__img__selected" : "commercial__experiences__img number"} style={bgNumber} onMouseEnter={display1}>1</div>
        <div className={open2 ? "commercial__experiences__img__selected" : "commercial__experiences__img number"} style={bgNumber} onMouseEnter={display2}>2</div>
        <div className={open3 ? "commercial__experiences__img__selected" :"commercial__experiences__img number"} style={bgNumber} onMouseEnter={display3}>3</div>
        <div className={open4 ? "commercial__experiences__img__selected" :"commercial__experiences__img number"} style={bgNumber} onMouseEnter={display4}>4</div>
      </div>
      <div className="commercial__experiences__text__container">

        <div className={open1? "commercial__experiences__text" : "hidden"}>
          <Card.Text className="commercial__experiences__title">1er Mois</Card.Text>
          <Card.Title className="commercial__card__title">Les bases</Card.Title>
          <Card.Title className="commercial__card__title__second">HTML / CSS / Git / PHP / Client Serveur</Card.Title>
        </div>
        <div className={open2 ? "commercial__experiences__text" : "hidden"}>
          <Card.Text className="commercial__experiences__title">2ème mois</Card.Text>
          <Card.Title className="commercial__card__title">Découverte</Card.Title>
          <Card.Title className="commercial__card__title__second">JavaScript / DOM / POO / SQL / BootStrap</Card.Title>
        </div>

        <div className={open3 ? "commercial__experiences__text" : "hidden"}>
          <Card.Text className="commercial__experiences__title">3ème mois</Card.Text>
          <Card.Title className="commercial__card__title">On approfondit</Card.Title>
          <Card.Title className="commercial__card__title__second">MVC / Composer / SEO / Git avancé / Back Office</Card.Title>
        </div>

        <div className={open4 ? "commercial__experiences__text" : "hidden"}>
          <Card.Text className="commercial__experiences__title">4ème mois</Card.Text>
          <Card.Title className="commercial__card__title">On fini avec</Card.Title>
          <Card.Title className="commercial__card__title__second">Framework / ORM / API / AJAX / SSH / Déploiement / CMS</Card.Title>
        </div>

        <div className={openReact ? "commercial__experiences__text" : "hidden"}>
          <Card.Text className="commercial__experiences__title">1 mois de spécialisation</Card.Text>
          <Card.Title className="commercial__card__title">Découverte et apprentissage de React </Card.Title>
          <Card.Title className="commercial__card__title__second">React / React Router / Reat Bootstrap / React Redux / useState / useEffect</Card.Title>
        </div>

        <div className={openApo ? "commercial__experiences__text" : "hidden"}>
          <Card.Text className="commercial__experiences__title">L'apothéose</Card.Text>
          <Card.Title className="commercial__card__title">Site créé entièrement en groupe : Oldix</Card.Title>
          <Card.Title className="commercial__card__title__second">Offre concurente de Netflix proposant des films entièrement libres de droits</Card.Title>
          <Card.Title className="commercial__card__title__third"><a href="http://www.oldix.surge.sh" target="_blank">Lien vers Oldix</a></Card.Title>
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
