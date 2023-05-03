import React, { useContext } from 'react'
import icon from "../../../assets/icon.png"
import "../style.scss"
import { Link, useLocation } from 'react-router-dom'
import AuthContext from '../../../contexts/AuthContext'

const NavbarEmpty = () => {
    const location = useLocation();
    const {needHide} = useContext(AuthContext);

    if (!needHide)
		return null;

    return (
        <header id='main-header'>
			<nav className='main-nav'>
                <div className='logo-container'>
                    <Link className={location.pathname === "/" ? "active" : "" } to="/">
                        <img src={icon} />
                    </Link>
                </div>
            </nav>
        </header>
    )
}

export default NavbarEmpty