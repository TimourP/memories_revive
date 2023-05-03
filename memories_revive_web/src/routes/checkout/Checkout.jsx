import React, { useContext, useEffect, useState } from 'react'
import "./style.scss"
import TotalBasket from '../../components/cart/total_basket/TotalBasket'
import AuthContext from '../../contexts/AuthContext';
import CheckoutStep from '../../components/checkout/checkout_step/CheckoutStep';

const Checkout = () => {
	const {needHide, setNeedHide} = useContext(AuthContext);

	const [step, setStep] = useState(0);

	useEffect(() => {
		setNeedHide(true)
		
		return () => {
			setNeedHide(false)
		}
	}, [])
	
	return (
		<div id="checkout">
			<section>
				<div className='checkout-content'>
					<h1>Checkout</h1>
					<CheckoutStep step={step} />
				</div>
				<TotalBasket promo_code={true} />
			</section>
		</div>
	)
}

export default Checkout