import Profil from 'src/assets/img/profil.jpeg';
import GithubIcon from 'src/assets/img/github_icon.png';
import LinkedinIcon from 'src/assets/img/linkedin_icon.png';
import menuData from 'src/data/menu';
import { NavLink } from 'react-router-dom';
import './header.scss';

const Header = () => {
  let colorUser;
  const defaultColor ='#5a2122';

  const updateFirst = (event) => {
    const background = document.querySelector('.background');
    if (background) {
      background.style.background = event.target.value;
    }
  };

  const startup = () => {
    colorUser = document.querySelector('#colorUser');
    colorUser.value = defaultColor;
    colorUser.addEventListener('input', updateFirst, false);
    colorUser.select();
  };

  window.addEventListener('load', startup, false);

  return (
    <div className="header__container background" style={{ background: defaultColor }}>
      <div className="header__top">
        <div className="header__top__profil">
          <img className="header__top__profil__img" src={Profil} alt="Profil" />
        </div>
        <div className="header__top__social">
          <img className="header__top__social__icon" src={GithubIcon} alt="Github" />
          <img className="header__top__social__icon" src={LinkedinIcon} alt="Linkedin" />
          <p className="header__top__social__menu">Me contacter</p>
        </div>
      </div>
      <div className="header__mid">
        <nav className="header__mid__menu">
          {menuData.map((menu) => (
            <NavLink
              className="header__mid__menu__item"
              to={menu.route}
              key={menu.label}
              activeClassName="header__mid__menu__item__selected"
              exact
            >
              {menu.label}
            </NavLink>
          ))}
        </nav>
      </div>
      <div className="header__bot">
        <>{ /* eslint-disable-next-line jsx-a11y/label-has-associated-control */ }</>
        <label className="header__bot__menu" htmlFor="colorUser">
          Changer la couleur
        </label>
        <input className="header__bot__menu__color" type="color" id="colorUser" name="head" value={colorUser} />
      </div>
    </div>
  );
};

export default Header;
