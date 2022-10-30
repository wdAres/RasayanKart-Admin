import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";


import Landing from "./pages/landing_page/Landing";
import Shop from "./pages/dashboard/Shop/Shop";
import ProductDetails from "./pages/dashboard/Product_Details/ProductDetails";
import Login from "./pages/dashboard/Login/Login";
import Signup from "./pages/dashboard/Login/Signup";
import Otp from "./pages/dashboard/Login/Otp";
import Number from "./pages/dashboard/Login/Number";
import Cart from "./pages/dashboard/Cart/Cart";
import Cart2 from "./pages/dashboard/Cart/Cart2";
import Seller from "./pages/dashboard/Seller/Seller";
import BuyersProfile from "./pages/dashboard/Buyers/BuyersProfile";
import BuyersHistory from "./pages/dashboard/Buyers/BuyersHistory";
import BuyersDocuments from "./pages/dashboard/Buyers/BuyersDocuments";
import BuyersWallet from "./pages/dashboard/Buyers/BuyersWallet";
import BuyersRfq from "./pages/dashboard/Buyers/BuyersRfq";
import Rfqbasic from "./pages/dashboard/Rfq/RfqBasic";
import RfqRequest from "./pages/dashboard/Rfq/RfqRequest";
import RfqSelection from "./pages/dashboard/Rfq/RfqSelection";
import Rfqform from "./pages/dashboard/Rfq/Rfqform";
import Checkout from './pages/dashboard/Checkout/Checkout'
import Done from "./pages/dashboard/Checkout/Done";
import BuyersHistoryDet from "./pages/dashboard/Buyers/BuyersHistoryDet";
import Rfqdetails from "./pages/dashboard/Rfq/Rfqdetails";
import BuyersRfqdetails from "./pages/dashboard/Buyers/BuyersRfqdetails";
import Buyersusers from "./pages/dashboard/Buyers/Buyersusers";
// import LoginImg from '../../../assets/login.png' ;
// Link

function App() {
  return (
    // <div className="App">
    //   <Landing />
    // </div>
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product" element={<ProductDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/otp" element={<Otp />} />
        <Route path="/number" element={<Number />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/cart2" element={<Cart2 />} />
        <Route path="/seller" element={<Seller />} />


        <Route path="/bp" element={<BuyersProfile />} />
        <Route path="/busers" element={<Buyersusers />} />
        <Route path="/bh" element={<BuyersHistory />} />
        <Route path="/bd" element={<BuyersDocuments />} />
        <Route path="/bw" element={<BuyersWallet />} />
        <Route path="/br" element={<BuyersRfq />} />
        <Route path="/bhd" element={<BuyersHistoryDet />} />
        <Route path="/brd" element={<BuyersRfqdetails />} />


        <Route path="/rfqbasic" element={<Rfqbasic />} />
        <Route path="/rfqdetails" element={<Rfqdetails />} />
        <Route path="/rfqreq" element={<RfqRequest />} />
        <Route path="/rfqselc" element={<RfqSelection />} />
        <Route path="/rfqform" element={<Rfqform />} />

        <Route path='/checkout' element={<Checkout />}/>
        <Route path='/done' element={<Done />}/>


      </Routes>
    </Router>
  );
}
export default App;
