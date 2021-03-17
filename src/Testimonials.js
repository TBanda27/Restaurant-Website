import React, {useState, useEffect} from 'react'
import Testimony from './Testimony'
import Gallery from './Gallery'

const Testimonials = () => {
    return (
        <div className = 'container'>
            <div className = 'testimonials-section'>
                <Testimony/>
                <Gallery/>
            </div>
        </div>
    )
}

export default Testimonials;