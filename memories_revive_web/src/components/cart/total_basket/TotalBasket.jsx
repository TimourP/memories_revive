import React from 'react'
import "./style.scss"
import { Link } from 'react-router-dom'

const TotalBasket = ({promo_code}) => {
    return (
        <div id="total-basket">
            <div className='total-basket-content'>
                <h1>Total</h1>
                <div className='value-price'>
                    <span className='title bold'>Sous total (4 articles)</span>
                    <span>264,74 €</span>
                </div>
                <div className='value-price'>
                    <span className='title'>Livraison</span>
                    <span>0,00 €</span>
                </div>
                <div className='value-price'>
                    <span className='title'>Taxes</span>
                    <span>Tous les prix incluent la TVA</span>
                </div>
                <span className='divider'></span>
                <div className='value-price'>
                    <span className='title bolder'>Total</span>
                    <span className='title bolder'>264,74 €</span>
                </div>
                {
                    promo_code ?
                    <div>

                    </div> :
                    <>
                        <p>Appliquer le code de réduction au moment du paiement</p>
                        <Link to="/shop/checkout" className='secondary-button'>
                            Passer commande
                        </Link>
                    </>
                }
            </div>
        </div>
    )
}

export default TotalBasket