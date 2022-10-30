import './buyers.css' ;
import Navbar from '../Components/Navbar/Navbar';
import BuyersSidebar from '../Components/BuyerSidebar/BuyersSidebar';
import RfqCard from '../Components/RfqCard/RfqCard';

function BuyersRfq() {
    return ( 
        <section className="buyers-section">
        <Navbar/>
        <div className="buyers-section-div">
            <div className="bsd-left">
            <BuyersSidebar n={3}/>
            </div>
            <div className="bsd-right">
                <div className="buyers-profile-box rfq-container">
                    <RfqCard name="Puneet" date="13/08/2023"/>
                    <RfqCard name="Shivam" date="13/08/2023"/>
                    <RfqCard name="Tushar" date="13/08/2023"/>
                    <RfqCard name="Boei" date="13/08/2023"/>
                </div>
            </div>
        </div>
    </section>
     );
}

export default BuyersRfq;