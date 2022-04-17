import BidImage from '../../images/itemsPage/bidImage.svg'
import './BidsComponent.css'
export default function BidsComponent(){
    return(
        <div className="bids-component">
            <div className='bids-section-1'>
                <img src={BidImage} alt='bidcomponent' />
            </div>
            <div className='bids-section-2'>
                <p><strong>4.33 ETH</strong> by <strong>Ge6o0wa9</strong></p>
                <p>@10/02/22, 07:18</p>
            </div>
        </div>
    )
}