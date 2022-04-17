import Header from "../../components/Header/header";
import './itemScreen.css'
import ItemMenuIcon from '../../images/itemsPage/itemMenu.svg'
import ExploreImageOne from '../../images/exploreCard/explore-card-image.svg'
// import {GiHamburgerMenu} from 'react-icons/gi'
import EthereumIcon from '../../images/topRatedCard/ethereumLogo.svg'
import { useState } from "react";
// import ActivitiesComponent from "../../components/ActivitiesComponent/ActivitiesComponent";
// import ItemsComponent from "../../components/itemsComponent/ItemsComponent";
import BidsComponent from "../../components/BidsComponent/BidsComponent";
import HistoryComponent from "../../components/HistoryComponent/HistoryComponent";
export default function ItemScreen(){

      const [isBidsContainer, setisBidsContainer] = useState(true)
  const [isHistoryContainer, setisHistoryContainer] = useState(false)
   const [isDescriptionCard, setIsDescriptionCard] = useState(false)
  const renderBidsComponent =()=>{
      if (isBidsContainer){
          return (
              <div>
                  <BidsComponent/>
                  <BidsComponent/>
                  <BidsComponent/>
                  <BidsComponent/>
              </div>
          )
      }else{
          return null
      }
  }

  const renderHistoryComponent = () =>{
      if (isHistoryContainer){
          return (
              <div>
                  <HistoryComponent/>
                  <HistoryComponent/>
                  <HistoryComponent/>
              </div>
          )
      }else{
          return null
     }
  }

    return(
        <div className="item-screen">
            <Header/>
            <div className="main-item-container">
                <div className="main-item-section-1" 
                  onMouseEnter={()=>{
                                    setIsDescriptionCard(true)
                                    // alert('mouse  don enter')
                                }}
                 onMouseLeave={() => {
                                    setIsDescriptionCard(false)
                                    // alert('mouse don comot')
                                }}
                >
                     <img src={ExploreImageOne} alt="item" />
                    {
                        isDescriptionCard && (
                            <div className="description-card">
                                <h3>Description</h3>
                                <p>Donec rutrum accumsan nulla, aliquet lobortis velit venenatis a. Etiam ut risus quis odio dapibus sagittis. Nullam at tempor elit. Nam ac elementum ante. Ut vestibulum volutpat risus a gravida. Nunc id enim neque.</p>
                            </div>
                        )
                    }
                   
                </div>
                <div className="main-item-section-2">
                    <div className="item-title">
                        <h2>Bored Ape #001</h2>
                        <img src={ItemMenuIcon} alt="eth"/>
                    </div>
                    <div className="item-price">
                        <img src={EthereumIcon} alt="eth"/>
                        <h4>5.018 ETH</h4>
                    </div>

                    <div className="item-description">
                        <div className="item-description-section">
                            <div className="item-description-card">
                                <h5>Owner</h5>
                                <div  >
                                    <img src={ExploreImageOne} alt='item-descr' className="item-description-image"/>
                                    <p>Oxorion66</p>
                                </div>
                            </div>
                            <div className="item-description-card">
                                <h5>Creator</h5>
                                <div>
                                    <img src={ExploreImageOne} alt='item-descr' className="item-description-image" />
                                    <p>Stanlee7</p>
                                </div>
                            </div>
                        </div>

                        <div className="item-description-section">
                            <div className="item-description-card">
                                <h5>Collection</h5>
                                <div>
                                    <img src={ExploreImageOne} alt='item-descr' className="item-description-image"/>
                                    <p>Bored Ape</p>
                                </div>
                            </div>
                            <div className="item-description-card">
                                <h5>Blockchain</h5>
                                <div>
                                    <img src={ExploreImageOne} alt='item-descr' className="item-description-image" />
                                    <p>Ethereum</p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="item-bids-section">
                    <div className="frame-toggler">
                        <div onClick={()=>{
                            setisHistoryContainer(false)
                            setisBidsContainer(true)

                        }}>
                            <p className={isBidsContainer ? 'frame-toggler-active': 'frame-toggler-passive'}>Bids</p>
                        </div>
                        <div onClick={()=>{
                            setisHistoryContainer(true)
                            setisBidsContainer(false)
                        }}>
                            <p className={isHistoryContainer?  'frame-toggler-active': 'frame-toggler-passive' }>History</p>
                        </div>
                </div>
                <div style={{display:'flex', flexDirection:'column'}}>
                    {
                        renderBidsComponent()
                    }

                    {
                        renderHistoryComponent()
                    }
                     </div>
                     </div>

                     <div className="button-section">
                         <div  className="buy-button">
                             <p>Buy for 5.018 ETH</p>
                         </div>
                         <div className="bid-button">
                             <p>Place a Bid</p>
                         </div>
                     </div>

                </div>
                
            </div>
        </div>
    )
}