import React from 'react'
import "./style.scss"
import BigTitle from '../../components/main/big_title/BigTitle'
import team from "../../assets/career/team.png"
import clock from "../../assets/career/clock.svg"
import location from "../../assets/career/map-pin.svg"
import { Link } from 'react-router-dom'

const career_list = [
	{
		title: "Manager RH",
		time_sheet: "Full time contract",
		location: "Brussels, Belgium",
		link: "https://edu-beerg1.odoo.com/jobs/detail/conseille-e-en-relation-commerciales-1"
	}
]

const Career = () => {
	return (
		<div id="career">
			<section>
				<div className='title-container'>
					<BigTitle title="Carrières" subtitle={"Jobs"} />
					<p className='description'>Nous sommes constamment à la recherche de personnes exceptionnelles pour rejoindre notre équipe dynamique et passionnée.</p>
				</div>
				<div className='job-wrapper'>
					{
						career_list.map((elem, id) => (
							<div key={id} className='job-item'>
								<span className='title'>{elem.title}</span>
								<div className='job-icon'>
									<img src={clock} />
									<span>{elem.time_sheet}</span>
								</div>
								<div className="job-icon">
									<img src={location}/>
									<span>{elem.location}</span>
								</div>
								<a href={elem.link} target='_blank' className='secondary-button'>Voir l'annonce</a>
							</div>
						))
					}
				</div>
			</section>
			<section id="home-text-image-section">
				<div className='image-container'>
					<img src={team}/>
				</div>
				<div className='text-container'>
					<BigTitle title={"Rejoignez notre équipe"} need_divider={true} />
					<div className='main-text'>
						<p>Cherchez-vous une opportunité d'emploi qui n'est pas répertoriée ci-dessus ? Nous sommes toujours à la recherche de personnes incroyables.</p>
					</div>
					<Link to="/contact" className='main-button'>
						Prendre contact
					</Link>
				</div>
			</section>
		</div>
	)
}

export default Career