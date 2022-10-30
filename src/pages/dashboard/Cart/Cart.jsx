import './cart.css';
import Navbar from '../Components/Navbar/Navbar';
import AddIcon from '@mui/icons-material/Add';

import { useState } from 'react';
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";
import CloseIcon from '@mui/icons-material/Close';

function Cart() {
    const [isActive, setisActive] = useState(false);
    const [isPopup, setisPopup] = useState(false);
    return (
        <>
            <section className="place-sec-1">
                <Navbar />
                <h1 className='po-h1'>Place Order</h1>
                <div className="place-order-container">

                    <div className="place-order-left">
                        <div className="pol-header" >
                            <div className="pol-main-header" onClick={() => setisActive(!isActive)}>
                                <div className="big-bold-heading">Payment Summary</div>
                                <div className=""><AddIcon /></div>
                            </div>
                            <div className={isActive ? "pol-header-sibling fold" : "pol-header-sibling"}>
                                <div className="pol-header-sibling-child">
                                    <div className="bold-heading">
                                        Billing Details
                                    </div>
                                    <p>
                                        Mindtree, Banglore, Banglore Karnataka 560059
                                    </p>
                                </div>
                                <div className="pol-header-sibling-child">
                                    <div className="bold-heading">GSTIN</div>
                                    <input type="text" />
                                </div>
                            </div>
                        </div>
                        <div className="pol-bottom w100">
                            <div className="df aic cart-p">
                                <div className="big-bold-heading">Seller</div>
                                <div className="blue-msg">Seller Offline, Pune</div>
                            </div>
                            <div className="df cart-p jcb cart-help-p">
                                <div className="df fdc">
                                    <div className="bold-heading">Product</div>
                                    <p>Camlin Engineers Blue Pastes 20 ml</p>
                                </div>
                                <div className="df fdc ">
                                    <div className="bold-heading">Quantity</div>
                                    <p>1 Pack</p>
                                </div>
                                <div className="df fdc ">
                                    <div className="bold-heading">Amount</div>
                                    <p>10,499.00</p>
                                </div>
                            </div>
                            <div className="cart-p cart-no">
                                <strong>SKU :</strong> 250A55
                            </div>
                            <div className="pol-header-sibling">
                                <div className="pol-header-sibling-child">
                                    <div className="bold-heading">
                                        Shipping Details
                                    </div>
                                    <p>
                                        Mindtree, Banglore, Banglore Karnataka 560059
                                    </p>
                                </div>
                                <div className="pol-header-sibling-child">
                                    <div className="bold-heading">Expected Delivery 2-4 Days</div>

                                </div>
                            </div>
                            <div className="df fdc cart-p">
                                <div className="cart-inpu-box">
                                    <div className="bold-heading">Contact Name</div>
                                    <input type="text" />
                                </div>
                                <div className="cart-inpu-box">
                                    <div className="bold-heading">Mobile Number</div>
                                    <input type="text" />
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="place-order-right">
                        <div className="payment-summary-box">
                            <div className="big-bold-heading tc">
                                Payment Summary
                            </div>
                            <div className="blue-box">
                                <div className="df jcb cart-help-p">
                                    <div className="bold-heading">Product Price (INR)</div>
                                    <p className="">10,000.00</p>
                                </div>
                                <div className="df jcb cart-help-p">
                                    <div className="bold-heading">Product Price (INR)</div>
                                    <p className="">10,000.00</p>
                                </div>
                                <div className="df jcb cart-help-p">
                                    <div className="bold-heading">Product Price (INR)</div>
                                    <p className="">10,000.00</p>
                                </div>
                                <div className="df jcb cart-help-p">
                                    <div className="bold-heading">Product Price (INR)</div>
                                    <p className="">10,000.00</p>
                                </div>
                            </div>
                        </div>

                        <button className='backbtn'>Back</button>
                        <button onClick={() => setisPopup(!isPopup)} className='contbtn'>Continue</button>
                    </div>
                </div>
            </section>

            <div className={isPopup ? "popupbox active-popup" : "popupbox"}>
                <div className="popup-overlay"></div>
                <div className="popup-content">
                    <div>
                    <CloseIcon className='popup-i' onClick={() => setisPopup(!isPopup)} />
                    <h1>Payment Milestone</h1>
                    <div className="pc-cart-r">
                        <span>Advance Payment</span>
                        <span>20,000.00</span>
                    </div>
                    <div className="input-heading-container">
                        <div className="input-heading">Date</div>
                        <div className="input-heading">Percentage</div>
                        <div className="input-heading">Payment</div>
                    </div>
                    <div className="input-rows">
                        <input type="text" className="ir1" />
                        <input type="text" className="ir1" />
                        <input type="text" className="ir1" />
                    </div>
                    <div className="input-rows">
                        <input type="text" className="ir1" />
                        <input type="text" className="ir1" />
                        <input type="text" className="ir1" />
                    </div>
                    <div className="input-rows">
                        <input type="text" className="ir1" />
                        <input type="text" className="ir1" />
                        <input type="text" className="ir1" />
                    </div>

                    <button className='c-p-i-b'>Add More <AddIcon /></button>
                    </div>

                    <Link to='/cart2' className="contbtn">Continue</Link>
                </div>
            </div>
        </>
    );
}

export default Cart;