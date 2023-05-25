import React, { useContext, useEffect, useState } from "react";
import Render from "../render/Render";
import "./style.scss";
import CircularSelector from "../circular_selector/CircularSelector";
import CustomisationContext from "../../../contexts/CustomisationContext";
import {
	frame_selector,
	models,
	style_selector,
} from "../../../constants/frame";

import delivery from "../../../assets/home/delivery-icon.svg";
import diamond from "../../../assets/home/diamond-icon.svg";
import guarantee from "../../../assets/home/guarantee-icon.svg";
import bag from "../../../assets/main/bag.svg";

import { connect } from "react-redux";
import { mapDispatchToProps, mapStateToProps } from "../../../store/dispatcher";
import PopupContext from "../../../contexts/PopupContext";
import axios from "../../../services/axios";

const variant_by_odoo_id = {
	style: [28, 29],
	frame: [26, 22, 23],
	model: [21, 46, 7, 45, 47],
};

const Customise = ({ addToBasket, fetchBasket }) => {
	const { frame, set_frame } = useContext(CustomisationContext);
	const [loading, setLoading] = useState(false);
	const { setJustAdd } = useContext(PopupContext);
	const [mainProduct, setMainProduct] = useState(null);
	const [variant, setVariant] = useState(null);

	const load_at_start = async () => {
		const ret = await axios
			.get("/products/main")
			.then((e) => e.data)
			.catch((e) => null);
		if (ret) {
			setMainProduct(ret);
			get_current_variant();
		}
	};

	const get_current_variant = () => {
		if (!mainProduct) {
			return;
		}
		const style_odoo = variant_by_odoo_id.style[frame.style];
		const frame_odoo = variant_by_odoo_id.frame[frame.frame];
		const model_odoo = variant_by_odoo_id.model[frame.model];
		const current_product = mainProduct.variants.filter((e) => {
			if (
				e.attributes_values.filter((v) => v.odoo_id == style_odoo)
					.length == 0
			)
				return false;
			else if (
				e.attributes_values.filter((v) => v.odoo_id == frame_odoo)
					.length == 0
			)
				return false;
			else if (
				e.attributes_values.filter((v) => v.odoo_id == model_odoo)
					.length == 0
			)
				return false;

			return true;
		});
		if (current_product.length) {
			setVariant(current_product[0]);
		} else {
			setVariant(null);
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

	useEffect(() => {
		if (!mainProduct) load_at_start();
	}, []);

	useEffect(() => {
		get_current_variant();
	}, [frame]);

	return (
		<section id="customise-frame">
			<div className="render-container">
				<h1>Créer votre cadre</h1>
				<p>
					Morem ipsum dolor sit amet, consectetur adipiscing elit.
					Nunc vulputate libero et velit interdum, ac aliquet odio
					mattis.
				</p>
				<div className="renders">
					<Render />
				</div>
			</div>
			<div className="action-container">
				<h2>Personnaliser</h2>
				<CircularSelector
					title={"Style"}
					subtitle={"Fond du cadre"}
					list={style_selector}
					select={(id) => set_frame({ style: id })}
					selected_id={frame.style}
				/>
				<CircularSelector
					title={"Matière"}
					subtitle={"Cadre"}
					list={frame_selector}
					select={(id) => set_frame({ frame: id })}
					selected_id={frame.frame}
				/>
				<div className="attributes-container">
					<div className="attribute-elem">
						<span className="select-title">Modèle</span>
						<div className="select-container">
							<select
								defaultValue={frame.model}
								onChange={(e) =>
									set_frame({
										model: parseInt(e.target.value),
									})
								}
							>
								{models.map((value, id) => (
									<option key={id} value={id}>
										{value.name}
									</option>
								))}
							</select>
						</div>
					</div>
				</div>
				<div className="big-image-container">
					<img src={models[frame.model].image} />
				</div>
				<div className="price-container">
					<span className="price">
						{!variant ? "." : variant.list_price}€
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
						add_to_basket({ image: "", title: "", id: 12 })
					}
					className={`primary add-basket-btn ${
						loading ? "loading" : ""
					}`}
				>
					<img src={bag} />
					<span>Ajouter au panier</span>
				</div>
			</div>
		</section>
	);
};

export default connect(null, mapDispatchToProps)(Customise);
