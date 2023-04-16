import React, { useEffect } from 'react'
import TextImageSection from '../../components/home/text_image_section/TextImageSection'
import "./style.scss"

const ProductsList = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div id="product-page">
      <TextImageSection/>
    </div>
  )
}

export default ProductsList