import { Link } from "react-router-dom";
import FooterComponent from "../../components/Footer/footer";
import Header from "../../components/Header/header";
import './searchResults.css'
// import {FaArrowDown} from 'react-icons/fa'
import {BsChevronBarDown} from 'react-icons/bs'
// import ExploreImageOne from '../../images/exploreCard/explore-card-image.svg'
import ExploreCard from "../../components/ExploreCard/ExploreCard";
import { useState } from "react";
export default function SearchResults () {
   const [isItemsContainer ,setIsItemsContainer] = useState(true)
   const [isCollectionContainer, setIsCollectionContainer] = useState(false)

   const renderItemsContainer = () =>{
       if (isItemsContainer){
        return(<div className="items-container">
           <ExploreCard/>
           <ExploreCard/>
           <ExploreCard/>
           <ExploreCard/>
           <ExploreCard/>
           <ExploreCard/>
       </div>)
       }else{
           return null
       }
       
   }

   const renderCollectionContainer = () =>{
       if (isCollectionContainer){
           return(<div className="collections-container">
           <ExploreCard/>
           <ExploreCard/>
           <ExploreCard/>
           <ExploreCard/>
           <ExploreCard/>
           <ExploreCard/>
           <ExploreCard/>
       </div>)
       }else{
           return null
       }
       
   }

  return (
    <div className="search-results-page">
    <Header/>
    <div className="search-results-section-header">
    <h1>Search Results</h1>

    <div className="frame-toggler">
                        <div onClick={()=>{
                            setIsItemsContainer(true)
                            setIsCollectionContainer(false)

                        }}>
                            <p className={isItemsContainer ? 'frame-toggler-active': 'frame-toggler-passive'}>Items</p>
                        </div>
                        <div onClick={()=>{
                            setIsItemsContainer(false)
                            setIsCollectionContainer(true)
                        }}>
                            <p className={isCollectionContainer?  'frame-toggler-active': 'frame-toggler-passive' }>Collections</p>
                        </div>
                </div>

    <div className="filter-container">
        <h4>Filter by:</h4>
        <div className="filter-button">
            <p>Blockchain </p>
            <BsChevronBarDown size={20}/>
            
        </div>
        <div className="filter-button">
            <p>Category </p>
             <BsChevronBarDown size={20}/>
            
        </div>
        <div className="filter-button">
            <p>Price Range </p>
             <BsChevronBarDown size={20}/>
            
        </div>
        <div className="filter-button">
            <p>Time Frame </p>
             <BsChevronBarDown size={20}/>
            
        </div>

    </div>
        </div>
    
    <div className="search-results-container">
        {
            renderItemsContainer()
        }
        {
            renderCollectionContainer()
        }
    </div>
    <div style={{width:'100%', height:'5rem',marginBottom:'5rem', justifyContent:'center', alignItems:'center', display:'flex'}}>
        <div className="browse-collections-button">
            <Link to="/browsecollections"><p> See More</p></Link>
           
        </div>
    </div>
      <FooterComponent/>
    </div>
  );
}
