import React, { useEffect } from 'react'
import "./style.scss"
import OfferSection from '../../components/home/offer_section/OfferSection'
import CommitmentSection from '../../components/home/commitment_section/CommitmentSection'
import TestimoniesSection from '../../components/home/testimonies_section/TestimoniesSection'
import Customise from '../../components/frames/customise/Customise'

const Frames = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    
    return (
        <div id="frames-page">
            <Customise/>
            <OfferSection/>
            <CommitmentSection/>
            <TestimoniesSection/>
        </div>
    )
}

export default Frames