import './commercial.scss'
import CTEC from "src/assets/img/ctec.png"
import NRC from "src/assets/img/nrc.png"
import PC from "src/assets/img/PlanetCash.png"
import LDLC from "src/assets/img/ldlc.png"
import McDo from "src/assets/img/mcdo.png"
import Transpole from "src/assets/img/transpole.png"
import { Card } from 'react-bootstrap'
import { useState, useEffect } from 'react';

const Commercial = () => {

const [ openCTEC, setOpenCTEC ] = useState(true);
const [ openNRC, setOpenNRC ] = useState(false);
const [ openPC, setOpenPC ] = useState(false);
const [ openLDLC, setOpenLDLC ] = useState(false);
const [ openMcDo, setOpenMcDo ] = useState(true);
const [ openTranspole, setOpenTranspole ] = useState(false);

const displayCTEC = () => {
  setOpenCTEC(true);
  setOpenNRC(false);
  setOpenPC(false);
  setOpenLDLC(false);
}

const displayNRC = () => {
  setOpenCTEC(false);
  setOpenNRC(true);
  setOpenPC(false);
  setOpenLDLC(false);
}

const displayPC = () => {
  setOpenCTEC(false);
  setOpenNRC(false);
  setOpenPC(true);
  setOpenLDLC(false);
}

const displayLDLC = () => {
  setOpenCTEC(false);
  setOpenNRC(false);
  setOpenPC(false);
  setOpenLDLC(true);
}

const displayMcDo = () => {
  setOpenMcDo(true);
  setOpenTranspole(false);
}

const displayTranspole = () => {
  setOpenMcDo(false);
  setOpenTranspole(true);
}

  return (
  <div className="page__size" id="exp__comm">
    <div className="page__espace"></div>
    <Card.Title className="commercial__title" >
      Un profil commercial avec plus de 5 années d'expérience ! 
    </Card.Title>
    <div className="commercial__experiences__img__container">
      <Card.Img src={CTEC} className={openCTEC ? "commercial__experiences__img__selected" : "commercial__experiences__img"} onMouseEnter={displayCTEC}></Card.Img>
      <Card.Img src={NRC} className={openNRC ? "commercial__experiences__img__selected" : "commercial__experiences__img"} onMouseEnter={displayNRC}></Card.Img>
      <Card.Img src={PC} className={openPC ? "commercial__experiences__img__selected" :"commercial__experiences__img"} onMouseEnter={displayPC}></Card.Img>
      <Card.Img src={LDLC} className={openLDLC ? "commercial__experiences__img__selected" : "commercial__experiences__img"} onMouseEnter={displayLDLC}></Card.Img>
    </div>

    <div className={openCTEC ? "commercial__experiences__text" : "hidden"}>
      <Card className="commercial__card">
        <Card.Title className="commercial__card__title">Technico-Commercial en alternance</Card.Title>
        <Card.Text className="commercial__card__text">CTEC France est une entreprise qui vend des solutions de nettoyage industriel. J'avais pour mission de prospecter et commercialiser les produits auprès de clients professionnels. C'est d'ailleurs à ce moment là que j'ai développer mon premier site intranet : ce dernier avait pour objectif de regrouper tous nos clients sur une carte Google Maps avec toutes leurs commandes</Card.Text>
      </Card>
    </div>

    <div className={openNRC ? "commercial__experiences__text" : "hidden"}>
      <Card className="commercial__card">
        <Card.Title className="commercial__card__title">Téléprospecteur en alternance</Card.Title>
        <Card.Text className="commercial__card__text">Chez NRC, j'avais pour mission de prospecter des clients potentiels professionnels par téléphone. Nous proposions du matériel informatique ainsi que des logiciels de gestion, notamment SAGE. Mon but était de convaincre les prospects de prendre un rendez-vous physique avec l'un de nos commerciaux de terrain afin qu'il puisse lui faire une présentation approfondie de nos solutions.</Card.Text>
      </Card>
    </div>

    <div className={openPC ? "commercial__experiences__text" : "hidden"}>
      <Card className="commercial__card">
        <Card.Title className="commercial__card__title">Acheteur / Vendeur</Card.Title>
        <Card.Text className="commercial__card__text">Etre Acheteur / Vendeur chez Planet Cash signifie... acheter et revendre des produits. Super, non ? En tout cas, cette expérience m'a permis de grandement m'améliorer sur la négociation, l'entretien d'un magasin et de ses rayons, le travail en équipe, et j'ai même eu l'occasion de former un apprenti !</Card.Text>
      </Card>
    </div>

    <div className={openLDLC ? "commercial__experiences__text" : "hidden"}>
      <Card className="commercial__card">
        <Card.Title className="commercial__card__title">Technicien Vendeur Informatique</Card.Title>
        <Card.Text className="commercial__card__text">Ma dernière expérience dans le domaine du commerce consistait à développer un magasin d'informatique qui venait d'ouvrir sous le nom LDLC. Le travail en équipe a été l'un des points clé qui nous a permis de réussir cette mission. Mon rôle consistait à faire l'accueil de la clientèle, gérer les caisses et la réserve, développer les rayons et faire de la réparation informatique</Card.Text>
      </Card>
    </div>

    <Card.Title className="commercial__title__second" >
      Sans oublier quelques expériences similaires, telles que :
    </Card.Title>
    
    <div className="commercial__experiences__img__container">
      <Card.Img src={McDo} className={openMcDo ? "commercial__experiences__img__selected" : "commercial__experiences__img"} onMouseEnter={displayMcDo}></Card.Img>
      <Card.Img src={Transpole} className={openTranspole ? "commercial__experiences__img__selected" : "commercial__experiences__img"} onMouseEnter={displayTranspole}></Card.Img>
    </div>

    <div className={openMcDo? "commercial__experiences__text" : "hidden"}>
      <Card className="commercial__card">
        <Card.Title className="commercial__card__title">Employé Polyvalent</Card.Title>
        <Card.Text className="commercial__card__text">Lorsque j'étais employé polyvalent chez McDonald's, mes missions étaient diverses : Accueil de la clientèle, prise de commandes, préparation des commandes, entretien de la salle ou encore, lors d'un stage, l'organisation du planning du personnel.</Card.Text>
      </Card>
    </div>
    <div className={openTranspole ? "commercial__experiences__text" : "hidden"}>
      <Card className="commercial__card">
        <Card.Title className="commercial__card__title">Contrôleur préventif en Intérim</Card.Title>
        <Card.Text className="commercial__card__text">En tant que Contrôleur, je n'étais pas très apprécié. Forcément, vu que les gens voulaient absolument prendre les transports en commun sans ticket ! Mais les autres clients étaient ravi d'avoir quelqu'un sur qui s'appuyer pour s'orienter, ou savoir quel ticket ils devaient prendre.</Card.Text>
      </Card>
    </div>
  </div>

    
)}

export default Commercial;
