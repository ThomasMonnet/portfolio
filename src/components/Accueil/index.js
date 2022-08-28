import {useState} from 'react'
import { Link } from 'react-router-dom'

import Qui from 'src/components/Qui'
import Commercial from 'src/components/Commercial'
import Reconversion from 'src/components/Reconversion'

const Accueil = () => {

  return (
    <div className="home__accueil animation">
      <Qui />
      <Commercial />
      <Reconversion />
    </div>
  )

}

export default Accueil;
