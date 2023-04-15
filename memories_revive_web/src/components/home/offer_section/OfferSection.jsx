import React from 'react'
import "./style.scss"
import BigTitle from '../../main/big_title/BigTitle'
import OfferBlock from './offer_block/OfferBlock'

import delivery from "../../../assets/home/delivery-icon.svg"
import diamond from "../../../assets/home/diamond-icon.svg"
import guarantee from "../../../assets/home/guarantee-icon.svg"
import stripe from "../../../assets/home/stripe-icon.svg"

const OfferSection = () => {
  return (
    <div className='section-container'>
        <section id="home-offer-section">
            <BigTitle title={"Nous vous offrons la<br/>meilleure expérience"} subtitle={"Garanties"} />
            <div className='offers-container'>
                <OfferBlock image={guarantee} title={"Garantie à vie"} description={"Nous sommes convaincus de la qualité de nos produits et nous offrons une garantie à vie sur chacun d'entre eux."} />
                <OfferBlock image={delivery} title={"Livraison rapide et gratuite"} description={"Profitez de notre livraison rapide et gratuite pour recevoir vos produits sans frais supplémentaires."} />
                <OfferBlock image={diamond} title={"Produit unique"} description={"Des produits originaux de haute qualité, sont soigneusement sélectionnés par nos artisans locaux."} />
                <OfferBlock image={stripe} title={"Paiement sécurisés"} description={"Des produits originaux de haute qualité, sont soigneusement sélectionnés"} />
            </div>
        </section>
    </div>
  )
}

export default OfferSection