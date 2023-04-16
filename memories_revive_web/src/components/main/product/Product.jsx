import React from 'react'
import "./style.scss"
import bag from "../../../assets/main/bag.svg"

const Product = ({product}) => {
  return (
    <div className='main-product-div'>
        <img src={product.image}/>
        <div className='product-text'>
            <span className='price'>{product.price}€</span>
            <span className='title'>{product.title}</span>
            <p className='description'>{product.description}</p>
            <div className='add-basket-btn'>
              <img src={bag} />
              <span>Ajouter au panier</span>
            </div>
        </div>
    </div>
  )
}

export default Product