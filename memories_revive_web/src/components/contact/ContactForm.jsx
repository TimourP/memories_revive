import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";

const ContactForm = () => {
	return (
		<div id="contact-.webpm">
			<h2>Contactez-nous</h2>
			<form>
				<div className="input-row">
					<div className="input-label">
						<label htmlFor="name-input">Nom</label>
						<input
							type="text"
							id="name-input"
							placeholder="Entrez votre nom"
						/>
					</div>
					<div className="input-label">
						<label htmlFor="first-name-input">Prénom</label>
						<input
							type="text"
							id="first-name-input"
							placeholder="Entrez votre prénom"
						/>
					</div>
				</div>
				<div className="input-row">
					<div className="input-label">
						<label htmlFor="email-input">Email</label>
						<input
							type="email"
							id="email-input"
							placeholder="Entrez votre email"
						/>
					</div>
					<div className="input-label">
						<label htmlFor="phone-input">Téléphone</label>
						<input
							type="tel"
							id="phone-input"
							placeholder="Entrez votre Téléphone"
						/>
					</div>
				</div>
				<div className="full-width-input">
					<div className="input-label">
						<label htmlFor="subject-input">Sujet</label>
						<input
							type="email"
							id="subject-input"
							placeholder="Sélectionner un sujet"
						/>
					</div>
				</div>
				<p>
					Vous avez <Link>une question concernant les retours ?</Link>
				</p>
				<div className="full-width-input">
					<div className="input-label">
						<label htmlFor="message-input">Message</label>
						<textarea
							type="email"
							id="message-input"
							placeholder="Entrez votre message"
						></textarea>
					</div>
				</div>
				<p>
					Note sur la protection des données : Le traitement des
					données personnelles du masque de saisie sert uniquement à
					traiter les coordonnées. Vous avez lu la politique de
					confidentialité.
				</p>
				<div className="submit-button">
					<span>Envoyer</span>
				</div>
			</form>
		</div>
	);
};

export default ContactForm;
