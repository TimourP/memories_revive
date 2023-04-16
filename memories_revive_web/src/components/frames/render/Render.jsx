import React, { useContext } from 'react'
import "./style.scss"
import black_marble from "../../../assets/frame/marbre-noir.jpg"
import CustomisationContext from '../../../contexts/CustomisationContext'
import { frame_selector } from '../../../constants/frame'

const Frame = () => {
    return (
        <div className='frame'>

        </div>
    )
}

const Render = () => {
    const {frame, set_frame} = useContext(CustomisationContext);

    return (
        <div id="render-frame">
            <div className='frame-header'>
                <div className='pointer-container'>
                    <div className='pointer'>
                        <span className='title'>Cadre</span>
                        <span className='choice'>Marbre noir</span>
                    </div>
                    <div className='pointer style'>
                        <span className='title'>Style</span>
                        <span className='choice'>Clair</span>
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