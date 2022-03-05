import React from "react";
import './sellerCard.css'

import CollectionCardImage from '../../images/sellerCard/collectioncardimage.svg'
import LikeImage from '../../images/sellerCard/like.svg'
// import CurrencyImage from '../../images/collectioncard/currency.svg'

export default function SellerCardComponent   () {



  
    return (
         
     <div className="seller-card">
                    <img className="seller-card-image" src={CollectionCardImage} alt="main slider"/>
                    <div className="seller-card-details">
                        <h4>Collection</h4>
                        <p>11 ETH</p>
                    </div>
                    <div className="seller-card-stats">
                        
                          <img alt="main-slider" className="seller-favorite-button" src={LikeImage}/>
                    </div>
                </div> 
       
    )
  
 
}