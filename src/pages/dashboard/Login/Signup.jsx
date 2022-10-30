import './login.css';
import BlueBox from "../Components/BlueBox/BlueBox";
import SignupImg from '../../../assets/signup.png';
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";
import Navbar from '../Components/Navbar/Navbar';
function Signup(props) {
    return (
        <>
        <Navbar/>
            <section className="regi-form-container-signup">
                <div className="regi-form-box">
                    <BlueBox img={SignupImg} hd='Reduce Costs Increase Profits' p='Join the Chemarc Trade Network to Buy and/or Sell chemicals online' />

                    <div className="regi-form-right">
                        <form>

                            <h1>Register</h1>
                            <p>Enter basic details.</p>

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

                            <Link to='/number' className='button'>Register</Link>
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