import './qui.scss';
import Background from 'src/assets/img/web_dev.jpg';
import connaissancesData from 'src/data/connaissances';
import { NavLink } from 'react-router-dom';

const Qui = ({ openMenu, colorStyle, borderStyle, linkStyle }) => {

  const backgroundImageStyle = {
    width: "75%",
    height: "300px",
    backgroundImage: "url(" + Background + ")"
  }

  return (
  <div className={openMenu ? "home" : "home__close"}>
    <h1 className="title__page color" style={colorStyle}>Qui suis-je ?</h1>
    
    <iframe 
      src="https://www.youtube.com/embed/M0pOMVCUY50" 
      title="YouTube video player" 
      frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      allowFullScreen 
      className={openMenu ? "video__yt border" : "video__yt__close border"} 
      style={borderStyle}>
    </iframe>


    <h2 className="home__title__second"> Un ancien Commercial</h2>

    <p className="home__text">
      Je m'appelle Thomas Monnet, j'ai 29 ans et j'habite à Abzac, en Gironde. Au début de ma vie professionnelle, j'ai choisi le milieu du commerce afin de devenir Vendeur informatique (qui était déjà ma passion à l'époque). J'ai donc effectué différentes formations en lien avec le commerce, que vous pouvez retrouver 
      <a 
      href="/formations" 
      className="link__text">
        juste ici
        </a>
        . Suite à ces nouvelles compétences, j'ai continué dans ce milieu de manière à bien en comprendre tous les aspects notamment en tant que Préparateur de commande chez McDo, ou encore en Technicien Vendeur chez LDLC. N'hésitez pas à aller voir plus en détails toutes mes expériences
        <a 
        href="/experiences"
        className="link__text">
          en allant sur la page "Expériences".
        </a>
    </p>
    <div style={ backgroundImageStyle } className="home__text__img"></div>

    <h2 className="home__title__second"> Un Développeur React en reconversion</h2>

    <p className="home__text"> 
      En date du 7 Juin 2021, j'ai entamé ma reconversion professionnelle et j'ai découvert ma nouvelle vie : Celle de Développeur Web !
    </p>
    <p className="home__text">
      Il faut dire que les débuts ont été déroutants, mais grâce à l'école O'Clock, j'ai vraiment réussi à avoir des bases solides en tant que Développeur et je suis maintenant capable de coder différents projets seul ou en équipe. A travers mon 
      <a href="https://github.com/ThomasMonnet?tab=repositories" className="link__text" target="_blank">
        repo GitHub
      </a>
      , vous pourrez voir les différents projets sur lesquels j'ai eu la chance de pouvoir travailler. Grâce à cette formation intense, j'ai pu découvrir :
      <ul className="home__text__list">
      {connaissancesData.map((connaissances) => (
        <li className="home__text__list__item">
          <img 
            className="home__text__list__item__img" 
            src={connaissances.image} 
            alt={connaissances.name}>
          </img>
          <h3 className="home__text__list__item__name">
            {connaissances.name}
          </h3>
        </li>
      ))}
    </ul>
    </p>

    <h2 className="home__title__second">Et pour la suite ?</h2>
    <p className="home__text">
      Mon objectif actuel est de trouver un emploi de Développeur Web avec une préférence pour continuer de développer mes compétences sur la technologie React. Pour autant, je suis ouvert aux propositions de stage, d'alternance, de CDD et de CDI. En attendant cette opportunité, je continuerai d'alimenter ce site avec différents projets que je réaliserai seul ou avec des collègues. 
    </p>
  </div>

)};

// == Export
export default Qui;
