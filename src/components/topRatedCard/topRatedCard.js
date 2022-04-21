import './topRatedCard.css'
import BrowseCollectionHeaderImage from '../../images/browseCollectionsPage/browseCollections.svg'
import EthereumLogo from '../../images/topRatedCard/ethereumLogo.svg'
export default function TopRatedCard (){
    return(
        <div className='top-rated-card'>
            <p className='top-rated-rank'>1</p>
            <div className="collection-section">
                <img src={BrowseCollectionHeaderImage} alt="toprated" className='collection-image'/>
                <p>Xander</p>
            </div>
            <div className="market-cap-section">
                <img src={EthereumLogo} alt="toprated"/>
                <p>45,145</p>
            </div>
            <div className="avg-price-section">
                <img src={EthereumLogo} alt="toprated"/>
                <p>9.52</p>
            </div>
            <div className='top-rated-button-container'>
                <div className="top-rated-button">
                <p>Buy</p>
            </div>
            </div>
            
        </div>
    )
}