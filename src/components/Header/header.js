import React from "react";
import { useState } from "react";
import './header.css'

import RenovatioLogo from '../../images/homepage/renovatio-logo.svg'
import SearchIcon from '../../images/header/search.svg'
import OpenIcon from '../../images/header/blackOpenMenuBar.svg'



// import TypewriterComponent from 'typewriter-effect'
// import Link from 'next/link'
import 'animate.css/animate.min.css'
import {AnimationOnScroll} from 'react-animation-on-scroll' 
import { Link } from "react-router-dom";


// import {AnimationOnScroll} from 'react-animation-on-scroll' 

// import {useMediaQuery} from "react-responsive";
// import { mediaQueries } from "./responsive";
export const Header  = () => {
const [menu, setMenu] = useState(false)

 const renderMenu = () => {
        if (menu) {
            return (
                <AnimationOnScroll animateIn="animate__slideInLeft" 
                className="sidebar">
                    <div className="sidebar-backdrop"></div>

                    <div name="slide-bar">

                        <div className="sidebar-panel-container">
                            {/* <div className="top-0 right-0 text-2xl text-white" onClick={()=>{
                                setMenu(!menu)
                            }}><p>Close</p></div> */}
                            <ul className="sidebar-panel-navigation" style={{ listStyle: "none" }}>

                                <li><Link to='/explore'><a href="#welcome-page" className="lope">Explore</a></Link></li>
                                <li><Link to='/create'><a href="#about-page" className="lope">Create</a></Link></li>
                                <li><Link to='/'><a href="#tokenomics-page" className="lope">Community</a></Link></li>
                                <li><Link to='/login'><a href="#roadmap" className="lope">Sign In</a></Link></li>
                                
                            </ul>
                        </div>
                    </div>
                </AnimationOnScroll>
            )
        } else {
            return null
        }
    }

  
    return (
        <div className="header-component">
{
    renderMenu()
}
    <div className="header-container">
        <Link to='/'><div className="header-logo">
            <img src={RenovatioLogo} alt='logo' />
        </div>

        </Link>
        
        <div className="header-input">
            <input placeholder="search by user, collection, item, e.t.c..." />
            <img src={SearchIcon} alt='search' />
        </div>
        <div className="header-nav">
            <Link to="/explore"><p>Explore</p></Link>
             <Link to="/create"><p>Create</p></Link>
              <Link to="/community"><p>Community</p></Link>
        
        </div>
        <div className="header-button">
            <Link to="/login"><p> Sign In</p>

            </Link>
           
        </div>
        
       
        

    </div>
    
    <div className="mobile-header-container">
        <div className="mobile-header-logo">
            <img src={RenovatioLogo} alt='logo' />
        </div>
         <div 
            className="mobile-header-button"
            onClick={()=>{
                setMenu(!menu)
            }}
            >
           <img src={OpenIcon} alt='search' />
        </div>
    </div>
    </div>
    
       
    )
  
 
}
export default Header;