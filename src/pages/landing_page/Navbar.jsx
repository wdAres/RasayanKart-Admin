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

// import LoginS from "./LoginS";



function Navbar() {
    const [isSignup, setSignup] = useState(0);


    function No(index) {
        setSignup(index);
    }


    const [Sidebar, setSidebarActive] = useState(false)

    const SidebarFunc = () => {
        Sidebar ? setSidebarActive(false) : setSidebarActive(true);
    }


    return (
        <nav className="navbar">
            <div className="logo"><span>Rasayan</span> Kart</div>
            <div className="menu">
                <ul>
                    <Link to='/bp' className="nav-links">Buy</Link>
                    <Link to='/seller' className="nav-links">Sell</Link>
                    <Link to='/shop' className="nav-links">Market</Link>
                </ul>
            </div>
            <div className="nav-btns">
                <button className="navBtn-1" onClick={() => No(1)} >Login</button>
                <button className="navBtn-2" onClick={() => No(3)}>Register</button>
            </div>

            <button className='toggle-btn' onClick={SidebarFunc}>
                <div className="btndiv-1"></div>
                <div className="btndiv-2"></div>
                <div className="btndiv-3"></div>
            </button>

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
                    <PopupOtp func1={()=> No(2)} func2={() => No(1)} />
                </div>
            </div>

            <div className={Sidebar === true ? "nav-sidebar df fdc nav-sidebar-active " : "nav-sidebar df fdc "}>
            <div className="logo"><span>Rasayan</span> Kart</div>

            <ul className="landing-sidebar-ul">
                <Link to='/bp' className="lul-li">Buy</Link>
                <Link to='/seller' className="lul-li">Sell</Link>
                <li className="lul-li">market</li>
                <li onClick={() => No(1)} className="lul-li">Login</li>
                <li onClick={() => No(3)} className="lul-li">Sign up</li>
            </ul>
                
            </div>



        </nav>
    );
}

export default Navbar;