// import { Link } from "react-router-dom";
import FooterComponent from "../../components/Footer/footer";
import Header from "../../components/Header/header";
import './topRated.css'
// import {FaArrowDown} from 'react-icons/fa'
import {BsChevronBarDown} from 'react-icons/bs'
import '../../components/itemsComponent/ItemsComponent.css'
// import ExploreImageOne from '../../images/exploreCard/explore-card-image.svg'
import BrowseCollectionHeaderImage from '../../images/browseCollectionsPage/browseCollections.svg'
// import ExploreCard from "../../components/ExploreCard/ExploreCard"
// import ItemsComponent from "../../components/itemsComponent/ItemsComponent";
// import { useState } from "react";
// import ActivitiesComponent from "../../components/ActivitiesComponent/ActivitiesComponent";
import TopRatedCard from "../../components/topRatedCard/topRatedCard";

export default function TopRated () {

    

  return (
    <div className="top-rated-page">
    <Header/>
    <div className="top-rated-header">
        <img src={BrowseCollectionHeaderImage} alt='broswsecollection' />
    </div>
    {/* <div className="top-rated-profile-image-container">
        <img src={ExploreImageOne} alt='browse' className="top-rated-profile-image"/>
    </div> */}
    <div className="top-rated-section-header">
    <h2>Top Rated Collections</h2>
    <div className="top-rated-filter-container">
        <div className="filter-button">
                    <p>Blockchain </p>
                    <BsChevronBarDown size={20}/>
                    
                </div>
                <div className="filter-button">
                    <p>Category </p>
                    <BsChevronBarDown size={20}/>
                    
                </div>
    </div>
    <div>

    </div>
       
        </div>
    
    <div className="main-container">
        <div className="main-table">
            <div className="table-header">
                <p>#</p>
                <p>Collection</p>
                <p>Market Cap</p>
                <p>Avg Price</p>
            </div>
            <div className="table-body">
                <TopRatedCard/>
                <TopRatedCard/>
                <TopRatedCard/>
                <TopRatedCard/>
                <TopRatedCard/>
                <TopRatedCard/>
            </div>
        </div>

    </div>
      <FooterComponent/>
    </div>
  );
}
