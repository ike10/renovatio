import { Link } from "react-router-dom";
import FooterComponent from "../../components/Footer/footer";
import Header from "../../components/Header/header";
import './explore.css'
// import {FaArrowDown} from 'react-icons/fa'
import {BsChevronBarDown} from 'react-icons/bs'
// import ExploreImageOne from '../../images/exploreCard/explore-card-image.svg'
import ExploreCard from "../../components/ExploreCard/ExploreCard";
export default function Explore () {

  

  return (
    <div className="explore-page">
    <Header/>
    <div className="explore-section-header">
    <h1>Explore Collection</h1>
    <div className="filter-container">
        <h4>Filter by:</h4>
        <div className="filter-button-container">
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
        </div>
    
    <div className="explore-container">
        <ExploreCard/>
        <ExploreCard/>
        <ExploreCard/>
        <ExploreCard/>
        <ExploreCard/>
        <ExploreCard/>
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
