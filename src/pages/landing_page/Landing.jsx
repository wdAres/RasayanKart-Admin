import './landing.css';
import Navbar from "./Navbar";
import Brands from "./Brands";
import Quality from "./Quality";
import Work from "./Work";
import Reviews from "./Reviews";
import Contact from "./Contact";
import Subscribe from "./Subscribe";
import Footer from "./Footer";

// Landing Images

import Limg1 from '../../assets/indeximg.png'
import Ellipse1 from "../../assets/Ellipse8.png";
import Ellipse2 from "../../assets/Ellipse9.png";
import PopupLogin from '../dashboard/Login/PopupLogin';




function Landing() {
    
    return (
        <>
            {/* NAVBAR + SECTION-1 */}
            <section className="landing-sec-1">

                <Navbar />

                <div className="sec1-div">
                    <h1>Reduce Cost <br /> Increase Profits.</h1>
                    <p>Join the RasayanKart trade network to <br /> Buy and/or Sell cchemicals online.</p>
                    <button>Join Our Network</button>
                </div>

                <div className="LandingImg">
                    <img className="li-1" src={Ellipse2} alt=" " />
                    <img className="li-2" src={Ellipse1} alt=" " />
                    <img className="li-3" src={Limg1} alt=" " />
                </div>

                

            </section>


            <Brands />


            <Quality />


            <Work />


            <Reviews />


            <Contact />


            <Subscribe />


            <Footer />
        </>
    );
}

export default Landing;