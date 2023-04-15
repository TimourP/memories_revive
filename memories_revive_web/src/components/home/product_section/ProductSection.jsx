import React from 'react'
import BigTitle from '../../main/big_title/BigTitle'
import { Link } from 'react-router-dom'
import "./style.scss"
import Product from '../../main/product/Product'

const products = [
    {
        price: 90,
        title: "Produit 1",
        description: "Corem ipsum dolor sit amet, consectetur adipiscing elit.",
        image: "https://www.thelightingsuperstore.co.uk/images/fs/37/mondrian-400-led-matt-nickel-framewall-mounted-light-7890-5613.jpg"
    },
    {
        price: 90,
        title: "Produit 1",
        description: "Corem ipsum dolor sit amet, consectetur adipiscing elit.",
        image: "https://www.thelightingsuperstore.co.uk/images/fs/37/mondrian-400-led-matt-nickel-framewall-mounted-light-7890-5613.jpg"
    },
    {
        price: 90,
        title: "Produit 1",
        description: "Corem ipsum dolor sit amet, consectetur adipiscing elit.",
        image: "https://www.thelightingsuperstore.co.uk/images/fs/37/mondrian-400-led-matt-nickel-framewall-mounted-light-7890-5613.jpg"
    },
    {
        price: 90,
        title: "Produit 1",
        description: "Corem ipsum dolor sit amet, consectetur adipiscing elit.",
        image: "https://www.thelightingsuperstore.co.uk/images/fs/37/mondrian-400-led-matt-nickel-framewall-mounted-light-7890-5613.jpg"
    },
]

const ProductSection = () => {
  return (
    <section id="home-product-section">
        <div className='section-header'>
            <div className='title-container'>
                <BigTitle title="Nos derniers accessoires pour cadres" subtitle={"Produits"} />
                <p className='description'>Gorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odia mattis.</p>
            </div>
            <Link to="/products" className='main-button'>
                Tous les produits
            </Link>
        </div>
        <div className='products-wrapper'>
            {
                products.map((elem, id) => {
                    return (
                        <Product product={elem} key={id} />
                    )
                })
            }
        </div>
    </section>
  )
}

export default ProductSection