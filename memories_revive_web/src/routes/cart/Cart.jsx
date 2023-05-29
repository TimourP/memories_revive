import React, { useContext, useEffect } from "react";
import "./style.scss";
import { connect } from "react-redux";
import { mapDispatchToProps, mapStateToProps } from "../../store/dispatcher";
import { get_length } from "../../components/navbar/Navbar";
import { Icon } from "@iconify/react";
import { generate_image_full_path } from "../products_list/ProductsList";
import TotalBasket from "../../components/cart/total_basket/TotalBasket";

const Cart = ({ basket, removeFromBasket, fetchBasket }) => {
	const products = basket.lines ? basket.lines : [];

	const delete_item = (id) => {
		removeFromBasket({ id: id, amount: 1 }).then((e) => {
			fetchBasket().then((e) => {});
		});
	};

	return (
		<div id="cart">
			<section className="cart-top">
				<div className="cart-content">
					<h1>Mon panier ({get_length(basket.lines)} articles)</h1>
					<table className="basket-content">
						<tbody>
							{products.map((elem, id) => {
								return (
									<tr key={id}>
										<td
											onClick={() =>
												delete_item(
													elem.product.odoo_id
												)
											}
											align="center"
										>
											<Icon icon="iconoir:delete-circle" />
										</td>
										<td className="center">
											<div className="basket-line-item">
												<img
													src={generate_image_full_path(
														elem.product.images[0]
													)}
												/>
												<div className="basket-text">
													<span className="title">
														{
															elem.product.product
																?.name
														}
													</span>
													<div className="attribute-div">
														{elem.product.attributes_values.map(
															(elem, id) => (
																<div
																	key={id}
																	className="attribute"
																>
																	<span>
																		{
																			elem.display_name.split(
																				":"
																			)[0]
																		}
																		:
																	</span>
																	<span>
																		{
																			elem.display_name.split(
																				":"
																			)[1]
																		}
																	</span>
																</div>
															)
														)}
													</div>
												</div>
											</div>
										</td>
										<td align="center">
											<div className="amount-price">
												<span>{elem.quantity}</span>
												<span className="price">
													{(
														elem.product
															.list_price * 1.21
													).toFixed(2)}
													€
												</span>
											</div>
										</td>
									</tr>
								);
							})}
						</tbody>
					</table>
					<div className="informations-list">
						<p>
							<Icon icon="gridicons:notice-outline" />
							Les articles dans le panier ne sont pas réservés.
						</p>
						<p>
							<Icon icon="gridicons:notice-outline" />
							Droit de rétractation de 14 jours pour les produits
							non personnalisé.*
						</p>
						<p>
							<Icon icon="gridicons:notice-outline" />
							Garantie légale 2 ans pour les accessoires.*
						</p>
						<p>
							<Icon icon="gridicons:notice-outline" />
							Garantie à vie pour les cadres.*
						</p>
					</div>
				</div>
				<TotalBasket />
			</section>
			<section className="other-data">
				<div className="data-block">
					<span>Date de livraison estimée</span>
					<p>samedi, 06/05 - mercredi, 10/05</p>
				</div>
				<div className="data-block">
					<span>Nous acceptons</span>
					<div className="icon-contianer">
						<a href="https://www.visa.com/" target="_blank">
							<Icon icon="cib:visa" />
						</a>
						<a href="https://www.paypal.com/" target="_blank">
							<Icon icon="ic:baseline-paypal" />
						</a>
						<a href="https://www.bancontact.com/" target="_blank">
							<Icon icon="cib:bancontact" />
						</a>
						<a href="https://www.mastercard.com/" target="_blank">
							<Icon icon="wpf:maestro" />
						</a>
					</div>
				</div>
			</section>
		</div>
	);
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
