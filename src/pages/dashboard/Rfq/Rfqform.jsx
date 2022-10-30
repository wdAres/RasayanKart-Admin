import './rfq.css';
import '../Buyers/buyers.css';
import Navbar from '../Components/Navbar/Navbar';
import RfqSidebar from '../Components/RfqSidebar/RfqSidebar';
import CloseIcon from '@mui/icons-material/Close';



function Rfqform() {


    return (

        <section className="buyers-section rfq-sec">
            <Navbar />
            <div className="buyers-section-div">
                <div className="bsd-left">
                    <RfqSidebar n={4} />
                </div>
                <div className="bsd-right">
                    <div className="buyers-profile-box">
                        <div className="rfq-form-head">
                            <strong>RFQ :</strong>
                            ISHAN 01
                        </div>
                        <div className="rfq-form-date">RFQ Till date : 20/9/2022</div>


                        <div className="up-heading">Order Type</div>
                        <div className="sub-up-heading">Rate Master</div>

                        <div className="rfq-tc">
                            <div className="logistics-table-container rfq-table">
                                <table className='logistics-table rfq-tab'>
                                    <thead>
                                        <tr className='logistics-headrow rfq-hr'>
                                            <th className='logistics-head'>Quantity</th>
                                            <th className='logistics-head'>Delivery Date</th>
                                            <th className='logistics-head'>Payment</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className='logistics-datarow'>
                                            <td className='logistics-data '>50 Pieces</td>
                                            <td className='logistics-data '>20/01/2023</td>
                                            <td className='logistics-data '>Full</td>
                                        </tr>
                                        <tr className='logistics-datarow'>
                                            <td className='logistics-data '>50 Pieces</td>
                                            <td className='logistics-data '>23/12/2022</td>
                                            <td className='logistics-data '>Full</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="up-heading">Product Price Type</div>
                        <div className="sub-up-heading">Landing Page</div>


                        <div className="up-heading">Payment Type</div>
                        <div className="sub-up-heading">On Credit Card</div>


                        <div className="up-heading">Payment Details</div>
                        <div className="sub-up-heading">Data Base</div>

                        <div className="rfq-tc">
                            <div className="logistics-table-container rfq-table">
                                <table className='logistics-table rfq-tab'>
                                    <thead>
                                        <tr className='logistics-headrow rfq-hr'>
                                            <th className='logistics-head'>Delivery Date</th>
                                            <th className='logistics-head'>Percentage</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className='logistics-datarow'>
                                            <td className='logistics-data '>20/01/2023</td>
                                            <td className='logistics-data '>70&</td>
                                        </tr>
                                        <tr className='logistics-datarow'>
                                            <td className='logistics-data '>23/12/2022</td>
                                            <td className='logistics-data '>45%</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="up-heading">Products</div>
                        <div className="rfq-product-container">
                            <div className="rfq-product-card">
                                <div className="">
                                    <h1>Camlin Engineers Blue Pastes 20 ml</h1>
                                    <p>Adhesives</p>
                                </div>
                                <CloseIcon />
                            </div>
                            <div className="rfq-product-card">
                                <div className="">
                                    <h1>Camlin Engineers Blue Pastes 20 ml</h1>
                                    <p>Adhesives</p>
                                </div>
                                <CloseIcon />
                            </div>
                        </div>

                        <div className="up-heading">Seller</div>
                        <div className="rfq-tc">
                            <div className="logistics-table-container rfq-table">
                                <table className='logistics-table rfq-tab'>
                                    <thead>
                                        <tr className='logistics-headrow rfq-hr'>
                                            <th className='logistics-head'>Seller Name</th>
                                            <th className='logistics-head'>City,State</th>
                                            <th className='logistics-head'>Products</th>
                                            <th className='logistics-head'>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className='logistics-datarow'>
                                            <td className='logistics-data '>New Trader</td>
                                            <td className='logistics-data '>Pune,MH</td>
                                            <td className='logistics-data '>1/2</td>
                                            <td className='logistics-data '>View Product</td>
                                        </tr>
                                        <tr className='logistics-datarow'>
                                            <td className='logistics-data '>Sushil Buyer</td>
                                            <td className='logistics-data '>Mumbai, MH</td>
                                            <td className='logistics-data '>1/2</td>
                                            <td className='logistics-data '>View Product</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>


                        <div className="up-heading">Additional Detail</div>
                        <div className="rfq-ta">
                            <textarea placeholder='Type Message'>

                            </textarea>
                        </div>

                        <div className="up-heading">Attach File</div>
                        <form className="up-heading checkout-form">
                            <input type="file" id='reference' placeholder='Attach File' />
                            <button >Upload</button>
                        </form>

                        <div className="btn-con">
                            <div className="backbtn-g">Back</div>
                            <div className="conbtn-g">Send</div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}

export default Rfqform;