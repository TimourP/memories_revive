
import React from 'react'
import Render from '../render/Render'
import "./style.scss"

const Customise = () => {
    return (
        <section id="customise-frame">
            <div className='render-container'>
                <h1>Créer votre cadre</h1>
                <p>Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. </p>
                <div className='renders'>
                    <Render/>
                </div>
            </div>
            <div className='action-container'>
                <h2>Personnaliser</h2>
            </div>
        </section>
    )
}

export default Customise