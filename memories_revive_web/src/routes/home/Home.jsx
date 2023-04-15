import React from 'react'
import Hero from '../../components/home/hero/Hero'
import "./style.scss"
import TextImageSection from '../../components/home/text_image_section/TextImageSection'
import OfferSection from '../../components/home/offer_section/OfferSection'

const Home = () => {
  return (
    <div id="home">
      <Hero/>
      <TextImageSection/>
      <OfferSection/>
    </div>
  )
}

export default Home