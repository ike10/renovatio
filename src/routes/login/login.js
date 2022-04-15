// import { Link } from "react-router-dom";
import FooterComponent from "../../components/Footer/footer";
import Header from "../../components/Header/header";
import './login.css'

import EthereumLogin from '../../images/loginPage/ethereumLogin.svg'
import BinanceLogin from '../../images/loginPage/binanceLogin.svg'
import PolygonLogin from '../../images/loginPage/polygonLogin.svg'

export default function Create () {
  return (
    <div className="login-page">
      <Header/>
      <div className="login-section"> 
        <div className="login-info">
            <h2>Kindly log in to start creating awesomeness</h2>
            <p>Choose the most suitable blockchain for your project</p>
        </div>
        <div className="login-form">
            <div className="login-form-inner">
                    <div className="login-form-inner-1">
                     <img src={EthereumLogin} alt="ethereum" className="login-image"/>
                     <p>Ethereum</p>
                    </div>
                <div className="login-form-inner-2">
                    <p>Sign In</p>
                </div>
            </div>
            {/* POLYGON */}
            <div className="login-form-inner">
                    <div className="login-form-inner-1">
                     <img src={PolygonLogin} alt="polygon" className="login-image"/>
                     <p>Polygon</p>
                    </div>
                <div className="login-form-inner-2">
                    <p>Sign In</p>
                </div>
            </div>

            {/* BINANCE */}

            <div className="login-form-inner">
                    <div className="login-form-inner-1">
                     <img src={BinanceLogin} alt="binanxe" className="login-image"/>
                     <p>Binance</p>
                    </div>
                <div className="login-form-inner-2">
                    <p>Sign In</p>
                </div>
            </div>
                

        </div>
      </div>
      <FooterComponent/>
    </div>
  );
}
