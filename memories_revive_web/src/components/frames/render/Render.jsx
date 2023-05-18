import React, { useContext } from 'react'
import "./style.scss"
import black_marble from "../../../assets/frame/marbre-noir.jpg"
import CustomisationContext from '../../../contexts/CustomisationContext'
import { frame_selector, models, style_selector } from '../../../constants/frame'

const Frame = () => {
    const {frame} = useContext(CustomisationContext);

    return (
        <div className={`frame type-${frame.style} ${models[frame.model].key}`} style={{backgroundColor: style_selector[frame.style].color}}>

        </div>
    )
}

const Render = ({is_home}) => {
    const {frame, set_frame} = useContext(CustomisationContext);

    return (
        <div id="render-frame" className={`${is_home ? "home" : ""}`}>
            <div className='frame-header'>
                <div className='pointer-container'>
                    <div className='pointer'>
                        <span className='title'>Cadre</span>
                        <span className='choice'>{frame_selector[frame.frame].title}</span>
                    </div>
                    <div className='pointer style'>
                        <span className='title'>Style</span>
                        <span className='choice'>{style_selector[frame.style].title}</span>
                    </div>
                </div>
            </div>
            <div className='frame-content'>
                {
                    frame_selector[frame.frame].color ? 
                    <div className='background' style={{backgroundColor: frame_selector[frame.frame].color}}></div>
                    :
                    <img className='background' src={frame_selector[frame.frame].image} />
                }
                <div className='frame-container'>
                    <Frame/>
                </div>
            </div>
        </div>
    )
}

export default Render