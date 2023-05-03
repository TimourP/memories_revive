import React from 'react'
import "./style.scss"

const CheckoutStep = ({step}) => {
	return (
		<div id="checkout-step">
			<span className={`step-value ${step == 0 ? "bold" : ""}`}>Adresse</span>
			<span className='h-divider'></span>
			<span className={`step-value ${step == 1 ? "bold" : ""}`}>Livraison</span>
			<span className='h-divider'></span>
			<span className={`step-value ${step == 2 ? "bold" : ""}`}>Paiement</span>
		</div>
	)
}

export default CheckoutStep