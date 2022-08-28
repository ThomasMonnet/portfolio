import {useState} from 'react'
import { Link } from 'react-router-dom'

import Qui from 'src/components/Qui'
import Commercial from 'src/components/Commercial'
import Reconversion from 'src/components/Reconversion'
import Projets from 'src/components/Projets'

const Accueil = () => {

  return (
    <div className="home__accueil animation">
      <Qui />
      <Commercial />
      <Reconversion />
      <Projets />
    </div>
  )

}

export default Accueil;
