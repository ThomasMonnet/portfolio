import 'src/components/Home/home.scss';
import technosData from 'src/data/technos';
import { NavLink } from 'react-router-dom';

const Home = ({ openMenu, colorStyle, borderStyle, linkStyle }) => {
  const defaultColor ='#6d1c1e';

  return (
  <div className={openMenu ? "home" : "home__close"}>
    <h1 className="title__page color" style={colorStyle}> Bienvenue sur le portfolio de Thomas MONNET</h1>
    <iframe 
      src="https://www.youtube.com/embed/9_9UKJQxYrE" 
      title="YouTube video player" 
      frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      allowFullScreen 
      className={openMenu ? "video__yt border" : "video__yt__close border"} 
      style={borderStyle}>
    </iframe>


    <h2 className="home__title__second"> Vous êtes à la recherche d'un nouveau Développeur Web ? Vous êtes au bon endroit !</h2>

    <p className="home__text">
      Ce site est entièrement réalisé seul, sans framework et avec les technologies suivantes :
    </p>
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
        style={linkStyle} 
        to="qui_suis_je" 
        key="qui_suis_je" 
        exact 
      >
        "Qui suis-je?"
      </NavLink>
    </p>
  </div>

)};

// == Export
export default Home;
