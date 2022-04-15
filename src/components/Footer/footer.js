import React from "react";
import './footer.css'

// import CollectionCardImage from '../../images/collectioncard/collectioncardimage.svg'
// import LikeImage from '../../images/collectioncard/like.svg'
// import CurrencyImage from '../../images/collectioncard/currency.svg'

export const FooterComponent  = () => {



  
    return (
         
     <div className="footer-page">
            <div className="footer-section-1">
            <nav className="footer-navigation">
                <h3>MarketPlace</h3>
                <p>All NFTs</p>
                <p>Art</p>
                <p>Sport</p>
                <p>Gaming</p>
                <p>Others</p>
            </nav>
            <nav className="footer-navigation">
                <h3>Community</h3>
                <p>Twitter</p>
                <p>Telegram</p>
                <p>Discord</p>
                <p>Medium</p>
            </nav>
            <nav className="footer-navigation">
                <h3>Account</h3>
                <p>My Profile</p>
                <p>My Watchlist</p>
                <p>My Collections</p>
                <p>Settings</p>
            </nav>
            <nav className="footer-navigation">
                <h3>About Us</h3>
                <p>Company Profile</p>
                <p>Core Team</p>
                <p>Team Culture</p>
               
            </nav>
            <div className="footer-form">
                <h4>Subscribe</h4>
                <input placeholder="example@abc.com" />
            </div>
            </div>  
            <div className="footer-section-2">
                <h5>&copy; 2022 Renovatio, Inc</h5>
                <div>
                    <p>Privacy Policy</p>
                    <p>Terms of Service</p>
                </div>
            </div>   
                </div> 
       
    )
  
 
}
export default FooterComponent;