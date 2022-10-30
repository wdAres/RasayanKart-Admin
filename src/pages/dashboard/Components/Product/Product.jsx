import './product.css' ;
import Verified from '../../../../assets/verified.png'
import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import ProductDetails from '../../Product_Details/ProductDetails';

function Product(props) {
    return ( 
        <div className="product-card">
            <div className="verified-tag">
                <img src={Verified} alt="" />
                RK Trusted
            </div>
            <div className="product-img">
                <img src={props.img} alt="" />
            </div>
            <Link to="/product" className="product-name">Calmin Engineers blue paste 20ml</Link>
            <div className="product-loc">
                <div className="product-loc-child">Burhani Suppliers</div>
                <div className="product-loc-child">Chennai</div>
            </div>
            <div className="product-price">
                <div className="product-price-child1">₹50
                <div className="i-btn">i
                    <div className="hover-box">
                        <strong>Information</strong>
                        <p>Actual price may be differ based on multiple factor Click to know more</p>
                        <div className="underb">Click to know more</div>
                    </div>
                </div>
                </div>
                <div className="product-loc-child">20ml</div>
            </div>
            <button className="product-button">Product Details</button>

            <Routes>
                    <Route path="/product" element={<ProductDetails/>} />
                </Routes>
        </div>
     );
}

export default Product;