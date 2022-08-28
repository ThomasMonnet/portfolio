import './reconversion.scss'
import { Card } from 'react-bootstrap'
import { useState, useEffect } from 'react';

const Reconversion = () => (
  <div className="page__size" id="reconversion">
    <div className="page__espace"></div>
    <Card.Title className="reconversion__title">Une reconversion qui débute officiellement en Juin 2021</Card.Title>
    <div className="reconversion__card">
      <Card className="card__page">
        <div className ="reconversion__card__separator">
          <Card.Title className="reconversion__card__title">3 mois de socle en 8 saisons</Card.Title>
          <Card.Text className="reconversion__card__text">
            <span className="reconversion__card__text__strong">Première saison</span> <span className="reconversion__card__text__strong__second">(sem.01-02):</span> HTML / CSS / Git
          </Card.Text>
          
          <Card.Text className="reconversion__card__text">
            <span className="reconversion__card__text__strong">Seconde saison</span> <span className="reconversion__card__text__strong__second">(sem.02-04):</span> PHP / Client Serveur
          </Card.Text>
          
          <Card.Text className="reconversion__card__text">
            <span className="reconversion__card__text__strong">Troisième saison </span> <span className="reconversion__card__text__strong__second">(sem.04-05):</span> JavaScript / Dom
          </Card.Text>
          
          <Card.Text className="reconversion__card__text">
            <span className="reconversion__card__text__strong">Quatrième saison</span> <span className="reconversion__card__text__strong__second">(sem.06-07):</span> POO / SQL / RWD / bootstrap 
          </Card.Text>
          
          <Card.Text className="reconversion__card__text">
            <span className="reconversion__card__text__strong">Cinquième saison</span> <span className="reconversion__card__text__strong__second">(sem.08-09):</span> MVC / Composer / SEO / Git Avancé
          </Card.Text>
          
          <Card.Text className="reconversion__card__text">
            <span className="reconversion__card__text__strong">Sixième saison</span> <span className="reconversion__card__text__strong__second">(sem.10-11):</span> BackOffice / Sécurité
          </Card.Text>
          
          <Card.Text className="reconversion__card__text">
            <span className="reconversion__card__text__strong">Septième saison</span> <span className="reconversion__card__text__strong__second">(sem.12-13):</span> Framework / ORM / API / AJAX
          </Card.Text>
          
          <Card.Text className="reconversion__card__text">
            <span className="reconversion__card__text__strong">Huitième saison</span> <span className="reconversion__card__text__strong__second">(sem.13-14):</span> AdminSys / SSH / Deploiement / CMS
          </Card.Text>
        </div>

      <div className="separator__vertical"></div>

      <div className ="reconversion__card__separator">
        <Card.Title className="reconversion__card__title">Puis 2 mois de spécialisation React</Card.Title>
        <Card.Text className="reconversion__card__text">
            <span className="reconversion__card__text__strong">Premier mois</span> <span className="reconversion__card__text__strong__second">(sem.15-16-17-18):</span> Travail intensif sur la découverte de React
          </Card.Text>
          
          <Card.Text className="reconversion__card__text">
            <span className="reconversion__card__text__strong">Second mois</span> <span className="reconversion__card__text__strong__second">(sem.19-20-21-22):</span> Mise en place d'un projet de groupe pour créer un site intégralement. Pour ma part, c'était sur Oldix, un concurrent de Netflix mais uniquement avec des Films libres de droits. Vous pouvez y accéder <a href="http://www.oldix.surge.sh" target="_blank">Juste ici</a>
          </Card.Text>
      </div>
      </Card>
    </div>
  </div>
)

export default Reconversion;
