import React from 'react'
import { FaInstagram, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa'
export const links = [
  {
    id: 1,
    url: '/',
    text: 'Home',
  },
  {
    id : 2,
    url: '/menu',
    text: 'Menu',
  },
  {
    id: 3,
    url: '/about-us',
    text: 'About',
  }, 
  {
    id: 4,
    url: '/contact-us',
    text: 'Contact-Us',
  }
  
]

export const social = [
  {
    id: 1,
    url: 'https://www.instagram.com',
    icon: <FaInstagram />,
  },
  {
    id: 2,
    url: 'https://www.twitter.com',
    icon: <FaTwitter />,
  },
  {
    id: 3,
    url: 'https://www.facebook.com/tawanda.banda.37',
    icon: <FaFacebook />,
  }
]