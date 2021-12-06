import './formations.scss'
import formationsData from 'src/data/formations'

const Formations = ({ openMenu, borderStyle }) => (
  <div>
    <ul className={openMenu ? "exp" : "exp__close"}>
      <h1 className="title__page color">Mes formations</h1>
      <iframe 
          src="https://www.youtube.com/embed/Q9K-l2na9zU" 
          title="YouTube video player" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen 
          className={openMenu ? "video__yt border" : "video__yt__close border"} 
          style={borderStyle}>
        </iframe>
        {formationsData.map((form) => (
          <div className="form__item__container">
            <div className="separator"></div>
            <li className="form__item">
              <div className="form__item__container__text">
                <h1 className="form__item__container__text__info__enterprise">Ecole : {form.ecole}</h1>
                <h2 className="form__item__container__text__info__date">Année(s) : {form.date}</h2>
                <h2 className="form__item__container__text__info__type">Poste : {form.type}</h2>
              </div>
            </li>
            <div className="form__item__container__text__img">
              <img className="form__item__img" src={form.img} alt={form.ecole}></img>
              <p className="form__item__text">{form.text}</p>
            </div>
          </div>
        ))}
    </ul>
</div>
)

export default Formations;
