import React, { useContext } from 'react'
import "./style.scss"
import { Link } from 'react-router-dom'
import CircularSelector from '../../frames/circular_selector/CircularSelector'
import { frame_selector, style_selector } from '../../../constants/frame'
import CustomisationContext from '../../../contexts/CustomisationContext'
import Render from '../../frames/render/Render'
import full_picture from "../../../assets/home/porsche-model-1.png"

const Hero = () => {
  const {frame, set_frame} = useContext(CustomisationContext);

  return (
    <section id="home-hero">
        <div className='title-container'>
            <h1>L'art automobile encadré</h1>
            <span className='absolute-frame'>cadres</span>
            <p>Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. </p>
            <Link to="frames" className='main-button'>
                Créer son cadre
            </Link>
            <CircularSelector title={"Style"} subtitle={"Fond du cadre"} list={style_selector} select={(id) => set_frame({style: id})} selected_id={frame.style} />
            <CircularSelector title={"Matière"} subtitle={"Cadre"} list={frame_selector} select={(id) => set_frame({frame: id})} selected_id={frame.frame} />
        </div>
        <div className='hero-frame-container'>
          <div className='renders'>
              <Render is_home={true}/>
          </div>
          <div className='car-container'>
            <img src={full_picture} className="car-full-pic" />
            <div className='product-headlines'>
              <div className='top-data'>
                <div className='data'>
                  <span className='value'>320 km/h</span>
                  <span className='description'>Vitesse max</span>
                </div>
                <div className='data'>
                  <span className='value'>2,8 s</span>
                  <span className='description'>0-100 km/h</span>
                </div>
                <div className='data'>
                  <span className='value'>650 cv</span>
                  <span className='description'>Puissance</span>
                </div>
              </div>
              <p className='description'>La Porsche 911 Turbo 2022 est la définition même de la beauté brute, avec son design intemporel et sa technologie de pointe.</p>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Hero