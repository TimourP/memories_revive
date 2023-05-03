import React from 'react'
import "./style.scss"
import ContactForm from '../../components/contact/ContactForm'
import { Link } from 'react-router-dom'

const Contact = () => {
	return (
		<div id="contact">
			<section>
				<div className='contact-text'>
					<h1>Contact informations</h1>
					<p>Lorem ipsum dolor sit amet consectetur. Ullamcorper natoque sagittis sagittis egestas ullamcorper. Egestas sed nulla ut faucibus pharetra.</p>
					<h2>Rejoindre memories revives</h2>
					<p>Lorem ipsum dolor sit amet consectetur. Ullamcorper natoque sagittis sagittis egestas ullamcorper. Egestas sed nulla ut faucibus pharetra.</p>
					<Link to="/career" className='main-button'>
						Les offres d'emploi
					</Link>
				</div>
				<ContactForm/>
			</section>
		</div>
	)
}

export default Contact