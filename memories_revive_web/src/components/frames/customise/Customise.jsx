
import React, { useContext } from 'react'
import Render from '../render/Render'
import "./style.scss"
import CircularSelector from '../circular_selector/CircularSelector'
import CustomisationContext from '../../../contexts/CustomisationContext'
import { frame_selector, style_selector } from '../../../constants/frame'


const Customise = () => {
    const {frame, set_frame} = useContext(CustomisationContext);

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
                <CircularSelector title={"Style"} subtitle={"Fond du cadre"} list={style_selector} select={(id) => set_frame({style: id})} selected_id={frame.style} />
                <CircularSelector title={"Matière"} subtitle={"Cadre"} list={frame_selector} select={(id) => set_frame({frame: id})} selected_id={frame.frame} />
            </div>
        </section>
    )
}

export default Customise