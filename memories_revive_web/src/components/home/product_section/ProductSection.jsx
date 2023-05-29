import React from "react";
import BigTitle from "../../main/big_title/BigTitle";
import { Link } from "react-router-dom";
import "./style.scss";
import Product from "../../main/product/Product";
import { connect } from "react-redux";
import { mapStateToProps } from "../../../store/dispatcher";
import { generate_image_full_path } from "../../../routes/products_list/ProductsList";

const ProductSection = ({ products }) => {
	return (
		<section id="home-product-section">
			<div className="section-header">
				<div className="title-container">
					<BigTitle
						title="Nos derniers accessoires pour cadres"
						subtitle={"Produits"}
					/>
					<p className="description">
						Gorem ipsum dolor sit amet, consectetur adipiscing elit.
						Nunc vulputate libero et velit interdum, ac aliquet odia
						mattis.
					</p>
				</div>
				<Link to="/shop" className="main-button">
					Tous les produits
				</Link>
			</div>
			<div className="products-wrapper">
				{products.slice(0, 4).map((elem, id) => {
					const prod = {
						title: elem.name,
						id: elem.variants[0].odoo_id,
						description: elem.description,
						price: (elem.variants[0].list_price * 1.21).toFixed(2),
						image: generate_image_full_path(
							elem.variants[0].images[0]
						),
					};
					return <Product product={prod} key={id} />;
				})}
			</div>
		</section>
	);
};

export default connect(mapStateToProps, null)(ProductSection);
