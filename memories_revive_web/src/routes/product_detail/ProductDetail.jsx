import React, { useContext, useEffect, useRef, useState } from "react";
import "./style.scss";
import ProductSection from "../../components/home/product_section/ProductSection";
import OfferSection from "../../components/home/offer_section/OfferSection";
import CommitmentSection from "../../components/home/commitment_section/CommitmentSection";
import TestimoniesSection from "../../components/home/testimonies_section/TestimoniesSection";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { mapDispatchToProps, mapStateToProps } from "../../store/dispatcher";
import axios from "../../services/axios";
import Skeleton from "@mui/material/Skeleton";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { generate_image_full_path } from "../products_list/ProductsList";
import ReactShowMoreText from "react-show-more-text";
import delivery from "../../assets/home/delivery-icon.svg";
import diamond from "../../assets/home/diamond-icon.svg";
import guarantee from "../../assets/home/guarantee-icon.svg";
import bag from "../../assets/main/bag.svg";
import PopupContext from "../../contexts/PopupContext";

const get_initial_product = (product_list, current_id) => {
	const filt = product_list.filter(
		(elem) => elem.variants[0].odoo_id == current_id
	);
	if (filt.length) {
		return filt[0];
	}
	return null;
};

const ProductSectionLoading = () => {
	return (
		<section className="product-detail-container">
			<div className="product-images">
				<div className="short-images">
					{[0, 1, 2, 3].map((elem, id) => (
						<Skeleton key={id} variant="rectangle" />
					))}
				</div>
				<Skeleton className="big-one" variant="rectangle" />
			</div>
			<div className="product-descritpion">
				<div className="description-content">
					<div className="product-title">
						<Skeleton variant="text" />
						<div className="product-d-sq">
							<Skeleton variant="text" />
							<Skeleton variant="text" />
							<Skeleton variant="text" />
							<Skeleton variant="text" />
						</div>
					</div>
					<div className="sq-others">
						<Skeleton variant="text" />
						<Skeleton variant="text" />
						<Skeleton variant="text" />
						<Skeleton variant="text" />
						<Skeleton variant="rectangle" />
					</div>
				</div>
			</div>
		</section>
	);
};

const ProductDetailSection = ({ products, addToBasket, fetchBasket }) => {
	const { product_id } = useParams();
	const [product, setProduct] = useState(
		get_initial_product(products, product_id)
	);
	const [variantId, setVariantId] = useState(0);
	const [loading, setLoading] = useState(false);
	const { setJustAdd } = useContext(PopupContext);
	const current_attributes = useRef({});

	const load = async () => {
		const response = await axios
			.get(`/products/${product_id}`)
			.then((e) => e.data)
			.catch((e) => {
				console.log(e);
				return null;
			});
		if (response) {
			setProduct(response);
		}
	};

	const add_to_basket = async (product) => {
		if (loading) {
			return;
		}
		setLoading(true);
		addToBasket({ id: product.id, amount: 1 }).then((e) => {
			setJustAdd({
				picture: product.image,
				amount: 1,
				title: product.title,
			});
			fetchBasket().then((e) => {
				setLoading(false);
			});
		});
	};

	const set_variant = (attribute_id, value_id) => {
		current_attributes.current[attribute_id] = value_id;
		const filt = product.variants.filter(
			(elem) => elem.attributes_values[0].odoo_id == value_id
		);
		if (filt.length) {
			const id = product.variants.indexOf(filt[0]);
			setVariantId(id);
		}
	};

	useEffect(() => {
		window.scrollTo({ top: 0, behavior: "smooth" });
		load();
	}, [product_id]);

	useEffect(() => {
		window.scrollTo({ top: 0 });
	}, []);

	if (!product) {
		return <ProductSectionLoading />;
	}

	const variant = product.variants[variantId];

	return (
		<section className="product-detail-container">
			<div className="product-images">
				<div className="short-images">
					{variant.images.length > 1
						? variant.images
								.slice(1, 5)
								.map((elem, id) => (
									<img
										key={id}
										src={generate_image_full_path(
											variant.images[id + 1]
										)}
									/>
								))
						: null}
				</div>
				<img
					className="big-one"
					src={generate_image_full_path(variant.images[0])}
				/>
			</div>
			<div className="product-descritpion">
				<div className="description-content">
					<div className="product-title">
						<h1>{product.name}</h1>
						<ReactShowMoreText
							more="Lire la suite"
							less="Lire moins"
							lines={4}
							className="description-detail__text"
							anchorClass="description-detail__anchor"
							expanded={false}
						>
							<div
								dangerouslySetInnerHTML={{
									__html: product.description.replace(
										"\n",
										"<br><br>"
									),
								}}
							/>
						</ReactShowMoreText>
					</div>
					{product.attributes?.length ? (
						<div className="attributes-container">
							{product.attributes.map((elem, id) => {
								return (
									<div className="attribute-elem" key={id}>
										<span className="select-title">
											{elem.name}
										</span>
										<div className="select-container">
											<select
												onInput={(e) =>
													set_variant(
														elem.odoo_id,
														e.target.value
													)
												}
											>
												{elem.values.map(
													(value, id) => (
														<option
															key={id}
															value={
																value.odoo_id
															}
														>
															{value.name}
														</option>
													)
												)}
											</select>
										</div>
									</div>
								);
							})}
						</div>
					) : null}
					<div className="price-container">
						<span className="price">
							{(variant.list_price * 1.21).toFixed(2)}€
						</span>
						<span>TVAC</span>
					</div>
					<div className="legal-container">
						<div className="legal-row">
							<img src={delivery} />
							<span>Livraison gratuite</span>
						</div>
						<div className="legal-row">
							<img src={guarantee} />
							<span>Garantie à vie</span>
						</div>
						<div className="legal-row">
							<img src={diamond} />
							<span>Droit de rétractation de 14 jours</span>
						</div>
					</div>
					<div
						onClick={() =>
							add_to_basket({
								image: generate_image_full_path(
									variant.images[0]
								),
								title: product.title,
								id: variant.odoo_id,
							})
						}
						className={`primary add-basket-btn ${
							loading ? "loading" : ""
						}`}
					>
						<img src={bag} />
						<span>Ajouter au panier</span>
					</div>
				</div>
			</div>
		</section>
	);
};

const ProductDetail = ({ products, addToBasket, fetchBasket }) => {
	return (
		<div id="product-detail">
			<ProductDetailSection
				products={products}
				addToBasket={addToBasket}
				fetchBasket={fetchBasket}
			/>
			<ProductSection />
			<OfferSection />
			<CommitmentSection />
			<TestimoniesSection />
		</div>
	);
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);
