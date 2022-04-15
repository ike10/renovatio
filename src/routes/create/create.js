// import { Link } from "react-router-dom";
import Header from "../../components/Header/header";
import './create.css'

export default function Create () {
  return (
    <div className="create-page">
      <Header/>
      <form className="create-form">
          <div className="create-form-inner-1">
            <div>
                <input type="media" placeholder="Media" className="create-form-media"/>
            </div>
            <div>
                <p>Name</p>
                <input type="text" placeholder="Name" className="create-form-name"/>
                <p>Description</p>
                <input type="text" placeholder="Description" className="create-form-description"/>
            </div>
          </div>
           <div className="create-form-inner-2">
                <div>
                    <p>Price</p>
                 </div>
                 <div>
                 </div>
          </div>
      </form>
    </div>
  );
}