import React from 'react'
import Navbar from './Navbar'
import Body from './Body'
import ChooseUs from './ChooseUs'
import Chefs from './Chefs'
import AboutUsBody from './AboutUsBody'
import Footer from './Footer'


function AboutUs() {
    return (
        <div>
            <div className="backgroundA">
                <Navbar/>
                <AboutUsBody/>
            </div> 
           <ChooseUs/>
           <Chefs/>
           <Footer/>
        </div>
    )
}

export default AboutUs;
