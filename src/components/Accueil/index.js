import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import 'src/components/Accueil/accueil.scss'
import Commercial from 'src/assets/img/commercial.jpg'
import Dev from 'src/assets/img/developpeur.png'
import {useState} from 'react'

const Accueil = () => {

  const [ openCommercial, setOpenCommercial ] = useState(false);
  const [ openCard, setOpenCard ] = useState(false);

  const displayCommercial = () => {
    setOpenCommercial(!openCommercial)
    setOpenCard(!openCard)
  }

  const back = () => {
    setOpenCard(false)
    setOpenCommercial(false)
  }

  const backgroundCommercial = {
    backgroundImage: `url(${Commercial})`,
    backgoundRepeat: 'no-repeat',
    backgroundPosition: 'top',
    backgroundSize: 'cover',
  }

  const backgroundDev = {
    backgroundImage: `url(${Dev})`,
    backgoundRepeat: 'no-repeat',
    backgroundPosition: 'bottom',
    backgroundSize: 'cover',
  }




  return (
    <div className="home__accueil animation">
      <h1 className={openCard ? "hidden" : "home__title"}>Mon parcours</h1>
    <div className={openCard ? "hidden" : "home__card__container animation"}>
      <Card className="home__card" onClick={displayCommercial}>
        <Card.Title className="home__card__title">Un ancien commercial...</Card.Title>
        <div className="separator"></div>
        <Card.Text className="home__card__text">Mes premières expériences professionnelles sont en tant que Commercial. Sur le terrain, en boutique, spécialisé ou non, découvrez mon parcours dans le Commerce !</Card.Text>
        <div className="home__card__background" style={backgroundCommercial}></div>
      </Card>

      <Card className="home__card">
        <Card.Title className="home__card__title">... en reconversion</Card.Title>
        <div className="separator"></div>
        <Card.Text className="home__card__text">Depuis Juin 2021, mon parcours professionnel a changé, dans le but de travailler dans un univers qui me correspond bien mieux : Le développement Web !</Card.Text>
        <div className="home__card__background" style={backgroundDev}></div>
      </Card>
    </div>

    <div className={openCommercial ? "home__accueil" : "hidden"}>
      <h1 className="home__title"> Mon parcours de Commercial</h1>
      <Button onClick={back}>Retour</Button>
    </div>
    </div>
  )

}

export default Accueil;
