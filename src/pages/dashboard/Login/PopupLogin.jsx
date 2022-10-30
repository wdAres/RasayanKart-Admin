import './login.css';
import BlueBox from "../Components/BlueBox/BlueBox";
import LoginImg from '../../../assets/login.png';
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";
import { useState } from 'react';


function PopupLogin(props) {


    return (
        <>
            <BlueBox img={LoginImg} hd='Reduce Costs Increase Profits' p='Join the Chemarc Trade Network to Buy and/or Sell chemicals online' />

            <div className="regi-form-right">
                <form>

                    <div>
                    <h1>Login</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, aliquam!</p>
                    </div>

                    <div>
                    <div className="regi-input-c">
                        <input type="email" placeholder="email" required />
                    </div>
                    <div className="regi-input-c">
                        <input type="password" placeholder="password" required />
                        <div className="blue-txt">Forget Password?</div>
                    </div>
                    </div>

                    <div>
                    <Link to='/shop' className='button'>Sign in</Link>
                    <div className="bottom-txt">New to Rasyan Cart</div>
                    <div onClick={props.func} className="blue-txt">Register Now</div>
                    </div>

                </form>
            </div>
        </>
    );
}

export default PopupLogin;