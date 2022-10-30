import './login.css';
import BlueBox from "../Components/BlueBox/BlueBox";
import LoginImg from '../../../assets/login.png' ;
// 
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";
// import Signup from './Signup';
import Navbar from '../Components/Navbar/Navbar';

function Login(props) {
    return (
        <>
        <Navbar/>
            <section className="regi-form-container">
                <div className="regi-form-box">

                    <BlueBox img={LoginImg} hd='Reduce Costs Increase Profits' p='Join the Chemarc Trade Network to Buy and/or Sell chemicals online' />

                    <div className="regi-form-right">
                        <form>

                            <h1>Login</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, aliquam!</p>

                            <div className="regi-input-c">
                                <input type="email" placeholder="email" required />
                            </div>
                            <div className="regi-input-c">
                                <input type="password" placeholder="password" required />
                                <div className="blue-txt">Forget Password?</div>
                            </div>

                            <Link to='/shop' className='button'>Sign in</Link>
                            <div className="bottom-txt">New to Rasyan Cart</div>
                            <Link to='/signup' className="blue-txt">Register Now</Link>

                        </form>
                    </div>
                </div>

                
            </section>
        </>
    );
}

export default Login;