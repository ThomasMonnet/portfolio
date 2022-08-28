import './commercial.scss'
import CTEC from "src/assets/img/ctec.png"
import NRC from "src/assets/img/nrc.png"
import PC from "src/assets/img/PlanetCash.png"
import LDLC from "src/assets/img/ldlc.png"
import McDo from "src/assets/img/mcdo.png"
import Transpole from "src/assets/img/transpole.png"
import Eiffel from "src/assets/img/eiffel.jpg"
import Istem from "src/assets/img/istem.jpg"
import IUT from "src/assets/img/iut_roubaix.png"
import { Card } from 'react-bootstrap'
import { useState, useEffect } from 'react';

const Commercial = () => {

const [ openCTEC, setOpenCTEC ] = useState(false);
const [ openNRC, setOpenNRC ] = useState(false);
const [ openPC, setOpenPC ] = useState(false);
const [ openLDLC, setOpenLDLC ] = useState(false);
const [ openMcDo, setOpenMcDo ] = useState(false);
const [ openTranspole, setOpenTranspole ] = useState(false);
const [ openEiffel, setOpenEiffel ] = useState(true);
const [ openIstem, setOpenIstem ] = useState(false);
const [ openIUT, setOpenIUT ] = useState(false);

const displayCTEC = () => {
  setOpenCTEC(true);
  setOpenNRC(false);
  setOpenPC(false);
  setOpenLDLC(false);
  setOpenMcDo(false);
  setOpenTranspole(false);
  setOpenEiffel(false);
  setOpenIstem(false);
  setOpenIUT(false)
}

const displayNRC = () => {
  setOpenCTEC(false);
  setOpenNRC(true);
  setOpenPC(false);
  setOpenLDLC(false);
  setOpenMcDo(false);
  setOpenTranspole(false);
  setOpenEiffel(false);
  setOpenIstem(false);
  setOpenIUT(false)
}

const displayPC = () => {
  setOpenCTEC(false);
  setOpenNRC(false);
  setOpenPC(true);
  setOpenLDLC(false);
  setOpenMcDo(false);
  setOpenTranspole(false);
  setOpenEiffel(false);
  setOpenIstem(false);
  setOpenIUT(false)
}

const displayLDLC = () => {
  setOpenCTEC(false);
  setOpenNRC(false);
  setOpenPC(false);
  setOpenLDLC(true);
  setOpenMcDo(false);
  setOpenTranspole(false);
  setOpenEiffel(false);
  setOpenIstem(false);
  setOpenIUT(false)
}

const displayMcDo = () => {
  setOpenCTEC(false);
  setOpenNRC(false);
  setOpenPC(false);
  setOpenLDLC(false);
  setOpenMcDo(true);
  setOpenTranspole(false);
  setOpenEiffel(false);
  setOpenIstem(false);
  setOpenIUT(false)
}

const displayTranspole = () => {
  setOpenCTEC(false);
  setOpenNRC(false);
  setOpenPC(false);
  setOpenLDLC(false);
  setOpenMcDo(false);
  setOpenTranspole(true);
  setOpenEiffel(false);
  setOpenIstem(false);
  setOpenIUT(false)
}

const displayEiffel = () => {
  setOpenCTEC(false);
  setOpenNRC(false);
  setOpenPC(false);
  setOpenLDLC(false);
  setOpenMcDo(false);
  setOpenTranspole(false);
  setOpenEiffel(true);
  setOpenIstem(false);
  setOpenIUT(false)
}

const displayIstem = () => {
  setOpenCTEC(false);
  setOpenNRC(false);
  setOpenPC(false);
  setOpenLDLC(false);
  setOpenMcDo(false);
  setOpenTranspole(false);
  setOpenEiffel(false);
  setOpenIstem(true);
  setOpenIUT(false)
}

const displayIUT = () => {
  setOpenCTEC(false);
  setOpenNRC(false);
  setOpenPC(false);
  setOpenLDLC(false);
  setOpenMcDo(false);
  setOpenTranspole(false);
  setOpenEiffel(false);
  setOpenIstem(false);
  setOpenIUT(true)
}

  return (
  <div className="page__size" id="exp__comm">
    <div className="page__espace"></div>
    <Card.Title className="commercial__title" >
      Un profil commercial avec plus de 5 années d'expérience ! 
    </Card.Title>

    <Card className="commercial__card">
      <div className="commercial__experiences__img__container">
        <Card.Title className="commercial__experiences__title">Mes formations</Card.Title>
        <Card.Img src={Eiffel} className={openEiffel ? "commercial__experiences__img__selected" : "commercial__experiences__img"} onMouseEnter={displayEiffel}></Card.Img>
        <div className="commercial__experiences__img__empty"></div>
        <Card.Img src={Istem} className={openIstem ? "commercial__experiences__img__selected" : "commercial__experiences__img"} onMouseEnter={displayIstem}></Card.Img>
        <div className="commercial__experiences__img__empty"></div>
        <Card.Img src={IUT} className={openIUT ? "commercial__experiences__img__selected" : "commercial__experiences__img"} onMouseEnter={displayIUT}></Card.Img>
        <div className="commercial__experiences__img__empty"></div>
      </div>
      
      <div className="commercial__experiences__text__container">
        <div className={openMcDo? "commercial__experiences__text" : "hidden"}>
          <Card.Text className="commercial__experiences__title">McDonald's Lomme</Card.Text>
          <Card.Title className="commercial__card__title">Employé Polyvalent</Card.Title>
          <Card.Title className="commercial__card__title__second">2010 - 2012</Card.Title>
          <Card.Text className="commercial__card__title__third">Contrat étudiant 15h / semaine</Card.Text>
        </div>
        <div className={openCTEC ? "commercial__experiences__text" : "hidden"}>
          <Card.Text className="commercial__experiences__title">CTEC France</Card.Text>
          <Card.Title className="commercial__card__title">Technico-Commercial BtoB en produit de nettoyage industriel</Card.Title>
          <Card.Title className="commercial__card__title__second">2012 - 2013</Card.Title>
          <Card.Text className="commercial__card__title__third">Contrat en apprentissage (1ère année de DUT Technique de Commercialisation)</Card.Text>
        </div>

        <div className={openNRC ? "commercial__experiences__text" : "hidden"}>
          <Card.Text className="commercial__experiences__title">NRC</Card.Text>
          <Card.Title className="commercial__card__title">Téléprospecteur BtoB en informatique</Card.Title>
          <Card.Title className="commercial__card__title__second">2013 - 2014</Card.Title>
          <Card.Text className="commercial__card__title__third">Contrat en apprentissage (2ème année de DUT Technique de Commercialisation)</Card.Text>
        </div>
        <div className={openTranspole ? "commercial__experiences__text" : "hidden"}>
          <Card.Text className="commercial__experiences__title">Transpole (Keolys)</Card.Text>
          <Card.Title className="commercial__card__title">Contrôleur Préventif</Card.Title>
          <Card.Title className="commercial__card__title__second">2014 - 2016</Card.Title>
          <Card.Text className="commercial__card__title__third">Intérim 35h / semaine</Card.Text>
        </div>

        <div className={openPC ? "commercial__experiences__text" : "hidden"}>
          <Card.Text className="commercial__experiences__title">Planet Cash</Card.Text>
          <Card.Title className="commercial__card__title">Acheteur / Vendeur en produits d'occasion</Card.Title>
          <Card.Title className="commercial__card__title__second">2017 - 2018</Card.Title>
          <Card.Text className="commercial__card__title__third">CDI 35h</Card.Text>
        </div>

        <div className={openLDLC ? "commercial__experiences__text" : "hidden"}>
          <Card.Text className="commercial__experiences__title">LDLC Bordeaux</Card.Text>
          <Card.Title className="commercial__card__title">Technicien Vendeur en informatique</Card.Title>
          <Card.Title className="commercial__card__title__second">2019 - 2020</Card.Title>
          <Card.Text className="commercial__card__title__third">CDI 35h</Card.Text>
        </div>

        <div className={openEiffel ? "commercial__experiences__text" : "hidden"}>
          <Card.Text className="commercial__experiences__title">Lycée Gustave Eiffel Armentières</Card.Text>
          <Card.Title className="commercial__card__title">Bac Sciences et Technologies en Laboratoire :<br></br> Option Physique</Card.Title>
          <Card.Title className="commercial__card__title__second">2008 - 2010</Card.Title>
          <Card.Text className="commercial__card__title__third">Obtenu</Card.Text>
        </div>

        <div className={openIstem ? "commercial__experiences__text" : "hidden"}>
          <Card.Text className="commercial__experiences__title">ISTEM Lille</Card.Text>
          <Card.Title className="commercial__card__title">BTS Management des Unités Commerciales</Card.Title>
          <Card.Title className="commercial__card__title__second">2010 - 2012</Card.Title>
          <Card.Text className="commercial__card__title__third">Niveau</Card.Text>
        </div>

        <div className={openIUT ? "commercial__experiences__text" : "hidden"}>
          <Card.Text className="commercial__experiences__title">IUT de Roubaix</Card.Text>
          <Card.Title className="commercial__card__title">DUT Techniques de Commercialisations</Card.Title>
          <Card.Title className="commercial__card__title__second">2012 - 2014</Card.Title>
          <Card.Text className="commercial__card__title__third">Obtenu</Card.Text>
        </div>

      </div>
      <div className="commercial__experiences__img__container">
        <Card.Title className="commercial__experiences__title">Mes expériences</Card.Title>
        <Card.Img src={McDo} className={openMcDo ? "commercial__experiences__img__selected" : "commercial__experiences__img"} onMouseEnter={displayMcDo}></Card.Img>
        <Card.Img src={CTEC} className={openCTEC ? "commercial__experiences__img__selected" : "commercial__experiences__img"} onMouseEnter={displayCTEC}></Card.Img>
        <Card.Img src={NRC} className={openNRC ? "commercial__experiences__img__selected" : "commercial__experiences__img"} onMouseEnter={displayNRC}></Card.Img>
        <Card.Img src={Transpole} className={openTranspole ? "commercial__experiences__img__selected" : "commercial__experiences__img"} onMouseEnter={displayTranspole}></Card.Img>
        <Card.Img src={PC} className={openPC ? "commercial__experiences__img__selected" :"commercial__experiences__img"} onMouseEnter={displayPC}></Card.Img>
        <Card.Img src={LDLC} className={openLDLC ? "commercial__experiences__img__selected" : "commercial__experiences__img"} onMouseEnter={displayLDLC}></Card.Img>
      </div>
  </Card>
  </div>

    
)}

export default Commercial;
