import './projets.scss';
import projetsData from 'src/data/projets'

const Projets = ({ openMenu }) => (
  <ul className={openMenu ? "projets" : "projets__close"}>
  {projetsData.map((projet) => (
    <li className="projets__item">
      <img className="projets__item__img" src={projet.image} alt={projet.name}></img>
      <h3 className="projets__item__name">{projet.name}</h3>
      <p className="projets__item__text">{projet.text}</p>
    </li>
  ))}
</ul>
)

export default Projets;
