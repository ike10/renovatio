
import './ExploreCard.css'
// import {FaArrowDown} from 'react-icons/fa'
import ExploreImageOne from '../../images/exploreCard/explore-card-image.svg'


export default function ExploreCard () {
return (
    <div className="explore-card">
            <div className="explore-card-image">
                <img src={ExploreImageOne} alt="explore card"/>
            </div>
            <div className="explore-card-info">
                <div className="explore-card-info-inner-1">
                <h3>Artwork Title</h3>
                <p>$0.00</p>
                </div>
                <div className="explore-card-info-inner-2">
                <div className="explore-card-bid-now"><p>Bid Now</p></div>
                <div className="explore-card-view-artwork"><div><p>View Artwork</p></div></div>
                </div>

            </div>
        </div>
        )
}