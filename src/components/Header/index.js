import Profil from 'src/assets/img/profil.jpeg';
import GithubIcon from 'src/assets/img/github_icon.png';
import LinkedinIcon from 'src/assets/img/linkedin_icon.png';
import ContactIcon from 'src/assets/img/contact_icon.png';
import Arrow from 'src/assets/img/arrow.png'
import menuData from 'src/data/menu';
import { NavLink } from 'react-router-dom';
import './header.scss';
import { useState } from 'react';

const Header = ({openMenu, setOpenMenu, colorUser}) => {

  const defaultColor ='#5a2122';
  // ************************ ETAT DE L'OUVERTURE DU MENU ************************ //  
  const changeOpenMenu = () => {
    setOpenMenu(!openMenu)
  }
  
  // ************************ AFFICHAGE DU SITE ************************ //

  return (
    <div className={openMenu ? "header__container background" : "header__container__close background"} style={{ background: defaultColor }}>
      <div className="header__top">
        <div className="header__top__profil">
          <img className={openMenu ? "header__top__profil__img" : "header__top__profil__img__close" } src={Profil} alt="Profil" onClick={changeOpenMenu}/>
          <img className={openMenu ? "header__top__profil__special" : "header__top__profil__special__close background"} onClick={changeOpenMenu} src={Arrow} alt="arrow" />
        </div>
        <div className={openMenu ? "header__top__social" : "header__top__social__close"}>
          <a href="https://github.com/ThomasMonnet?tab=repositories" target="_blank">
            <img className="header__top__social__icon" src={GithubIcon} alt="Github" />
          </a>
          <a href="https://www.linkedin.com/in/thomas-monnet-b8154377/" target="_blank">
            <img className="header__top__social__icon" src={LinkedinIcon} alt="Linkedin" />
          </a>
          <NavLink to="/me_contacter" exact>
            <img className="header__top__social__icon" src={ContactIcon} alt="contact" />
          </NavLink>
        </div>
      </div>
      <div className="header__mid">
        <nav className="header__mid__menu">
          {menuData.map((menu) => (
            <div className="header__mid__menu__container">
              <NavLink
                className={openMenu ? "header__mid__menu__item" : "header__mid__menu__item__close"}
                to={menu.route}
                key={menu.label}
                activeClassName="header__mid__menu__item__selected"
                exact
              >
                <p className={openMenu ? "header__mid__menu__special" : "header__mid__menu__special__close"}>&#9830;</p>
                {menu.label}
              </NavLink>
            </div>
          ))}
        </nav>
      </div>
      <div className="header__bot">
        <>{ /* eslint-disable-next-line jsx-a11y/label-has-associated-control */ }</>
        {openMenu ? <label className="header__bot__menu" htmlFor="colorUser">
          Changer la couleur
        </label>
        :
        <label className="header__bot__menu__close" htmlFor="colorUser">
          &#35;
        </label>
        }
        <input className="header__bot__menu__color" type="color" id="colorUser" name="head" value={colorUser} />
      </div>
    </div>
  );
};

export default Header;
