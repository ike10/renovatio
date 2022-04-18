import './ActivitiesComponent.css'
import {BsChevronBarDown} from 'react-icons/bs'

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
                <table className="activities-table">
                                        <thead>
                                            <tr className="">
                                                <th height="80">
                                                 <p className="mt-3">Item</p>
                                                    {/* <p className="table-pet mb-4">$0 <br /> /billed monthly</p> */}
                                                </th>
                                                <th height="80">
                                                    <p className="">Price</p>
                                                    {/* <p className="table-pet mb-4">$0 <br /> /billed monthly</p> */}
                                                    {/* <button className="btn nav-btn1-1 mb-4">Get Started</button> */}

                                                </th>
                                                <th height="80">
                                                    <p className="mt-3">Quantity</p>
                                                    {/* <p className="table-pet mb-4">$0.08 <br /> /billed monthly</p> */}
                                                    {/* <button className="btn nav-btn1-1 mb-4">Get Started</button> */}

                                                </th>
                                                <th height="80">
                                                    <p className="mt-3">from</p>
                                                    {/* <p className="table-pet mb-4">$0.15 <br /> /billed monthly</p> */}
                                                    {/* <button className="btn nav-btn1-1 mb-4">Get Started</button> */}

                                                </th>
                                                                            <th height="80">
                                                    <p className="mt-3">To</p>
                                                    {/* <p className="table-pet mb-4">$0.15 <br /> /billed monthly</p> */}
                                                    {/* <button className="btn nav-btn1-1 mb-4">Get Started</button> */}

                                                </th>
                                                                            <th height="80">
                                                    <p className="mt-3">Purpose</p>
                                                    {/* <p className="table-pet mb-4">$0.15 <br /> /billed monthly</p> */}
                                                    {/* <button className="btn nav-btn1-1 mb-4">Get Started</button> */}

                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="">
                                                <th scope="row" height="70">Bored Ape #014</th>
                                                <td>Yes</td>
                                                <td>Yes</td>
                                                <td>Yes</td>
                                                <td>Yes</td>
                                                <td>Yes</td>
                                            </tr>
                                            <tr>
                                                <th scope="row" height="70">Bored Ape #015</th>
                                                <td>Yes</td>
                                                <td>No</td>
                                                <td>No</td>
                                                <td>No</td>
                                                <td>No</td>
                                            </tr>
                                            <tr className="">
                                                <th scope="row" height="70">Bored Ape #104</th>
                                                <td>Yes</td>
                                                <td>No</td>
                                                <td>No</td>
                                                <td>No</td>
                                                <td>No</td>
                                            </tr>
                                            <tr>
                                                <th scope="row" height="70">Bored Ape #098</th>
                                                <td>Yes</td>
                                                <td>No</td>
                                                <td>Yes</td>
                                                <td>No</td>
                                                <td>Yes</td>
                                            </tr>
                                            <tr className="">
                                                <th scope="row" height="70">Bored Ape #034</th>
                                                <td>Yes</td>
                                                <td>No</td>
                                                <td>No</td>
                                                <td>No</td>
                                                <td>No</td>
                                            </tr>
                                        </tbody>
                                    </table>

            </div>
            </div>
    )
}