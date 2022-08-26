import './experiences.scss'
import experiencesData from 'src/data/experiences'

const Experiences = ({ openMenu, borderStyle }) => (
  <div>
  <ul className={openMenu ? "exp animation" : "exp__close animation"}>
  <h1 className="title__page color">Mes expériences</h1>
  <iframe 
      src="https://www.youtube.com/embed/eMuklhI9s0I" 
      title="YouTube video player" 
      frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      allowFullScreen 
      className={openMenu ? "video__yt border" : "video__yt__close border"} 
      style={borderStyle}>
    </iframe>
    {experiencesData.map((exp) => (
      <div className="exp__item__container">
        <div className="separator"></div>
        <li className="exp__item">
          <div className="exp__item__container__text">
            <h1 className="exp__item__container__text__info__enterprise">Entreprise : {exp.enterprise}</h1>
            <h2 className="exp__item__container__text__info__date">Année(s) : {exp.date}</h2>
            <h2 className="exp__item__container__text__info__type">Poste : {exp.type}</h2>
          </div>
        </li>
        <div className="exp__item__container__text__img">
          <img className="exp__item__img" src={exp.img} alt={exp.enterprise}></img>
          <p className="exp__item__text">{exp.text}</p>
        </div>
      </div>
    ))}
  </ul>
</div>
)

export default Experiences;
