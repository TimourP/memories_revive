import React from "react";
import { Icon } from "@iconify/react";
import "./style.scss";
import { connect } from "react-redux";
import { mapDispatchToProps, mapStateToProps } from "../../../store/dispatcher";
import { generate_image_full_path } from "../../../routes/products_list/ProductsList";
import { Link } from "react-router-dom";

const Basket = ({ basketOpen, basket, removeFromBasket, fetchBasket }) => {
	const products = basket.lines ? basket.lines : [];

	const delete_item = (id) => {
		removeFromBasket({ id: id, amount: 1 }).then((e) => {
			fetchBasket().then((e) => {});
		});
	};

	return (
		<div id="basket" className={basketOpen ? "active" : ""}>
			<div className="basket-container">
				<div className="basket-header">
					<span>Panier</span>
				</div>
				{products.length == 0 ? (
					<div className="empty-basket">
						<span>Votre panier est vide</span>
					</div>
				) : (
					<div className="table-container">
						<table className="basket-content">
							<thead>
								<tr>
									<th></th>
									<th>Produit</th>
									<th>Quantité</th>
								</tr>
							</thead>
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
															elem.product
																.images[0]
														)}
													/>
													<div className="basket-text">
														<span className="title">
															{
																elem.product
																	.product
																	?.name
															}
														</span>
														<span className="price">
															{(
																elem.product
																	.list_price *
																1.21
															).toFixed(2)}
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
												{elem.quantity}
											</td>
										</tr>
									);
								})}
							</tbody>
						</table>
					</div>
				)}
				<Link to="/shop/basket" className="base-button">
					<span>{"Mon panier"}</span>
				</Link>
			</div>
		</div>
	);
};

export default connect(mapStateToProps, mapDispatchToProps)(Basket);
