import './login.css';
import BlueBox from "../Components/BlueBox/BlueBox";
import SignupImg from '../../../assets/signup.png';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

import React, { useState } from "react";

import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";
import Navbar from '../Components/Navbar/Navbar';

function Signup(props) {

    const [value, setValue] = useState()

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
                                <PhoneInput
                                    placeholder="Enter phone number"
                                    value={value}
                                    onChange={setValue} />
                            </div>

                            <Link to='/otp' className='button'>Next</Link>
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