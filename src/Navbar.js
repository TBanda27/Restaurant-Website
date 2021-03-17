import React, { useState, useRef, useEffect } from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import { FaBars} from 'react-icons/fa';
import { links, social } from './linksdata';


const Navbar = () => {
    const [showLinks, setShowLinks] = useState(false);
    const linksContainerRef = useRef(null);
    const linksRef = useRef(null);

    useEffect(() => {
        const linksHeight = linksRef.current.getBoundingClientRect().height;
        if(showLinks){
            linksContainerRef.current.style.height = `${linksHeight}px`;
        }
        else{
           linksContainerRef.current.style.height = '0px'; 
        }
    }, [showLinks])


  return <nav>
      <div className="nav-center">
          <div className="nav-header">
              <h3><span>Solomon's</span></h3>
              <button 
                className ="nav-toggle" 
                onClick = {()=> setShowLinks(!showLinks)}>
                    <FaBars/>
            </button>
          </div>

          {/* conditionally render the div so that it toggles */}

          <div className= 'links-container' ref = {linksContainerRef}>
              <ul className="links" ref = {linksRef}>             
                    {links.map((link) =>{
                        const {id, url, text} = link;
                        return (
                            <li key = {id}>
                                <Link to = {url}> {text} </Link>
                            </li>
                            )
                    })}        
              </ul>

          </div>
          <ul className="social-icons">
              {social.map((socialIcon) => {
                  const {id, url, icon} = socialIcon;
                  return (
                    <li key = {id}> 
                        <Link to = {url}> {icon} </Link>
                    </li>
                    )
              })}
          </ul>
      </div>
  </nav>
}

export default Navbar