// import { Link } from "react-router-dom";
import FooterComponent from "../../components/Footer/footer";
import Header from "../../components/Header/header";
import './browseCollections.css'
// import {FaArrowDown} from 'react-icons/fa'
// import {BsChevronBarDown} from 'react-icons/bs'
import ExploreImageOne from '../../images/exploreCard/explore-card-image.svg'
import BrowseCollectionHeaderImage from '../../images/browseCollectionsPage/browseCollections.svg'
// import ExploreCard from "../../components/ExploreCard/ExploreCard"
import ItemsComponent from "../../components/itemsComponent/ItemsComponent";
import { useState } from "react";
import ActivitiesComponent from "../../components/ActivitiesComponent/ActivitiesComponent";

export default function BrowseCollections () {
  const [isItemsContainer, setisItemsContainer] = useState(true)
  const [isActivitiesContainer, setisActivitiesContainer] = useState(false)

  const renderItemsComponent =()=>{
      if (isItemsContainer){
          return <ItemsComponent/>
      }else{
          return null
      }
  }

  const renderActivitiesComponent = () =>{
      if (isActivitiesContainer){
          return <ActivitiesComponent/>
      }else{
          return null
     }
  }

  return (
    <div className="browse-collections-page">
    <Header/>
    <div className="browse-collections-header">
        <img src={BrowseCollectionHeaderImage} alt='broswsecollection' />
    </div>
    <div className="browse-collections-profile-image-container">
        <img src={ExploreImageOne} alt='browse' className="browse-collections-profile-image"/>
    </div>
    <div className="browse-collections-section-header">
    <h1>Bored Ape</h1>
    <div className="creator-info">
        <h3>Creator </h3>
        <div>
            <img src={ExploreImageOne} alt='browse'/>
            <p>oiefinqeinq0ffinoieqngf</p>

        </div>
    </div>
     <div className="browse-collections-metrics">
                    <div className="browse-collections-metrics-card-1">
                        <h4>34.5k</h4>
                        <p>Owners</p>
                    </div>
                     <div className="browse-collections-metrics-card-2">
                        <h4>95k</h4>
                        <p>Items</p>
                    </div>
                     <div className="browse-collections-metrics-card-3">
                        <h4>35.3M</h4>
                        <p>Market Cap</p>
                    </div>
                    <div className="browse-collections-metrics-card-4">
                        <h4>28.2M</h4>
                        <p>Total Volume</p>
                    </div>
                    <div className="browse-collections-metrics-card-5">
                        <h4>16k</h4>
                        <p>Highest Sale</p>
                    </div>
    </div>
    <p className="browse-collections-description">
        Donec rutrum accumsan nulla, aliquet lobortis velit venenatis a. Etiam ut risus quis odio dapibus sagittis. Nullam at tempor elit. Nam ac elementum ante. Ut vestibulum volutpat risus a gravida. Nunc id enim neque.
    </p>
    <div className="frame-toggler">
        <div onClick={()=>{
            setisActivitiesContainer(false)
            setisItemsContainer(true)

        }}>
            <p className={isItemsContainer ? 'frame-toggler-active': 'frame-toggler-passive'}>Items</p>
        </div>
        <div onClick={()=>{
            setisActivitiesContainer(true)
            setisItemsContainer(false)
        }}>
            <p className={isActivitiesContainer?  'frame-toggler-active': 'frame-toggler-passive' }>Activities</p>
        </div>
    </div>
    
        </div>
    
    <div className="main-container">
        {
            renderItemsComponent()
           
        }
        {
            renderActivitiesComponent()
        }
    </div>
      <FooterComponent/>
    </div>
  );
}
