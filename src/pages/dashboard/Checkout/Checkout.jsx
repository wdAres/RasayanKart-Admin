import Navbar from '../Components/Navbar/Navbar';
import './checkout.css';
import Checkoutimg from '../../../assets/checkout.png'
import Qr from '../../../assets/qr.png'

import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";

function Checkout() {
    return (
        <section className="place-sec-1">
            <Navbar />
            <div className="checkout-container">
                <h1>Payment</h1>
                <div className="checkout-radio-box">
                    <div className="df aic">
                    <div className='block-label'><input id='payment-radio-1' type="radio" name='payment-radio' /></div>
                        <label htmlFor="payment-radio-1">NEFT, RTGS, IMPS </label>
                    </div>
                    <div className="df aic">
                    <div className='block-label'><input id='payment-radio-2' type="radio" name='payment-radio' /></div>
                        <label htmlFor="payment-radio-2">CHECK</label>
                    </div>
                    <div className="df aic">
                    <div className='block-label'><input id='payment-radio-3' type="radio" name='payment-radio' /></div>
                        <label htmlFor="payment-radio-3">RK CREDIT CARD</label>
                    </div>
                </div>
                <div className="checkout-main-box">
                    <div className="checkout-top-box">
                        <img src={Checkoutimg} alt="" />
                        <ul>
                            <li>Account Name : Investopher research services private limited</li>
                            <li>Account No. : 50200054325020</li>
                            <li>IFSC code : HDFC0003886</li>
                            <li>Branch : LIG SQUARE INDORE 452010</li>
                            <li>Bank Name : HDFC</li>
                        </ul>
                    </div>
                    <div className="checkout-bottom-box">
                        <img src={Qr} alt="" />
                        <div className="checkout-bottom-btns">
                            <Link to='/done' className="cbb">Online Payment</Link>
                            <Link to='/done' className="cbb">Offline Payment</Link>
                        </div>
                    </div>
                </div>
                <div action="" className="checkout-form">
                    <input type="text" id='invoice' placeholder='Invoice.pdf' disabled/>
                    <button>Download</button>
                </div>
                <form action="" className="checkout-form">
                    <input type="text" id='reference' placeholder='Reference Number' />
                    <button>Upload</button>
                </form>
            </div>

        </section>
    );
}

export default Checkout;