import React from "react";

import './App.css'







// import TypewriterComponent from 'typewriter-effect'
// import Link from 'next/link'
import 'animate.css/animate.min.css'
import Header from "./components/Header/header";
import CollectionCardComponent from "./components/CollectionCard/collectioncard";

import SellerCardComponent from "./components/SellerCard/sellerCard";
// import {AnimationOnScroll} from 'react-animation-on-scroll' 

// import {useMediaQuery} from "react-responsive";
// import { mediaQueries } from "./responsive";


// images 
// import RenovatioLogo from './images/homepage/renovatio-logo.svg'

import WelcomeImageOne from './images/homepage/welcome-image-1.svg'
import WelcomeImageTwo from './images/homepage/welcome-image-2.svg'
import WelcomeImageThree from './images/homepage/welcome-image-3.svg'
import BinanceImage from './images/homepage/Binance-Logo.svg'
import PolygonImage from './images/homepage/polygon_token_logo-freelogovectors.svg'
import CoingeckoImage from './images/homepage/coingecko.svg'
import CoinmarketCapImage from './images/homepage/coinmarketcap.svg'
import FooterComponent from "./components/Footer/footer";
import ImageSliderComponent from "./components/ImageSlider/imageSlider";




export const App  = () => {



  
    return (
    <div className="main-body">
    <Header/>
    {/* Welcome Page */}
        <div className="welcome-page">
            <div className="welcome-section">
                <h2>No. 1 NFT Marketplace in the world</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tempor pharetra rutrum. Mauris quis lectus at augue dapibus accumsan sed nec tellus. Curabitur et lacus facilisis, iaculis mauris ac, dignissim nulla. 
                </p>
                <div className="welcome-button-section">
                    <button className="explore-button">
                        Explore
                    </button>
                    <button className="create-button">
                        Create NFT
                    </button>
                </div>
                <div className="welcome-page-metrics">
                    <div className="metrics-card-1">
                        <h4>95k</h4>
                        <p>Collection</p>
                    </div>
                     <div className="metrics-card-2">
                        <h4>2500</h4>
                        <p>Artists</p>
                    </div>
                     <div className="metrics-card-3">
                        <h4>567k</h4>
                        <p>Artworks</p>
                    </div>
                </div>
            </div>
            <div className="welcome-image">
                <img src={WelcomeImageOne} alt="welcome banner" className="welcome-image-1"/>
                <img src={WelcomeImageTwo} alt="welcome banner" className="welcome-image-2"/>
                <img src={WelcomeImageThree} alt="welcome banner" className="welcome-image-3"/>
            </div>
        </div>
        
       {/* End of Welcome Page */}
        
        {/* beginning of collection page */}
        <div className="collections-page">
            <div className="collections-header">
                <h2 className="collections-header-text">Top Rated Collections</h2>
                <div className="collections-type-filter">
                    <div className="collections-type-filter-inner">
<p>Ethereum</p>
                    </div>
                    
                </div>
                <div className="collections-time-filter">
                   <div className="collections-time-filter-inner">
 <p>In 7 days</p>
                   </div>
                   
                </div>
            </div>
            <div className="collections-container">
               <CollectionCardComponent/>
                <CollectionCardComponent/>
                 <CollectionCardComponent/>
                  <CollectionCardComponent/>
                  <CollectionCardComponent/>
                <CollectionCardComponent/>
                 <CollectionCardComponent/>
                  <CollectionCardComponent/>
            </div>
            <div className="collections-button-container">
                <button className="collections-button">
                    See More
                </button>
            </div>

        </div>
        {/* end of collection page */}
        {/* check out page */}
            <div className="checkout-page">
                <div className="checkout-section">
                    <h2>Check out our latest drops</h2>
                <p>Donec rutrum accumsan nulla, aliquet lobortis velit venenatis a. Etiam ut risus quis odio dapibus sagittis. Nullam at tempor elit. Nam ac elementum ante. Ut vestibulum volutpat risus a gravida. Nunc id enim neque.</p>
                <button className="checkout-button">
                    Explore
                </button>
                </div>
                <div className="checkout-images">
                    <ImageSliderComponent/>
                </div>
                
            </div>
        {/* end of check out page */}


        {/* best seller page */}
        <div className="bestseller-page">
            <h2>Best Sellers</h2>
            <div className="bestseller-container">
               <SellerCardComponent/>
               <SellerCardComponent/>
               <SellerCardComponent/>
               <SellerCardComponent/>
               <SellerCardComponent/>
               <SellerCardComponent/>
               <SellerCardComponent/>
               <SellerCardComponent/>
            </div>
        </div>

        {/* end of best seller page */}

        {/* banner for creator */}
        <div className="banner-page">
            <h2>Banner for creators</h2>
        </div>
        {/* end of banner */}

        {/* banner for creator */}
        <div className="sponsors-page">
            <img className="binance-logo" src={BinanceImage} alt='sponsor'/>
            <img src={PolygonImage} alt='sponsor'/>
            <img src={CoingeckoImage} alt='sponsor'/>
            <img src={CoinmarketCapImage} alt='sponsor'/>
        </div>
        {/* end of banner */}

        {/* footer */}
        <FooterComponent/>
        {/* end of footer */}
    </div>
    
    
       
    )
  
 
}
export default App;