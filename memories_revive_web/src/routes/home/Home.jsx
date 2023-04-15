import React from 'react'
import Hero from '../../components/home/hero/Hero'
import "./style.scss"
import TextImageSection from '../../components/home/text_image_section/TextImageSection'
import OfferSection from '../../components/home/offer_section/OfferSection'
import CommitmentSection from '../../components/home/commitment_section/CommitmentSection'
import ProductSection from '../../components/home/product_section/ProductSection'

const Home = () => {
  return (
    <div id="home">
      <Hero/>
      <TextImageSection/>
      <ProductSection/>
      <OfferSection/>
      <CommitmentSection/>
    </div>
  )
}

export default Home