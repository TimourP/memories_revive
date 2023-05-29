import React from "react";
import still_working from "../../../assets/mvp/still_working.svg";
import "./style.scss";

const IsMvp = () => {
	return (
		<div className="is-mvp">
			<img src={still_working} />
			<h1>Oh là ! Vous êtes allé plus vite que notre MVP !</h1>
			<p>
				Bienvenue dans l'atelier secret de notre site Web. Vous avez
				atteint un coin qui est encore en cours de polissage, de
				peinture et d'assemblage.
			</p>
			<p>
				Vous voyez, notre site Web, tout comme nos cadres de voitures
				miniatures, est un travail d'amour et de précision. Nous sommes
				en train de monter, peindre et polir chaque partie du site avec
				la même attention que nous apportons à nos produits.
			</p>
			<p>
				Alors, s'il vous plaît, pardonnez le désordre. Ce que vous voyez
				actuellement est notre <strong>MVP</strong> (Produit Minimum
				Viable) - l'équivalent web d'une voiture de course sans sa
				carrosserie élégante. Elle peut encore ne pas avoir l'air aussi
				belle que nos cadres finis, mais nous vous promettons que
				lorsque tous les détails seront en place, elle sera une
				véritable œuvre d'art.
			</p>
			<p>
				Si vous le souhaitez vous pouvez retrouver{" "}
				<a target="_blank" href="https://edu-lln-7.odoo.com/">
					l'autre version de notre site web
				</a>
				. Celle-ci est nous l'espérons complète!
			</p>
		</div>
	);
};

export default IsMvp;
