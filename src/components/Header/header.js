import React from "react";

import './header.css'

import RenovatioLogo from '../../images/homepage/renovatio-logo.svg'
import SearchIcon from '../../images/header/search.svg'




// import TypewriterComponent from 'typewriter-effect'
// import Link from 'next/link'
import 'animate.css/animate.min.css'
// import {AnimationOnScroll} from 'react-animation-on-scroll' 

// import {useMediaQuery} from "react-responsive";
// import { mediaQueries } from "./responsive";
export const Header  = () => {



  
    return (
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
    
    
       
    )
  
 
}
export default Header;