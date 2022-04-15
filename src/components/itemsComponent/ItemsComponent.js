
import ExploreCard from '../ExploreCard/ExploreCard'
import './ItemsComponent.css'

import {BsChevronBarDown} from 'react-icons/bs'


export default function ItemsComponent () {
return (
    <div className="items-container">
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
            <div className='explore-container'>
                <ExploreCard/>
                <ExploreCard/>
                <ExploreCard/>
                <ExploreCard/>
                <ExploreCard/>
                <ExploreCard/>
            </div>
        </div>
        )
}