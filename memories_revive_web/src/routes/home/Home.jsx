import React, { useEffect } from 'react'
import Hero from '../../components/home/hero/Hero'
import "./style.scss"
import TextImageSection from '../../components/home/text_image_section/TextImageSection'
import OfferSection from '../../components/home/offer_section/OfferSection'
import CommitmentSection from '../../components/home/commitment_section/CommitmentSection'
import ProductSection from '../../components/home/product_section/ProductSection'
import TestimoniesSection from '../../components/home/testimonies_section/TestimoniesSection'

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div id="home">
      <Hero/>
      <TextImageSection/>
      <ProductSection/>
      <OfferSection/>
      <CommitmentSection/>
      <TestimoniesSection/>
    </div>
  )
}

export default Home