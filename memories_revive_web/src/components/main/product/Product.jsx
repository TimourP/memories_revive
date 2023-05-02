import React, { useContext, useState } from 'react'
import "./style.scss"
import bag from "../../../assets/main/bag.svg"
import PopupContext from '../../../contexts/PopupContext';
import { connect } from 'react-redux';
import { mapDispatchToProps } from '../../../store/dispatcher'

const Product = ({product, addToBasket, fetchBasket}) => {

  const [loading, setLoading] = useState(false);
  const { setJustAdd } = useContext(PopupContext)

  const add_to_basket = async () => {
    if (loading) {
      return
    }
    setLoading(true)
    addToBasket({id: product.id, amount: 1}).then(e => {
      setJustAdd({
        picture: product.image,
        amount: 1,
        title: product.title,
      })
      fetchBasket().then(e => {
        setLoading(false)
      })
    })
  }

  const description = product.description.length > 70 ? product.description.substring(0, 70) + "..." : product.description

  return (
    <div className='main-product-div'>
        <img src={product.image}/>
        <div className='product-text'>
            <span className='price'>{product.price}€</span>
            <span className='title'>{product.title}</span>
            <p className='description'>{description}</p>
            <div onClick={add_to_basket} className={`add-basket-btn ${loading ? "loading" : ""}`}>
              <img src={bag} />
              <span>Ajouter au panier</span>
            </div>
        </div>
    </div>
  )
}

export default connect(null, mapDispatchToProps)(Product)