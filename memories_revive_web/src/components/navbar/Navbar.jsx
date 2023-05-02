import React, { useContext, useState } from 'react'
import "./style.scss"
import { Link, useLocation } from 'react-router-dom'
import icon from "../../assets/icon.png"
import shop_bag from "../../assets/nav/shop-bag.svg"
import AuthContext from '../../contexts/AuthContext'
import Basket from './basket/Basket'
import { connect } from 'react-redux'
import { mapDispatchToProps, mapStateToProps } from '../../store/dispatcher'

const Navbar = ({basket}) => {
	const {setNeedLog, user, logout} = useContext(AuthContext);
	const location = useLocation();
	const [basketOpen, setBasketOpen] = useState(false);

	return (
		<header id='main-header'>
				<nav className='main-nav'>
						<div className='logo-container'>
							<Link className={location.pathname === "/" ? "active" : "" } to="/">
								<img src={icon} />
							</Link>
						</div>
						<ul className='nav-container'>
							<li>
								<Link className={location.pathname === "/frames" ? "active" : "" } to="/frames">Les cadres</Link>
							</li>
							<li>
								<Link className={location.pathname === "/products" ? "active" : "" } to="/products">Accessoires</Link>
							</li>
							<li>
								<Link className={location.pathname === "/brand" ? "active" : "" } to="/brand">La marque</Link>
							</li>
							<li>
								<Link className={location.pathname === "/contact" ? "active" : "" } to="/contact">Contact</Link>
							</li>
						</ul>
						<ul className='log-container'>
							<li>
								{
									user.token ? <Link to={"/account"}>Compte</Link> :
									<div onClick={() => {setNeedLog(true)}}>Connexion</div>
								}
							</li>
							<li className='divider'></li>
							<li>
								<Link className='shop-link' onMouseEnter={() => setBasketOpen(true)} onMouseLeave={() => setTimeout(() => {setBasketOpen(false)}, 300)} to="/shop">
									{
										basket.lines.length ? 
										<span className='abs-count'>
											{basket.lines.length}
										</span> : null
									}
									<img src={shop_bag} />
								</Link>
							</li>
						</ul>
						<Basket basketOpen={basketOpen} />
				</nav>
		</header>
	)
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)