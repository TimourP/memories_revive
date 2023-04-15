import React from 'react'
import frame_on_wall from "../../../assets/home/frame-on-wall.png"
import BigTitle from '../../main/big_title/BigTitle'
import "./style.scss"
import { Link } from 'react-router-dom'

const TextImageSection = () => {
  return (
    <section id="home-text-image-section">
        <div className='image-container'>
            <img src={frame_on_wall}/>
        </div>
        <div className='text-container'>
            <BigTitle title={"Plus qu'un simple cadre,<br/>Des émotions"} subtitle={"Nos cadres"} need_divider={true} />
            <div className='main-text'>
                <p>Une voiture peut être plus qu'un simple moyen de transport, elle peut également susciter des émotions intenses et des souvenirs précieux. </p>
                <p>Pour ceux qui ont eu la chance de posséder leur propre voiture, ils se rappellent de la fierté et de la liberté qu'ils ont ressenties lorsqu'ils ont pris la route pour la première fois, ainsi que des moments inoubliables qu'ils ont partagés avec leurs amis et leur famille. </p>
                <p>Le désir d'une voiture spécifique représente bien plus qu'un simple caprice. C'est un symbole de la réussite, de la liberté, de l'aventure et du rêve, qui peut susciter des émotions profondes comme l'histoire de l'automobile, ou encore la passion pour la technologie et la performance.</p>
            </div>
            <Link to="/frame" className='main-button'>
                Créer son cadre
            </Link>
        </div>
    </section>
  )
}

export default TextImageSection