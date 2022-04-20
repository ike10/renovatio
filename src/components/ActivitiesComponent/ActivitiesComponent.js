import './ActivitiesComponent.css'
import {BsChevronBarDown} from 'react-icons/bs'
// import TopRated from '../../routes/topRated/topRated'
import TopRatedCard from '../topRatedCard/topRatedCard'

export default function ActivitiesComponent(){
    return (
        <div className="activities-container">
            <div className="activities-filter-container">
                <h4>Filter by:</h4>
                <div className="activities-filter-button-container">
                <div className="activities-filter-button">
                    <p>Blockchain </p>
                    <BsChevronBarDown size={20}/>
                    
                </div>
                <div className="activities-filter-button">
                    <p>Event Type </p>
                    <BsChevronBarDown size={20}/>
                    
                </div>
                <div className="activities-filter-button">
                    <p>Time Frame </p>
                    <BsChevronBarDown size={20}/>
                    
                </div>
                </div>
            </div>
            <div className='main-container'>
                <div className='activities-table'>
<div className="activities-table-header">
                <p>#</p>
                <p>Collection</p>
                <p>Market Cap</p>
                <p>Avg Price</p>

            
            
            </div>
            <div className="activities-table-body">
                <TopRatedCard/>
                <TopRatedCard/>
                <TopRatedCard/>
                <TopRatedCard/>
                <TopRatedCard/>
                <TopRatedCard/>
            </div>
                </div>
               

            </div>
            </div>
    )
}