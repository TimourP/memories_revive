import React from 'react'
import "./style.scss"

const CheckoutAddress = () => {
	return (
		<div id="checkout-address">
			<h2>Informations de livraison</h2>
			<form>
				<div className='input-row'>
					<input name="last_name" placeholder='Nom' type='text' />
					<input name="first_name" placeholder='Prénom' type='text' />
				</div>
				<input name="address" placeholder='Adresse' />
				<input name="address_line2" placeholder='Apartement, suite, etc (optionel)' />
				<input name="city" placeholder='Ville' />
				<div className='input-row'>
					<input name="country" placeholder='Pays' type='text' />
					<input name="postal_code" placeholder='Code postal' type='text' />
				</div>
			</form>
		</div>
	)
}

export default CheckoutAddress