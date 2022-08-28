import './projets.scss';
import projetsData from 'src/data/projets'
import Oldix from 'src/assets/img/oldix_icon.png'
import { Card } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import Oldix1 from 'src/assets/img/oldix1.png'
import Oldix2 from 'src/assets/img/oldix2.png'
import Oldix3 from 'src/assets/img/oldix3.png'
import Oldix4 from 'src/assets/img/oldix4.png'
import Oldix5 from 'src/assets/img/oldix5.png'
import Portfolio from 'src/assets/img/profil.jpeg'
import NON from 'src/assets/img/profil.jpeg'

const Projets = () => {
  
  const [ openOldix, setOpenOldix ] = useState(false);
  const [ openPortfolio, setOpenPortfolio ] = useState(false);
  const [ openNon, setOpenNon ] = useState(false);
  const [ img1, setImg1 ] = useState(true);
  const [ img2, setImg2 ] = useState(false);
  const [ img3, setImg3 ] = useState(false);
  const [ img4, setImg4 ] = useState(false);
  const [ img5, setImg5 ] = useState(false);

  const displayOldix = () => {
    setOpenOldix(true);
    setOpenPortfolio(false);
    setOpenNon(false);
  }

  const displayPortfolio = () => {
    setOpenOldix(false);
    setOpenPortfolio(true);
    setOpenNon(false);
  }

  const displayNon = () => {
    setOpenOldix(false);
    setOpenPortfolio(false);
    setOpenNon(true);
  }
  
  return (
  <div className="page__size" id="projets">
    <div className="page__espace"></div>
    <Card className="commercial__card">
      <div className="commercial__experiences__img__container">
        <Card.Title className="commercial__experiences__title">Tous mes projets</Card.Title>
        <Card.Img src={Oldix} className={openOldix ? "commercial__experiences__img__selected" : "commercial__experiences__img"} onMouseEnter={displayOldix}></Card.Img>
        <Card.Img src={Portfolio} className={openPortfolio ? "commercial__experiences__img__selected" : "commercial__experiences__img"} onMouseEnter={displayPortfolio}></Card.Img>
        <Card.Img src={NON} className={openNon ? "commercial__experiences__img__selected" : "commercial__experiences__img"}onMouseEnter={displayNon}></Card.Img>
      </div>

      <div className="commercial__experiences__text__container">
        <div className={openOldix ? "commercial__experiences__text" : "hidden"}>
          <Card.Title className="commercial__card__title">Oldix</Card.Title>
          <Card.Img src={Oldix1} className={img1 ? "projets__img__big" : "projets__img__little"}></Card.Img>
          <Card.Img src={Oldix2} className={img2 ? "projets__img__big" : "projets__img__little"}></Card.Img>
          <Card.Img src={Oldix3} className={img3 ? "projets__img__big" : "projets__img__little"}></Card.Img>
          <Card.Img src={Oldix4} className={img4 ? "projets__img__big" : "projets__img__little"}></Card.Img>
          <Card.Img src={Oldix5} className={img5 ? "projets__img__big" : "projets__img__little"}></Card.Img>
        </div>
        </div>
    </Card>
</div>
)}

export default Projets;
