import './buyers.css' ;
import Navbar from '../Components/Navbar/Navbar';
import BuyersSidebar from '../Components/BuyerSidebar/BuyersSidebar';
import CreateIcon from '@mui/icons-material/Create';
import Pdf from '../Components/Pdf/Pdf';


function BuyersDocuments() {
    

    return ( 
        <section className="buyers-section">
        <Navbar/>
        <div className="buyers-section-div">
            <div className="bsd-left">
                <BuyersSidebar n={5}/>
            </div>
            <div className="bsd-right">
                <div className="buyers-profile-box bd-sec">
                    <div className="edit-circle"><CreateIcon /></div>
                    <Pdf name="Aadhar Card" size="2.3mb"/>
                    <Pdf name="Aadhar Card" size="2.3mb"/>
                    <Pdf name="Aadhar Card" size="2.3mb"/>
                    <Pdf name="Aadhar Card" size="2.3mb"/>
                    <Pdf name="Aadhar Card" size="2.3mb"/>
                </div>
            </div>
        </div>
    </section>
     );
}

export default BuyersDocuments;