import './buyers.css';
import Navbar from '../Components/Navbar/Navbar';
import BuyersSidebar from '../Components/BuyerSidebar/BuyersSidebar';
import UserPic from '../../../assets/users.png' ;
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";

function Users({ name, date }) {
    return (
        <div className="usercard">
            <div className="usercard-img">
                <img src={UserPic} alt="" />
            </div>
            <div className="usercard-name">{name}</div>
            <div className="usercard-date">Created on : <span>{date}</span></div>
            <Link to='/bp'>View Profile</Link>
        </div>
    );
}

export default function Buyersusers(params) {
    return (
        <section className="buyers-section">
            <Navbar />
            <div className="buyers-section-div">
                <div className="bsd-left">
                    <BuyersSidebar n={1} />
                </div>
                <div className="bsd-right">
                    <strong>Users</strong>

                    <div className="usercard-container">
                        <Users name={'Rasayan Kart Profile'} date={'28/10/2022'} />
                    </div>
                </div>
            </div>
        </section>
    );
};
