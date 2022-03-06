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

                                <li><a href="#welcome-page" className="lope">Explore</a></li>
                                <li><a href="#about-page" className="lope">Create</a></li>
                                <li><a href="#tokenomics-page" className="lope">Community</a></li>
                                <li><a href="#roadmap" className="lope">Sign In</a></li>
                                
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
        <div className="header-logo">
            <img src={RenovatioLogo} alt='logo' />
        </div>
        <div className="header-input">
            <input placeholder="search by user, collection, item, e.t.c..." />
            <img src={SearchIcon} alt='search' />
        </div>
        <div className="header-nav">
            <p>Explore</p>
             <p>Create</p>
             <p>Community</p>
        </div>
        <div className="header-button">
            <p>
                Sign In
            </p>
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