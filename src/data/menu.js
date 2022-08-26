import accueil from 'src/assets/img/accueil.png';
import qui from 'src/assets/img/qui.png';
import formation from 'src/assets/img/formation.png';
import exp from 'src/assets/img/exp.png';
import projet from 'src/assets/img/projet.png';



export default [
  {
    route: '/',
    label: 'Accueil',
    name: "accueil"
  },
  {
    route: '/qui_suis_je',
    label: 'Qui suis-je ?',
    name: "qui"
  },
  {
    route: '/formations',
    label: 'Mes formations',
    name: formation
  },
  {
    route: '/experiences',
    label: 'Mes expériences',
    name: "experiences"
  },
  {
    route: '/projets',
    label: 'Mes projets',
    name: "projets"
  },
];
