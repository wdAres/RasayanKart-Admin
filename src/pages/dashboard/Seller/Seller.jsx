import './seller.css';
// import SellerProfile from '../Components/SellerProfile/SellerProfile';
import Navbar from "../Components/Navbar/Navbar";
import Dp from "../../../assets/dp.png";
import Tabs from '../Components/Tabs/Tabs';

function Seller() {
    return (
        <><Navbar />
            {/* <section className="seller-section">
                
                <SellerProfile img={Dp} />
            </section> */}
            <section className="seller-tabs-section">
                <Tabs img={Dp}  />
            </section>
        </>
    );
}

export default Seller;