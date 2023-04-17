import React, { useContext } from 'react'
import "./style.scss"
import { Link, useLocation } from 'react-router-dom'
import icon from "../../assets/icon.png"
import shop_bag from "../../assets/nav/shop-bag.svg"
import AuthContext from '../../contexts/AuthContext'

const Navbar = () => {
  const {setNeedLog, user, logout} = useContext(AuthContext);
  const location = useLocation();

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
                <Link className={location.pathname === "/products" ? "active" : "" } to="/products">Boutique</Link>
              </li>
              <li>
                <Link className={location.pathname === "/frames" ? "active" : "" } to="/frames">Les cadres</Link>
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
                <div onClick={() => {setNeedLog(true)}}>Connexion</div>
              </li>
              <li className='divider'></li>
              <li>
                <Link to="/shop">
                  <img src={shop_bag} />
                </Link>
              </li>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar