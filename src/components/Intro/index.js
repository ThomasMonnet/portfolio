import 'src/components/Intro/intro.scss';
import { NavLink, Link } from 'react-router-dom';
import accueil from 'src/assets/img/accueil.jpeg';
import Card from 'react-bootstrap/Card';
import Menu from 'src/components/Menu'



const Intro = ({ }) => {
  return (
  <div>
    <div className="intro__title__page__1">
      <h1 className="intro__title__page__1__text"> Bienvenue</h1>
    </div>
    <div className="intro__title__page__2">
      <h1 className="intro__title__page__2__text">Je me présente <br></br> Thomas MONNET</h1>
    </div>
    <div className="intro__title__page__3">
      <h1 className="intro__title__page__3__text">Front End Developper Spécialité React</h1>
    </div>
    <div className="intro__title__page__4">
      <h1 className="intro__title__page__4__text">Passionné par le web et ses technologies</h1>
    </div>
  </div>
)};

// == Export
export default Intro;


{/*     
    <div className={!welcome ? "home__open" : "hidden"}>
      <h2 className="home__title__second"> Développeur Front End React</h2>
    <iframe 
      src="https://www.youtube.com/embed/9_9UKJQxYrE" 
      title="YouTube video player" 
      frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      allowFullScreen 
      className="video__yt"
      >
    </iframe>

    <ul className="home__text__list">
      {technosData.map((techno) => (
        <li className="home__text__list__item">
          <img 
            className="home__text__list__item__img" 
            src={techno.image} 
            alt={techno.name}>
          </img>
          <h3 className="home__text__list__item__name">
            {techno.name}
          </h3>
        </li>
      ))}
    </ul>

    <p className="home__text"> 
      Afin de pouvoir vous promener facilement sur ce site, sachez que vous pouvez à tout moment diminuer la taille du menu de gauche en cliquant simplement sur ma photo de profil. Vous pouvez à tout moment changer la couleur principale du site en cliquant simplement 
      en bas du menu sur "Changer la couleur". Pratique, non ? 
    </p>
    <p className="home__text">
      En tout cas, j'ai vraiment hâte que vous découvriez ce portfolio intégralement et que vous puissiez trouver en moi votre future recrue ! < br/>
      Si tel est le cas, n'hésitez pas à cliquer sur l'icone "Contact" du menu.
    </p>

    <h2 className="home__title__second">Qu'allez vous trouver sur ce site ?</h2>
    <p className="home__text">
      Mon but avec ce site est avant tout de vous montrer ce dont je suis capable, au travers de différentes fonctionnalités ainsi que grâce à différents projets que j'ai pu réaliser jusqu'à aujourd'hui.
    </p>
    <p className="home__text">
        Bien sûr, l'intérêt premier est également de me présenter à vous. C'est pourquoi, sur chaque page du site, vous trouverez une vidéo de présentation de la page que vous regardez ainsi qu'un texte réexpliquant tout ce qui a pu être dit durant la vidéo.
    </p>
    <h2 className="home__title__second">Par où commencer ?</h2>
    <p className="home__text">
      Je vous propose de commencer par apprendre à mieux ce connaître, pour cela, je vous donne rendez vous sur la page   
      <NavLink className="link" 
        to="qui_suis_je" 
        key="qui_suis_je" 
        exact 
      >
        "Qui suis-je?"
      </NavLink>
    </p>
      </div>  
    
    /********************************* V2 *********************************

  <Card className="rouage">
        <div onClick={displayCompetences} className="rouage__container">
          <Card.Img src={competences} className="rouage__1"></Card.Img>
          <Card.Img src={competences} className="rouage__2"></Card.Img>
          <Card.Img src={competences} className="rouage__3"></Card.Img>
        </div>
        <div className={noneComp ? "competence__container" : "hidden"}>
          <div className={displayComp ? "competence__html" : "competence__html__reverse"} onMouseEnter={displayHTML} onMouseLeave={displayNoneHTML}>
            <Card.Img className="competence__img" src={HTML}></Card.Img>
          </div>
          <div className={displayComp ? "competence__css" : "competence__css__reverse"} onMouseEnter={displayCSS} onMouseLeave={displayCSS}>
            <Card.Img className="competence__img" src={CSS}></Card.Img>
          </div>
          <div className={displayComp ? "competence__js" : "competence__js__reverse"}>
            <Card.Img className="competence__img" src={JS}></Card.Img>
          </div>
          <div className={displayComp ? "competence__react" : "competence__react__reverse"}>
            <Card.Img className="competence__img" src={React}></Card.Img>
          </div>
          <div className={displayComp ? "competence__php" : "competence__php__reverse"}>
            <Card.Img className="competence__img" src={PHP}></Card.Img>
          </div>
        </div>
        <div className={openArea ? "competence__area" : "competence__area__reverse"}>
          <div className="competence__area__html__container">
            <div className={openHTML ? "competence__area__html" : "hidden"}>
              <p>C'est avec le HTML5 que j'ai commencé à apprendre le métier de développeur. D'abord par moi même, puis en formation chez O'Clock.</p>
              <p className="competence__area__level">Niveau de compétence : <span className="star_1"></span> <span className="star_2"></span> <span className="star_3"></span> <span className="star_4"></span> <span className="star_5"></span></p>
            </div>
              <div className={openHTML ? "competence__area__html__pointe pointe" : "hidden"}></div>
          </div>
          <div className="competence__area__css__container">
            <div className={openCSS ? "competence__area__css" : "hidden"}>
              <p>C'est avec le css5 que j'ai commencé à apprendre le métier de développeur. D'abord par moi même, puis en formation chez O'Clock.</p>
              <p className="competence__area__level">Niveau de compétence : <span className="star_1"></span> <span className="star_2"></span> <span className="star_3"></span> <span className="star_4"></span> <span className="star_5"></span></p>
            </div>
              <div className={openCSS ? "competence__area__css__pointe pointe" : "hidden"}></div>
          </div>
        </div>
      </Card>*/}
