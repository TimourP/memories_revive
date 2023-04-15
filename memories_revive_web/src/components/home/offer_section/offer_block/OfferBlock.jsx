import React from 'react'
import "./style.scss"

const OfferBlock = ({image, title, description}) => {
  return (
    <div className='offer-section-block'>
        <div className='icon-container'>
            <img src={image} />
        </div>
        <h3>{title}</h3>
        <p>{description}</p>
    </div>
  )
}

export default OfferBlock