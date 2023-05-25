import React, { useContext, useEffect, useState } from "react";
import "./style.scss";
import { Link, useLocation } from "react-router-dom";
import icon from "../../assets/icon.png";
import shop_bag from "../../assets/nav/shop-bag.svg";
import AuthContext from "../../contexts/AuthContext";
import Basket from "./basket/Basket";
import { connect } from "react-redux";
import { mapDispatchToProps, mapStateToProps } from "../../store/dispatcher";

export const get_length = (list) => {
	if (!list) return 0;
	let total = 0;
	for (let index = 0; index < list.length; index++) {
		const elem = list[index];
		total += elem.quantity;
	}
	return total;
};

let lastScrollTop = 0;
let drawer_open = false;

const scroll_listener = () => {
	const header = document.getElementById("main-header");
	const drawer = document.getElementById("drawer");
	if (drawer_open) return;
	var st = window.pageYOffset || document.documentElement.scrollTop;
	if (st > lastScrollTop && window.pageYOffset > 30) {
		// scrolldown

		if (!header.classList.contains("nav_hidden"))
			header.classList.add("nav_hidden");
	} else {
		if (window.pageYOffset > 60) {
			header.classList.add("sticky");
			if (header.classList.contains("nav_hidden"))
				header.classList.remove("nav_hidden");
		} else if (window.pageYOffset <= 60) {
			if (header.classList.contains("sticky"))
				header.classList.remove("sticky");
			if (header.classList.contains("nav_hidden"))
				header.classList.remove("nav_hidden");
		}
	}
	lastScrollTop = st <= 0 ? 0 : st;
};

const Navbar = ({ basket }) => {
	const { setNeedLog, user, is_login, needHide } = useContext(AuthContext);
	const location = useLocation();
	const [basketOpen, setBasketOpen] = useState(false);

	useEffect(() => {
		window.addEventListener("scroll", scroll_listener);

		return () => {
			window.removeEventListener("scroll", scroll_listener);
		};
	}, []);

	if (needHide) return null;

	return (
		<header id="main-header">
			<nav className="main-nav">
				<div className="logo-container">
					<Link
						className={location.pathname === "/" ? "active" : ""}
						to="/"
					>
						<img src={icon} />
					</Link>
				</div>
				<ul className="nav-container">
					<li>
						<Link
							className={
								location.pathname === "/frames" ? "active" : ""
							}
							to="/frames"
						>
							Les cadres
						</Link>
					</li>
					<li>
						<Link
							className={
								location.pathname === "/shop" ? "active" : ""
							}
							to="/shop"
						>
							Accessoires
						</Link>
					</li>
					<li>
						<Link
							className={
								location.pathname === "/brand" ? "active" : ""
							}
							to="/brand"
						>
							La marque
						</Link>
					</li>
					<li>
						<Link
							className={
								location.pathname === "/contact" ? "active" : ""
							}
							to="/contact"
						>
							Contact
						</Link>
					</li>
				</ul>
				<ul className="log-container">
					<li>
						{is_login() ? (
							<Link to={"/account"}>Compte</Link>
						) : (
							<div
								onClick={() => {
									setNeedLog(true);
								}}
							>
								Connexion
							</div>
						)}
					</li>
					<li className="divider"></li>
					<li>
						<Link
							className="shop-link"
							onMouseEnter={() => setBasketOpen(true)}
							onClick={() => setBasketOpen(false)}
							onMouseLeave={() =>
								setTimeout(() => {
									setBasketOpen(false);
								}, 300)
							}
							to="/shop/basket"
						>
							{basket.lines && basket.lines.length ? (
								<span className="abs-count">
									{get_length(basket.lines)}
								</span>
							) : null}
							<img src={shop_bag} />
						</Link>
					</li>
				</ul>
				<Basket basketOpen={basketOpen} />
			</nav>
		</header>
	);
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
