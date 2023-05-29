import React, { useContext } from "react";
import "./style.scss";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import logo from "../../assets/icon.png";
import bpost from "../../assets/footer/bpost-logo.png";
import dhl from "../../assets/footer/dhl-logo.svg";
import AuthContext from "../../contexts/AuthContext";

const Footer = () => {
	const { needHide } = useContext(AuthContext);

	if (needHide) return null;

	return (
		<div id="footer">
			<section>
				<div className="footer-up">
					<div className="footer-up-up">
						<ul className="footer-column large">
							<li>
								<img src={logo} />
							</li>
							<li>
								<p>
									Morem ipsum dolor sit amet, consectetur
									adipiscing elit.
								</p>
							</li>
						</ul>
						<ul className="footer-column">
							<li>
								<span>Liens rapides</span>
							</li>
							<li>
								<Link to="/">Accueil</Link>
							</li>
							<li>
								<Link to="/frames">Les cadres</Link>
							</li>
							<li>
								<Link to="/mvp">Cadres sur-mesure</Link>
							</li>
							<li>
								<Link to="/shop">Accessoires</Link>
							</li>
							<li>
								<Link to="/mvp">La marque</Link>
							</li>
							<li>
								<Link to="/contact">Contact</Link>
							</li>
						</ul>
						<ul className="footer-column">
							<li>
								<span>Pour notre sécurité</span>
							</li>
							<li>
								<Link target="_blank" to={"/mvp"}>
									Conditions générales
								</Link>
							</li>
							<li>
								<Link target="_blank" to={"/mvp"}>
									Mentions légales
								</Link>
							</li>
							<li>
								<Link target="_blank" to={"/mvp"}>
									Politique de vie privée
								</Link>
							</li>
							<li>
								<Link target="_blank" to={"/mvp"}>
									Utilisation des cookies
								</Link>
							</li>
							<li>
								<Link target="_blank" to={"/mvp"}>
									Garanties
								</Link>
							</li>
							<li>
								<Link target="_blank" to={"/mvp"}>
									Droit de rétractation
								</Link>
							</li>
							<li>
								<Link target="_blank" to={"/mvp"}>
									Règlement des litiges
								</Link>
							</li>
							<li>
								<Link target="_blank" to={"/mvp"}>
									Gestion des avis clients
								</Link>
							</li>
						</ul>
						<ul className="footer-column">
							<li>
								<span>A propos</span>
							</li>
							<li>
								<Link to={"/contact"}>Contact</Link>
							</li>
							<li>
								<a href="mailto:contact@memoriesrevive.com">
									contact@memoriesrevive.com
								</a>
							</li>
							<li>
								<a
									target="_blank"
									href="https://www.google.com/maps/place/EPHEC,+1348+Ottignies-Louvain-la-Neuve/@50.6658965,4.6115283,19.34z"
								>
									Av. du Ciseau 15, 1348
									Ottignies-Louvain-la-Neuve
								</a>
							</li>
						</ul>
					</div>
					<div className="footer-up-down">
						<a href="https://stripe.com/" target="_blank">
							<Icon icon="logos:stripe" />
						</a>
						<div className="row">
							<a href="https://www.visa.com/" target="_blank">
								<Icon icon="cib:visa" />
							</a>
							<a href="https://www.paypal.com/" target="_blank">
								<Icon icon="ic:baseline-paypal" />
							</a>
							<a
								href="https://www.bancontact.com/"
								target="_blank"
							>
								<Icon icon="cib:bancontact" />
							</a>
							<a
								href="https://www.mastercard.com/"
								target="_blank"
							>
								<Icon icon="wpf:maestro" />
							</a>
						</div>
					</div>
				</div>
				<div className="footer-down">
					<ul className="social-networks">
						<li>
							<a href="" target="_blank">
								<Icon icon="ri:facebook-fill" />
							</a>
						</li>
						<li>
							<a href="" target="_blank">
								<Icon icon="ri:linkedin-fill" />
							</a>
						</li>
						<li>
							<a href="" target="_blank">
								<Icon icon="mdi:twitter" />
							</a>
						</li>
						<li>
							<a href="" target="_blank">
								<Icon icon="ph:instagram-logo-fill" />
							</a>
						</li>
					</ul>
					<ul className="legal">
						<li>
							<Link>Conditions générales</Link>
						</li>
						<li className="divider"></li>
						<li>
							<Link>Mentions légales</Link>
						</li>
						<li className="divider"></li>
						<li>
							<Link>Protection des données</Link>
						</li>
						<li className="divider"></li>
						<li>
							<Link>Paramètres des données</Link>
						</li>
					</ul>
				</div>
				<div className="fictif">
					<p>
						Projet fictif créé dans le cadre d'un projet scolaire au
						sein de l'EPHEC
					</p>
				</div>
			</section>
		</div>
	);
};

export default Footer;
