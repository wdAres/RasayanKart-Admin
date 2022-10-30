import './buyers.css';
import Navbar from '../Components/Navbar/Navbar';
import BuyersSidebar from '../Components/BuyerSidebar/BuyersSidebar';

function RfqdHeader({ gt, bt }) {
    return (
        <div className="rfqdh-c">
            <div className='gt'>{gt}</div>
            <div className='bt'>{bt}</div>
        </div>
    );
}

function Rti3({ arrhead, arrdata }) {
    return (
        <div className="rit3-table">
            <div className="rit3-header">
                {
                    arrhead.map(arrhead => (
                        <div className="">{arrhead.name}</div>
                    ))
                }
            </div>
            <div className="rit3-body">
                {
                    arrdata.map(arrdata => (
                        <div className="rit3-row">
                            <div className="rit3-info">{arrdata.id}</div>
                            <div className="rit3-info">{arrdata.name}</div>
                            <div className="rit3-info">{arrdata.status}</div>
                            <div className="rit3-info">{arrdata.price}</div>
                            <div className="rit3-info bb-btn">View</div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}


export default function BuyersRfqdetails(params) {

    let heads = [
        { name: 'RFQ Id' },
        { name: 'Customer Name' },
        { name: 'Status' },
        { name: 'Price' },
        { name: 'Milestone' }
    ]

    let content = [
        {
            id: 10034,
            name: 'Adani ltd',
            status: 'Revaluate',
            price: 300
        },
        {
            id: 1,
            name: 'Adani ltd',
            status: 'Revaluate',
            price: 400
        },
        {
            id: 2,
            name: 'Adani ltd',
            status: 'Revaluate',
            price: 500
        }
    ]


    return (
        <section className="buyers-section">
            <Navbar />
            <div className="buyers-section-div">
                <div className="bsd-left">
                    <BuyersSidebar n={3} />
                </div>
                <div className="bsd-right">
                    <div className="buyers-profile-box rfq-container">
                        <h1>Rfq Details</h1>
                        <div className="df jcb rfqh-container">
                            <div className="df rfqh-c-b">
                                <RfqdHeader gt={'SA2502'} bt={'RFQ Name'} />
                                <RfqdHeader gt={'28/10/2022'} bt={'RFQ Till Date'} />
                            </div>
                            <RfqdHeader gt={'Adani Ltd.'} bt={'Buyers Name'} />
                        </div>

                        <div className="line"></div>

                        <strong>Requested Items</strong>
                        <div className="rit-table-container">
                            <div className="rit-left">
                                <div className="rit-header">
                                    <div className="">Product</div>
                                    <div className="">Quality</div>
                                </div>
                                <div className="rit-body">
                                    <div className="rit-left-divs">
                                        <div>Camlin Engineers Blue Pastes 20 ml</div>
                                        <p>Adhesives</p>
                                    </div>
                                    <div className="rit-left-divs">
                                        <p>1500 pcs</p>
                                        <p className="sm-p">27.00 Per Piece</p>
                                    </div>
                                </div>
                            </div>
                            <div className="rit-right">
                                <div className="rit-header">
                                    <div className="">RFQ Product Price Type</div>
                                </div>
                                <div className="rit-body">
                                    <h2>Landing Page</h2>
                                    <span className="link">Edit</span>
                                </div>
                            </div>
                        </div>

                        <div className="rit2-table">
                            <div className="rit2-header">
                                <div>Delivery Address</div>
                                <div>Requested Delivery Pcs</div>
                                <div>Expected Delivery Date</div>
                            </div>
                            <div className="rit2-body">
                                <div className="rit2-block">
                                    Karve Road , kothiyawala , Pune , India 500212
                                </div>
                                <div className="rit2-block">
                                    10
                                </div>
                                <div className="rit2-block">
                                    20/10/2022
                                </div>
                            </div>
                        </div>

                        <strong>Logs</strong>
                        <div className="rti3-parent">
                        <Rti3 arrhead={heads} arrdata={content} />
                        </div>


                        <div className="btn-con">
                            <div className="backbtn-g">Reject</div>
                            <div className="backbtn-g">Response</div>
                            <div className="conbtn-g">Approve</div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};
