import React from 'react'
import {social} from './linksdata'
import {Link} from 'react-router-dom'

function Chefs() {
    return (
        <div className = 'light-background'>
            <div className="container ">
                <div className="our-chefs">
                    <h3>chefs</h3>
                    <h2>Our <span className="primary-background">Professional Chefs</span></h2>
                    <p>Our chefs have a combined experience of more than 20years, their dishes have won annual awards. Their dishes make other chefs green with envy</p>
                </div>
                <div className="chef-cards">
                    <div className="chef-img img1">
                        <h3>Louis Hansel</h3>
                        <h4>Head Chef </h4>
                        <ul>{
                            social.map((link) =>{
                                const {id, url, icon} = link;
                                return <li key = {id} className = 'chefIcon'>
                                    {/* <Link to = {url}> {icon} </Link> */}
                                    <Link  to = {url}>{icon}</Link>
                                </li>
                            })
                            }
                        </ul>
                    </div>
                    <div className="chef-img img2">
                        <h3>Red Charlie</h3>
                        <h4>Cook</h4>
                        <ul>{
                            social.map((link) =>{
                                const {id, url, icon} = link;
                                return <li key = {id} className = 'chefIcon'>
                                    <Link to = {url}> {icon} </Link>
                                </li>
                            })
                            }
                        </ul>
                    </div>
                    <div className="chef-img img3">
                        <h3>Ronan Kruithof</h3>
                        <h4>Cook</h4>
                        <ul>{
                            social.map((link) =>{
                                const {id, url, icon} = link;
                                return <li key = {id} className = 'chefIcon'>
                                    <Link to = {url}> {icon} </Link>
                                </li>
                            })
                            }
                        </ul>
                    </div>
                </div>
            </div>        
        </div>
    )
}

export default Chefs
