import './login.css';
import BlueBox from "../Components/BlueBox/BlueBox";
import PopupOtpImg from '../../../assets/signup.png';
import React, {  useState } from "react";
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";
// import OTPInput, { ResendOTP } from "otp-input-react";
import OTPInput from "otp-input-react";
function PopupOtp(props) {

    const [OTP, setOTP] = useState("");

    return (
        <>

                    <BlueBox img={PopupOtpImg} hd='Reduce Costs Increase Profits' p='Join the Chemarc Trade Network to Buy and/or Sell chemicals online' />

                    <div className="regi-form-right">
                        <form>

                            <div>
                            <h1>Register</h1>
                            <p>Enter Otp</p>
                            </div>

                            <div>
                            <div className="regi-input-c otp-box hehe-otp">
                                <OTPInput value={OTP} onChange={setOTP} autoFocus OTPLength={4} otpType="number" disabled={false} />
                                {/* <ResendOTP onResendClick={() => console.log("Resend clicked")} /> */}
                            </div>
                            </div>

                            <div>
                            <Link className='button' onClick={props.func1}>Next</Link>
                            <div className="bottom-txt">Already have an account ?</div>
                            <div onClick={props.func2}  className="blue-txt">Login Now</div>
                            </div>

                        </form>
                    </div>
        </>
    );
}

export default PopupOtp;