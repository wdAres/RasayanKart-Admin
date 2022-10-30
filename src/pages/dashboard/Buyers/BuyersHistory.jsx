import Navbar from '../Components/Navbar/Navbar';
import BuyersSidebar from '../Components/BuyerSidebar/BuyersSidebar';
import './buyers.css' ;
import ProductHistory from '../Components/ProductHistory/ProductHistory';
import Img from '../../../assets/product.png';
import { Link } from "react-router-dom";
function BuyersHistory() {
    return ( 
        <section className="buyers-section">
            <Navbar/>
            <div className="buyers-section-div">
                <div className="bsd-left">
                <BuyersSidebar n={2}/>
                </div>
                <div className="bsd-right">
                    <div className="buyers-profile-box">
                        <div className="history-container">
                            <div className='hc-card'>
                            <ProductHistory val={true}  img={Img}/>
                            <Link to='/bhd' className="history-btn">View Details</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
     );
}

export default BuyersHistory;