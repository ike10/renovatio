import './ActivitiesComponent.css'
import {BsChevronBarDown} from 'react-icons/bs'
// import TopRated from '../../routes/topRated/topRated'
// import TopRatedCard from '../topRatedCard/topRatedCard'
import ActivitiesCard from '../ActivitiesCard/ActivitiesCard'

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
                <p>Item</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>From</p>
                <p>To</p>
                <p>Purpose</p>

            
            
            </div>
            <div className="activities-table-body">
               <ActivitiesCard/>
               <ActivitiesCard/>
               <ActivitiesCard/>
               <ActivitiesCard/>
               <ActivitiesCard/>
               <ActivitiesCard/>
            </div>
                </div>
               

            </div>
            </div>
    )
}