import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { mapDispatchToProps, mapStateToProps } from "../../../store/dispatcher";

const TotalBasket = ({ basket, promo_code }) => {
	const products = basket.lines ? basket.lines : [];
	let total = 0;

	for (let index = 0; index < products.length; index++) {
		const product = products[index];
		total += product.product.list_price;
	}

	return (
		<div id="total-basket">
			<div className="total-basket-content">
				<h1>Total</h1>
				<div className="value-price">
					<span className="title bold">
						Sous total ({products.length} article
						{products.length > 1 ? "s" : ""})
					</span>
					<span>{total} €</span>
				</div>
				<div className="value-price">
					<span className="title">Livraison</span>
					<span>0,00 €</span>
				</div>
				<div className="value-price">
					<span className="title">Taxes</span>
					<span>Tous les prix incluent la TVA</span>
				</div>
				<span className="divider"></span>
				<div className="value-price">
					<span className="title bolder">Total</span>
					<span className="title bolder">{total} €</span>
				</div>
				{promo_code ? (
					<div></div>
				) : (
					<>
						<p>
							Appliquer le code de réduction au moment du paiement
						</p>
						<Link to="/shop/checkout" className="secondary-button">
							Passer commande
						</Link>
					</>
				)}
			</div>
		</div>
	);
};

export default connect(mapStateToProps, mapDispatchToProps)(TotalBasket);
