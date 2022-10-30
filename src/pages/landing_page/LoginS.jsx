import { useState } from "react";
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";
import PopupLogin from "../dashboard/Login/PopupLogin";
import CloseIcon from '@mui/icons-material/Close';
import PopupSignup from "../dashboard/Login/PopupSignup";
import PopupNumber from "../dashboard/Login/PopupNumber";
import PopupOtp from "../dashboard/Login/PopupOtp";


function LoginS() {

    const [isSignup, setSignup] = useState(0);


    function No(index) {
        setSignup(index);
    }

    
    return ( 
        <>
        <div className={isSignup === 1 ? "popup-c active-popup" : "popup-c"}>
                <div className="login-signup-overlay"></div>
                <div className="login-signup-box">
                    <CloseIcon className='popup-i' onClick={() => No(0)} />
                    <PopupLogin func={() => No(2)} />
                </div>
            </div>
            <div className={isSignup === 2 ? "popup-c active-popup" : "popup-c"}>
                <div className="login-signup-overlay"></div>
                <div className="login-signup-box">
                    <CloseIcon className='popup-i' onClick={() => No(0)} />
                    <PopupSignup func1={() => No(3)} func2={() => No(1)} />
                </div>
            </div>
            <div className={isSignup === 3 ? "popup-c active-popup" : "popup-c"}>
                <div className="login-signup-overlay"></div>
                <div className="login-signup-box">
                    <CloseIcon className='popup-i' onClick={() => No(0)} />
                    <PopupNumber func1={() => No(4)} func2={() => No(1)} />
                </div>
            </div>
            <div className={isSignup === 4 ? "popup-c active-popup" : "popup-c"}>
                <div className="login-signup-overlay"></div>
                <div className="login-signup-box">
                    <CloseIcon className='popup-i' onClick={() => No(0)} />
                    <PopupOtp func={() => No(1)} />
                </div>
            </div>
        </>
     );
}

export default LoginS;