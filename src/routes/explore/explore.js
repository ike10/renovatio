import { Link } from "react-router-dom";
import FooterComponent from "../../components/Footer/footer";
import Header from "../../components/Header/header";
import './explore.css'
import {useState} from 'react'
// import {FaArrowDown} from 'react-icons/fa'
import {BsChevronBarDown} from 'react-icons/bs'
// import ExploreImageOne from '../../images/exploreCard/explore-card-image.svg'
import ExploreCard from "../../components/ExploreCard/ExploreCard";
export default function Explore () {

    const [isBlockchainDropdown, setIsBlockchainDropdown] = useState(false)
const [isTImeFilterDropdown, setIsTimeFilterDropdown] = useState(false)
const [isPriceFilterDropdown, setIsPriceFilterDropdown] = useState(false)
const [isCategoryFilterDropdown, setIsCategoryFilterDropdown] = useState(false)

const renderBlockchainDropdown =()=>{
    if (isBlockchainDropdown){
        return(
            <div className="collections-header-filter-dropdown">
                        <div className="collections-header-filter-dropdown-card">
                            <p>Ethereum</p>
                        </div>
                        <div className="collections-header-filter-dropdown-card">
                            <p>Polygon</p>
                        </div>
                        <div className="collections-header-filter-dropdown-card">
                            <p>Binance</p>
                        </div>
                    </div>
        )
    }else{
        return null
    }
}

const renderTimeFilter =()=>{
    if (isTImeFilterDropdown){
        return(
            <div className="collections-header-filter-dropdown">
                        <div className="collections-header-filter-dropdown-card">
                            <p>7days</p>
                        </div>
                        <div className="collections-header-filter-dropdown-card">
                            <p>1 Month</p>
                        </div>
                        <div className="collections-header-filter-dropdown-card">
                            <p>2 Months</p>
                        </div>
                    </div>
        )
    }else{
        return null
    }
}

const renderCategoryFilter =()=>{
    if (isCategoryFilterDropdown){
        return(
            <div className="collections-header-filter-dropdown">
                        <div className="collections-header-filter-dropdown-card">
                            <p>7days</p>
                        </div>
                        <div className="collections-header-filter-dropdown-card">
                            <p>1 Month</p>
                        </div>
                        <div className="collections-header-filter-dropdown-card">
                            <p>2 Months</p>
                        </div>
                    </div>
        )
    }else{
        return null
    }
}

const renderPriceFilter =()=>{
    if (isPriceFilterDropdown){
        return(
            <div className="collections-header-filter-dropdown">
                        <div className="collections-header-filter-dropdown-card">
                            <p>20-50</p>
                        </div>
                        <div className="collections-header-filter-dropdown-card">
                            <p>50-100</p>
                        </div>
                        <div className="collections-header-filter-dropdown-card">
                            <p>100-1000</p>
                        </div>
                    </div>
        )
    }else{
        return null
    }
}
  

  return (
    <div className="explore-page">
    <Header/>
    <div className="explore-section-header">
    <h1>Explore Collection</h1>
    <div className="filter-container">
        <h4>Filter by:</h4>
        <div className="filter-button-container">
        <div  onClick={()=>{
                        setIsTimeFilterDropdown(false)
                        setIsPriceFilterDropdown(false)
                        setIsCategoryFilterDropdown(false)
                        setIsBlockchainDropdown(!isBlockchainDropdown)
                    }}  className="filter-button">
            <p>Blockchain </p>
            <BsChevronBarDown size={20}/>
            
        </div>
        <div  onClick={()=>{
                        setIsTimeFilterDropdown(false)
                        setIsBlockchainDropdown(false)
                        setIsPriceFilterDropdown(false)
                        setIsCategoryFilterDropdown(!isCategoryFilterDropdown)
                    }}  className="filter-button">
            <p>Category </p>
             <BsChevronBarDown size={20}/>
            
        </div>
        <div  onClick={()=>{
                        setIsTimeFilterDropdown(false)
                        setIsBlockchainDropdown(false)
                        setIsCategoryFilterDropdown(false)
                        setIsPriceFilterDropdown(!isPriceFilterDropdown)
                    }}  className="filter-button">
            <p>Price Range </p>
             <BsChevronBarDown size={20}/>
            
        </div>
        <div  onClick={()=>{
                        setIsTimeFilterDropdown(!isTImeFilterDropdown)
                        setIsBlockchainDropdown(false)
                        setIsCategoryFilterDropdown(false)
                        setIsPriceFilterDropdown(false)
                        
                    }}  className="filter-button">
            <p>Time Frame </p>
             <BsChevronBarDown size={20}/>
            
        </div>
        {
            renderBlockchainDropdown()
        }
        {
            renderTimeFilter()
        }
        {
            renderCategoryFilter()
        }

        {
            renderPriceFilter()
        }
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
