import './login.css';
import BlueBox from "../Components/BlueBox/BlueBox";
import SignupImg from '../../../assets/signup.png';
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";

function PopupSignup(props) {
    return (
        <>
            <BlueBox img={SignupImg} hd='Reduce Costs Increase Profits' p='Join the Chemarc Trade Network to Buy and/or Sell chemicals online' />

            <div className="regi-form-right su">
                <form>

                    <div className="">
                    <h1>Register</h1>
                    <p>Enter basic details.</p>
                    </div>

                    <div>
                        <div className="regi-input-c">
                            <input type="text" placeholder="Name" required />
                        </div>
                        <div className="regi-input-c">
                            <input type="email" placeholder="Email" required />
                        </div>
                        <div className="regi-input-c">
                            <input type="number" placeholder="Mobile No." required />
                        </div>
                        <div className="regi-input-c">
                            <input type="text" placeholder="Company Name" required />
                        </div>
                        <div className="regi-input-c">
                            <select name="" id="">
                                <option value="A">A</option>
                                <option value="B">B</option>
                                <option value="C">C</option>
                            </select>
                        </div>
                        <div className="regi-input-c">
                            <input type="password" placeholder="Enter Password" required />
                        </div>
                        <div className="regi-input-c">
                            <input type="password" placeholder="Re-enter Password" required />
                        </div>
                    </div>

                    <div>
                        <Link to='/shop' className='button'>Register</Link>
                        <div  className="bottom-txt">Already have an account ?</div>
                        <div onClick={props.func2} className="blue-txt">Login Now</div>
                    </div>

                </form>
            </div>
        </>
    );
}

export default PopupSignup;