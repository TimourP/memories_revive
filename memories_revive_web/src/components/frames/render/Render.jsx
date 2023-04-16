import React from 'react'
import "./style.scss"
import black_marble from "../../../assets/frame/marbre-noir.jpg"

const Frame = () => {
    return (
        <div className='frame'>

        </div>
    )
}

const Render = () => {
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
                <img className='background' src={black_marble} />
                <div className='frame-container'>
                    
                    <Frame/>
                </div>
            </div>
        </div>
    )
}

export default Render