import React, { useContext, useRef, useState } from "react";
import "./style.scss";
import bag from "../../../assets/main/bag.svg";
import PopupContext from "../../../contexts/PopupContext";
import { connect } from "react-redux";
import { mapDispatchToProps } from "../../../store/dispatcher";
import { Link, useNavigate } from "react-router-dom";

const Product = ({ product, addToBasket, fetchBasket }) => {
	const [loading, setLoading] = useState(false);
	const { setJustAdd } = useContext(PopupContext);
	const click_inside = useRef(false);
	const navigate = useNavigate();

	const add_to_basket = async () => {
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

	const description =
		product.description.length > 70
			? product.description.substring(0, 70) + "..."
			: product.description;

	return (
		<div
			onClick={() => {
				if (!click_inside.current) {
					navigate(`/shop/${product.id}/${product.title}`);
				}
				click_inside.current = false;
			}}
			className="main-product-div"
		>
			<img src={product.image} />
			<div className="product-text">
				<span className="price">{product.price}€</span>
				<span className="title">{product.title}</span>
				<p className="description">
					{description == "False" ? "" : description}
				</p>
				<div
					onClick={add_to_basket}
					className={`add-basket-btn ${loading ? "loading" : ""}`}
				>
					<img src={bag} />
					<span onClick={() => (click_inside.current = true)}>
						Ajouter au panier
					</span>
				</div>
			</div>
		</div>
	);
};

export default connect(null, mapDispatchToProps)(Product);
