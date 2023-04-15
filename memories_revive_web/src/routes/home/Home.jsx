import React from 'react'
import Hero from '../../components/home/hero/Hero'
import "./style.scss"
import TextImageSection from '../../components/home/text_image_section/TextImageSection'

const Home = () => {
  return (
    <div id="home">
      <Hero/>
      <TextImageSection/>
    </div>
  )
}

export default Home