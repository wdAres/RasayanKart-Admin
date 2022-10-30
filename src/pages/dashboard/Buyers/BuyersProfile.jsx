import './buyers.css';
import Navbar from '../Components/Navbar/Navbar';
import Banner from '../../../assets/bban.png'
import CreateIcon from '@mui/icons-material/Create';
import ApartmentIcon from '@mui/icons-material/Apartment';
import BuyersSidebar from '../Components/BuyerSidebar/BuyersSidebar';

function DetailsList({ array }) {
    return (
        array.map((array, index) => (
            <div key={index} className="greybox df aic">{array}</div>
        ))
    );
}


export default function BuyersProfile() {

    let arr = [
        'Name',
        'Secondary Name (Optional)',
        'Email Id',
        'Gst No.',
        'Udhayam Adhaar',
        'Explosive Liscence No.',
        'Address',
        'Contact',
        'Secondary Contact (Optional)',
        'PAN No.',
        'TAN No.',
        'Drung Liscence No.',
        'Prohibition Excise'
    ]

    return (
        <section className="buyers-section">
            <Navbar />
            <div className="buyers-section-div">
                <div className="bsd-left">
                    <BuyersSidebar n={1} />
                </div>
                <div className="bsd-right">
                    <div className="buyers-profile-box">
                        <div className="buyers-profile-banner">
                            <img src={Banner} alt="" />
                            <div className="edit-circle"><CreateIcon /></div>
                        </div>
                        <div className="buyers-dp"></div>
                        <div className="buyers-name">Puneet Shrivastav</div>
                        {/* <div className="greybox df aic"><ApartmentIcon className="greybox-i" /> Umiya Agro Industries</div> */}
                        <DetailsList array={arr} />
                        <div className="btn-con">
                            <div className="conbtn-g">Add Sub Account</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
