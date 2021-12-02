import './contact.scss';
import Profil from 'src/assets/img/profil.jpeg';
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = ({ openMenu, colorStyle, backgroundStyle }) => {

  const defaultColor ='#6d1c1e';


  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('my_gmail', 'message_id', form.current, 'user_UNNezh5bcbONbVJcsuVVJ')
    .then((result) => {
      alert("Votre mail a bien été envoyé, je vous recontacte dans les plus brefs délais");
      }, (error) => {
      alert("Erreur sur l'envoie, veuillez vérifier vos informations.")
      });
};

  return (
  <div className={openMenu ? "home" : "home__close"}>
    <h1 className="title__page color" style={colorStyle}>Me contacter</h1>
    <div className="contact__container card" style={backgroundStyle}>
      <div className="contact__container__left">
      <h2 className="contact__container__title">Par téléphone</h2>
        <img className="contact__container__img" src={Profil} alt="Thomas Monnet"></img>
        <div className="contact__container__text">
          <h1 className="contact__container__text__title">Thomas Monnet</h1>
          <p className="contact__container__text__info">06.12.11.65.35</p>
          <p className="contact__container__text__info">thomas.monnet.9@gmail.com</p>
          <p className="contact__container__text__info">21 D Tripoteau Nord, 33230 Abzac</p>
        </div>
      </div>
      <div className="contact__container__right" 
        style= {{ backdropFilter: "brightness(143%)" }, { backdropFilter: "saturate(35%)" }}>
          <h2 className="contact__container__title">Ou par mail</h2>
            <form ref={form} className="contact__container__form" onSubmit={sendEmail}>
              <label className="contact__container__form__item__label">Votre Nom / Entreprise</label>
              <input className="contact__container__form__item__input" type="text" name="user_name" />
              <label className="contact__container__form__item__label ">Email</label>
              <input className="contact__container__form__item__input" type="email" name="user_email" />
              <label className="contact__container__form__item__label ">Numéro de téléphone</label>
              <input className="contact__container__form__item__input" type="tel" name="user_phone" />
              <label className="contact__container__form__item__label">Votre Message</label>
              <textarea className="contact__container__form__item__textarea" name="message" />
              <input className="contact__container__form__submit" type="submit" value="Envoyer" />
            </form>
          </div>
        </div>
    </div>
)};

// == Export
export default Contact;
