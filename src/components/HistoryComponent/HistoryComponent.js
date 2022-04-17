import BidImage from '../../images/itemsPage/bidImage.svg'
import './HistoryComponent.css'
export default function HistoryComponent(){
    return(
        <div className="history-component">
            <div className='history-section-1'>
                <img src={BidImage} alt='history' />
            </div>
            <div className='bids-section-2'>
                <p>bought by <strong>Ge6o0wa9</strong></p>
                <p>For <strong>4.33 ETH</strong>@10/02/22, 07:18</p>
            </div>
        </div>
    )
}