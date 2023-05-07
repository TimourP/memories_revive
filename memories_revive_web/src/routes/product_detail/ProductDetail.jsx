import React, { useEffect, useState } from 'react'
import "./style.scss"
import ProductSection from '../../components/home/product_section/ProductSection'
import OfferSection from '../../components/home/offer_section/OfferSection'
import CommitmentSection from '../../components/home/commitment_section/CommitmentSection'
import TestimoniesSection from '../../components/home/testimonies_section/TestimoniesSection'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import { mapDispatchToProps, mapStateToProps } from '../../store/dispatcher'
import axios from "../../services/axios"
import Skeleton from '@mui/material/Skeleton';
import { PhotoProvider, PhotoView } from 'react-photo-view'
import { generate_image_full_path } from '../products_list/ProductsList'

const get_initial_product = (product_list, current_id) => {
    const filt = product_list.filter(elem => elem.variants[0].odoo_id == current_id);
    if (filt.length) {
        return filt[0]
    }
    return null;
}

const ProductSectionLoading = () => {
    return (
        <Skeleton variant="rectangular" width={210} height={118} />
    )
}

const ProductDetailSection = ({products}) => {
    const {product_id} = useParams();
    const [product, setProduct] = useState(get_initial_product(products, product_id));
    const [variantId, setVariantId] = useState(0);

    const load = async () => {
        const response = await axios.get(`/products/${product_id}`)
            .then(e => e.data)
            .catch(e => {console.log(e);return null})
        if (response) {
            setProduct(response);
        }
    }

    useEffect(() => {
        load()
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [product_id])

    if (!product) {
        return <ProductSectionLoading/>
    }

    const variant = product.variants[variantId];


    return (
        <section className='product-detail-container'>
            <div className='product-images'>
                <div className='short-images'>
                    {
                        variant.images.length > 1 ?
                        variant.images.slice(1, 5).map((elem, id) => (
                            <img src={generate_image_full_path(variant.images[id + 1])} />
                        )) : null
                    }
                </div>
                <img className='big-one' src={generate_image_full_path(variant.images[0])} />
            </div>
            <div className='product-descritpion'>
                <div className='product-title'>
                    <h1></h1>
                </div>
            </div>
        </section>
    )
}

const ProductDetail = ({products}) => {
    return (
        <div id="product-detail">
            <ProductDetailSection products={products} />
            <ProductSection/>
            <OfferSection/>
            <CommitmentSection/>
            <TestimoniesSection/>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail)