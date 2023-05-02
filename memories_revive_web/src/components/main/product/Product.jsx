import React from 'react'
import "./style.scss"
import bag from "../../../assets/main/bag.svg"

const Product = ({product}) => {

  const description = product.description.length > 70 ? product.description.substring(0, 70) + "..." : product.description

  return (
    <div className='main-product-div'>
        <img src={product.image}/>
        <div className='product-text'>
            <span className='price'>{product.price}€</span>
            <span className='title'>{product.title}</span>
            <p className='description'>{description}</p>
            <div className='add-basket-btn'>
              <img src={bag} />
              <span>Ajouter au panier</span>
            </div>
        </div>
    </div>
  )
}

export default Product