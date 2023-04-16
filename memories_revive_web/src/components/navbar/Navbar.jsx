import React from 'react'
import "./style.scss"
import { Link } from 'react-router-dom'
import icon from "../../assets/icon.png"
import shop_bag from "../../assets/nav/shop-bag.svg"

const Navbar = () => {
  return (
    <header id='main-header'>
        <nav className='main-nav'>
            <div className='logo-container'>
              <Link to="/">
                <img src={icon} />
              </Link>
            </div>
            <ul className='nav-container'>
              <li>
                <Link to="/products">Boutique</Link>
              </li>
              <li>
              <Link to="/frames">Les cadres</Link>
              </li>
              <li>
                <Link to="/brand">La marque</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
            <ul className='log-container'>
              <li>
                <Link to="/shop">Connexion</Link>
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