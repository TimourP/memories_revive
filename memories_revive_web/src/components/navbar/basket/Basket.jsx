import React from 'react'
import { Icon } from '@iconify/react';
import "./style.scss"
import { connect } from 'react-redux';
import { mapDispatchToProps, mapStateToProps } from '../../../store/dispatcher';
import { generate_image_full_path } from '../../../routes/products_list/ProductsList';

const Basket = ({basketOpen, basket}) => {

	const products = basket.lines ? basket.lines : [];
	
	return (
		<div id="basket" className={basketOpen ? "active" : ""}>
			<div className="basket-container">
				<div className="basket-header">
					<span>Panier</span>
				</div>
				<table className="basket-content">
				<thead>
					<tr>
						<th></th>
						<th>Produit</th>
						<th>Quantité</th>
					</tr>
				</thead>
				<tbody>
					{
						products.map((elem, id) => {
							console.log(elem)
							return (
								<tr key={id}>
									<td></td>
									<td>
										<div className='basket-line-item'>
											<img src={generate_image_full_path(elem.product.images[0])} />
										</div>
									</td>
									<td>{elem.quantity}</td>
								</tr>
							)
						})
					}
				</tbody>
				</table>
			</div>
		</div>
	)
}

export default connect(mapStateToProps, mapDispatchToProps)(Basket)