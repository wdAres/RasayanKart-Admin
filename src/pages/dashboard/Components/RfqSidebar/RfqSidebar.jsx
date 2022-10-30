import '../BuyerSidebar/buyerssidebar.css';
import './rfqsidebar.css'
import React, { useState } from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";

import AddIcon from '@mui/icons-material/Add';


function RfqSidebar(props) {

    const [Sidebar, setSidebarActive] = useState(false)

    const SidebarFunc = () => {
        Sidebar ? setSidebarActive(false) : setSidebarActive(true);
    }


    return (

        <div className={Sidebar === true ?  "buyers-sidebar active-sidebar rfqsidebar" : "buyers-sidebar rfqsidebar"}>


            <div className="buyers-sidebar-heading">RFQ Form</div>
            <Link to="/rfqbasic" className={props.n === 1 ? "buyers-options active-opn" : "buyers-options"}>Basic Information</Link>
            <Link to="/rfqreq" className={props.n === 2 ? "buyers-options active-opn" : "buyers-options"}>Product Requested</Link>
            <Link to="/rfqselc" className={props.n === 3 ? "buyers-options active-opn" : "buyers-options"}>Seller Selection</Link>
            <Link to='/rfqform'  className={props.n === 4 ? "buyers-options active-opn" : "buyers-options"}>Review Form</Link>

            <button onClick={SidebarFunc} className={Sidebar === true ? 'callbtn active-callbtn' : 'callbtn'}>
                <AddIcon className='callbtn-i' />
            </button>

        </div>

    );
}

export default RfqSidebar;