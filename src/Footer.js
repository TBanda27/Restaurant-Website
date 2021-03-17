import React from 'react'
import { FaInstagram, FaFacebook, FaLinkedin, FaTwitter, FaPinterest } from 'react-icons/fa'

function Footer() {
    return (
        <footer className="dark-background">
            <div className="container">
                <div className="footer-content">
                    <div className="about-section">
                        <h3>About <span className="primary-background">Solomon's</span></h3>
                        <p>Solomon's is a renowned restaurant for its out of the books meals which leaves its clients salivating for more.</p>
                        <h3>Connect</h3>
                        <div className="social-icons-section">
                            <a href="https://www.facebook.com"><FaInstagram /></a>
                            <a href="https://www.instagram.com"><FaFacebook /></a>
                            <a href="https://www.twitter.com"><FaTwitter /></a>
                            <a href="https://www.pinterest.com"><FaPinterest /></a>
                            <a href="https://www.linkedin.com"><FaLinkedin /></a>
                        </div>
                    </div>
                    <div className="projects-section">
                        <h3>Operating Times</h3>
                        <h3>Sunday: 06:00-23:59</h3>
                        <h3>Saturday: 06:00-23:59</h3>
                        <h3>Mon-Fri: 08:00-22:00</h3>                  
                    </div>
                    <div className="services-section">
                        <h3>Services Offered</h3>
                        <h3>Weddings</h3>
                        <h3>Birthday Parties</h3>
                        <h3>Concerts</h3>
                    </div>
                    <div className="contact-section">
                        <h3>Contact</h3>
                        <h3>Robert Mugabe and Mbuya Nehanda</h3>
                        <h3>+263 091 023 011</h3>
                        <h3>+263 011 023 091</h3>
                        <h3>info@solomons.com</h3>
                    </div>
                </div>
                <div className="footer-paragraph">
                    <p>This template was made by TBanda27</p>
                </div>
            </div>
        </footer>    
    )
}

export default Footer
