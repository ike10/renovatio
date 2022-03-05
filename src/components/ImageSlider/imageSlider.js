import React from "react";
import './imageSlider.css'
import ImageOne from '../../images/homepage/welcome-image-1.svg'
import ImageTwo from '../../images/homepage/welcome-image-2.svg'
import ImageThree from '../../images/homepage/welcome-image-3.svg'
// import CollectionCardImage from '../../images/sellerCard/collectioncardimage.svg'
// import LikeImage from '../../images/sellerCard/like.svg'
import CurrencyImage from '../../images/collectioncard/currency.svg'

export default function ImageSliderComponent   () {



  
    return (
         
     <div className="image-slider-container">
        <div className="image-slider-card-1">
       
            <img src={ImageOne} alt="main slider" className="image-slider-card-image"/>
            <div className="image-slider-card-info">
                <div className="image-slider-title">
                    <h4>Acura #234</h4>
                    <p>50.11</p>
                    <img src={CurrencyImage} alt="currency"/>
                </div>
                <div>
                    <button className="bid-now-button">
                        Bid Now
                    </button>
                    <button className="view-artwork-button">
                        View Artwork
                    </button>
                </div>
            </div>
        </div> 
        <div className="image-slider-card-2">
            <img src={ImageTwo} alt="main slider" className="image-slider-card-image"/>
            <div className="image-slider-card-info">
                <div className="image-slider-title">
                    <h4>Acura #234</h4>
                    <p>50.11</p>
                    <img src={CurrencyImage} alt="currency"/>
                </div>
                <div>
                    <button className="bid-now-button">
                        Bid Now
                    </button>
                    <button className="view-artwork-button">
                        View Artwork
                    </button>
                </div>
            </div>
        </div> 
        <div className="image-slider-card-3">
            <img src={ImageThree} alt="main slider" className="image-slider-card-image"/>
            <div className="image-slider-card-info">
                <div className="image-slider-title">
                    <h4>Acura #234</h4>
                    <p>50.11</p>
                    <img src={CurrencyImage} alt="currency"/>
                </div>
                <div>
                    <button className="bid-now-button">
                        Bid Now
                    </button>
                    <button className="view-artwork-button">
                        View Artwork
                    </button>
                </div>
            </div>
        </div>                
     </div> 
       
    )
  
 
}