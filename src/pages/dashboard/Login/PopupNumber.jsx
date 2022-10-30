import './login.css';
import BlueBox from "../Components/BlueBox/BlueBox";
import SignupImg from '../../../assets/signup.png';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

import React, { useState } from "react";


function PopupNumber(props) {

    const [value, setValue] = useState()

    return (
        <>

            <BlueBox img={SignupImg} hd='Reduce Costs Increase Profits' p='Join the Chemarc Trade Network to Buy and/or Sell chemicals online' />

            <div className="regi-form-right">
                <form>

                    <div>
                        <h1>Register</h1>
                        <p>Enter Otp</p>
                    </div>

                    <div>
                        <div className="regi-input-c otp-box">
                            <PhoneInput
                                placeholder="Enter phone number"
                                value={value}
                                onChange={setValue} />
                        </div>
                    </div>

                    <div>
                        <div onClick={props.func1} className='button'>Next</div>
                        <div className="bottom-txt">Already have an account ?</div>
                        <div onClick={props.func2} className="blue-txt">Login Now</div>
                    </div>

                </form>
            </div>
        </>
    );
}

export default PopupNumber;