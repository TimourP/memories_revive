import React, { useEffect } from "react";
import TextImageSection from "../../components/home/text_image_section/TextImageSection";
import "./style.scss";
import BigTitle from "../../components/main/big_title/BigTitle";
import { connect } from "react-redux";
import { mapDispatchToProps, mapStateToProps } from "../../store/dispatcher";
import Product from "../../components/main/product/Product";
import { baseURL } from "../../services/axios";

export const generate_image_full_path = (image) => {
	if (!image.image) {
		return `${baseURL}/media/usable/empty.png`;
	}
	return `${baseURL}${image.image}`;
};

const ProductsList = ({ products }) => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div id="product-page">
			<section className="product-list">
				<div className="title-container">
					<BigTitle title="Accessoires" subtitle={"Produits"} />
					<p className="description">
						Morem ipsum dolor sit amet, consectetur adipiscing elit.
						Nunc vulputate libero et velit interdum, ac aliquet odio
						mattis.{" "}
					</p>
				</div>
				<div className="products-wrapper">
					{products.map((elem, id) => {
						const prod = {
							title: elem.name,
							id: elem.variants[0].odoo_id,
							description: elem.description,
							price: (elem.variants[0].list_price * 1.21).toFixed(
								2
							),
							image: generate_image_full_path(
								elem.variants[0].images[0]
							),
						};

						return <Product key={id} product={prod} />;
					})}
				</div>
			</section>
			<TextImageSection />
		</div>
	);
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList);
