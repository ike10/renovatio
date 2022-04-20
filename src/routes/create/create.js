// import { Link } from "react-router-dom";
import Header from "../../components/Header/header";
import './create.css'
import chooseFileImage from '../../images/createPage/add_photo_alternate.svg'
export default function Create () {
  return (
    <div className="create-page">
      <Header/>
      <div className="form-container">
        <form className="create-form">
          <div className="create-form-inner-1">
            <div>
                <div className="create-form-media">
                    <img src={chooseFileImage} alt='choose' />
                    <input type="file" accept="image/*" placeholder="Media"/>
                    
                </div>
            </div>
            <div>
                <p>Name</p>
                <input type="text" placeholder="Input Item Name" className="create-form-name"/>
                <p>Description</p>
                <input type="text" placeholder="Add Item Description" className="create-form-description"/>
            </div>
          </div>
           <div className="create-form-inner-2">
                 <div>
                    <p>Price</p>
                    <input type='text' placeholder='5.6' className="create-form-price"/>
                    <p>Category</p>
                    <select type='text' placeholder='choose category`' className="create-form-collection">
                        <option>Choose Category</option>
                    </select>
                    {/* <input type='text' placeholder='choose category`' className="create-form-collection"/> */}
                 </div>
                 <div>
                     <div className="nft-quantity">
                        <div>
                            <p>Quantity</p>
                            <select type='text' placeholder='choose category`' className="create-form-quantity">
                            <option>1</option>
                        </select>
                             {/* <input type='text' placeholder='1`' className="create-form-quantity"/> */}
                        </div>
                        <div>
                            <p>BLockchain</p>
                            <select type='text' placeholder='choose category`' className="create-form-quantity">
                            <option>Ethereum</option>
                        </select>
                             {/* <input type='text' placeholder='Ethereum`' className="create-form-quantity"/> */}
                        </div>
                     </div>
                     <p>Properties</p>
                     <input type='text' placeholder='add properties`' className="create-form-collection"/>
                 </div>
          </div>

      </form>
      <div className="create-item-button">
          <p>Create Item</p>
      </div>
      </div>
      
    </div>
  );
}