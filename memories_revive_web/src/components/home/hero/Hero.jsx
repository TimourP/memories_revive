import React from 'react'
import "./style.scss"
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section id="home-hero">
        <div className='title-container'>
            <h1>L'art automobile encadré</h1>
            <span className='absolute-frame'>cadres</span>
            <p>Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. </p>
            <Link to="/frame" className='main-button'>
                Créer son cadre
            </Link>
        </div>
    </section>
  )
}

export default Hero