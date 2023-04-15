import React from 'react'
import "./style.scss"

const Product = ({product}) => {
  return (
    <div className='main-product-div'>
        <img src={product.image}/>
        <div className='product-text'>
            <span className='price'>{product.price}</span>
            <span className='title'>{product.title}</span>
            <p className='descripton'>{product.description}</p>
        </div>
    </div>
  )
}

export default Product