import './done.css' ;
import DoneImg from '../../../assets/complete.png'
import Navbar from '../Components/Navbar/Navbar';
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";

function Done() {
    return ( 
        <section className="place-sec-1">
            <Navbar />
            <div className="checkout-done">
                <div className="cd-top">
                    <img src={DoneImg} alt=" " />
                    <h1>Thank you your order has been placed</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
                </div>
                <div className="cd-bottom">
                    <Link className="cd-bottom-c" to='/shop'>Go to orders details</Link>
                </div>
            </div>
        </section>
     );
}

export default Done;