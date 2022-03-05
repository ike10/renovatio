import React from "react";
import './collectioncard.css'

import CollectionCardImage from '../../images/collectioncard/collectioncardimage.svg'
import LikeImage from '../../images/collectioncard/like.svg'
import CurrencyImage from '../../images/collectioncard/currency.svg'

export const CollectionCardComponent  = () => {



  
    return (
         
     <div className="collection-card">
                    <img className="collection-card-image" src={CollectionCardImage} alt="main slider"/>
                    <div className="collection-card-details">
                        <h4>Binancer</h4>
                        <p>11 ETH</p>
                    </div>
                    <div className="collection-card-stats">
                        <img className="collections-currency" src={CurrencyImage} alt="currency"/>
                          <img  className="collections-favorite-button" src={LikeImage} alt="likes"/>
                    </div>
                </div> 
       
    )
  
 
}
export default CollectionCardComponent;