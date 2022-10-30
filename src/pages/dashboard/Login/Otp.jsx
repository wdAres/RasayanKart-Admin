import './login.css';
import BlueBox from "../Components/BlueBox/BlueBox";
import SignupImg from '../../../assets/signup.png';
import React, {  useState } from "react";

// import OTPInput, { ResendOTP } from "otp-input-react";
import OTPInput from "otp-input-react";
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";
import Navbar from '../Components/Navbar/Navbar';
function Signup(props) {

    const [OTP, setOTP] = useState("");

    return (
        <>
        <Navbar/>
            <section className="regi-form-container-signup">
                <div className="regi-form-box">

                    <BlueBox img={SignupImg} hd='Reduce Costs Increase Profits' p='Join the Chemarc Trade Network to Buy and/or Sell chemicals online' />

                    <div className="regi-form-right">
                        <form>

                            <h1>Register</h1>
                            <p>Enter Otp</p>

                            <div className="regi-input-c otp-box">
                                <OTPInput value={OTP} onChange={setOTP} autoFocus OTPLength={4} otpType="number" disabled={false} />
                                {/* <ResendOTP onResendClick={() => console.log("Resend clicked")} /> */}
                            </div>

                            <Link to='/shop' className='button'>Next</Link>
                            <div className="bottom-txt">Already have an account ?</div>
                            <Link to='/login' className="blue-txt">Login Now</Link>

                        </form>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Signup;