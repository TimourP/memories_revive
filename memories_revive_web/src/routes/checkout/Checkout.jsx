import React, { useContext, useEffect, useState } from "react";
import "./style.scss";
import TotalBasket from "../../components/cart/total_basket/TotalBasket";
import AuthContext from "../../contexts/AuthContext";
import CheckoutStep from "../../components/checkout/checkout_step/CheckoutStep";
import CheckoutAddress from "../../components/checkout/checkout_address/CheckoutAddress";
import CheckoutDelivery from "../../components/checkout/checkout_delivery/CheckoutDelivery";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "../../store/dispatcher";
import { Link } from "react-router-dom";

const Checkout = ({ basket }) => {
	const { needHide, setNeedHide } = useContext(AuthContext);
	const navigate = useNavigate();
	const [step, setStep] = useState(0);

	useEffect(() => {
		setNeedHide(true);

		return () => {
			setNeedHide(false);
		};
	}, []);

	const next_step = () => {
		if (step == 1) {
			window.location.href = `https://edu-lln-7.odoo.com/my/orders/${basket.odoo_id}?access_token=${basket.access_token}`;
			return;
		}
		setStep(step + 1);
	};

	return (
		<div id="checkout">
			<section>
				<div className="checkout-container">
					<div className="checkout-content">
						<h1>Checkout</h1>
						<CheckoutStep step={step} />
						{step == 0 ? (
							<CheckoutAddress />
						) : step == 1 ? (
							<CheckoutDelivery />
						) : null}
						{step != 1 ? null : (
							<>
								<p className="secure">
									Cette section vous permettra de sélectionner
									le mode de livraison. Ce projet est un{" "}
									<Link to="/mvp">MVP</Link>.
								</p>
								<p className="secure">
									En procéder au payment vous serez redirigé
									vers notre page de payment sécurisée.
								</p>
							</>
						)}
						<div onClick={next_step} className="secondary-button">
							<span>
								{step == 0
									? "Continuer la commande"
									: step == 1
									? "Procéder au payment"
									: null}
							</span>
						</div>
					</div>
				</div>
				<TotalBasket promo_code={true} />
			</section>
		</div>
	);
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
