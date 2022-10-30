import './rfq.css';
import '../Buyers/buyers.css';
import Navbar from '../Components/Navbar/Navbar';
import RfqSidebar from '../Components/RfqSidebar/RfqSidebar';
import Radio from '../Components/Radio/Radio';

function RfqSelection() {
    return (
        <section className="buyers-section rfq-sec">
            <Navbar />
            <div className="buyers-section-div">
                <div className="bsd-left">
                    <RfqSidebar n={3} />
                </div>
                <div className="bsd-right">
                    <div className="buyers-profile-box">
                        <Radio
                            mt={0}
                            heading="select Seller"
                            label1="Automatic"
                            label2="Custom"
                            name="select-seller"
                        />

                        <div className="logistics-table-container ">
                            <table className='logistics-table rfq-tab'>
                                <thead>
                                    <tr className='logistics-headrow rfq-hr'>
                                        <th className='logistics-head'></th>
                                        <th className='logistics-head'>Seller Name</th>
                                        <th className='logistics-head'>City,State</th>
                                        <th className='logistics-head'>Products</th>
                                        <th className='logistics-head'>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className='logistics-datarow'>
                                        <td className='logistics-data log-inpu'><input type="checkbox" /></td>
                                        <td className='logistics-data '>New Trader</td>
                                        <td className='logistics-data '>Pune,MH</td>
                                        <td className='logistics-data '>1/2</td>
                                        <td className='logistics-data '>View Product</td>
                                    </tr>
                                    <tr className='logistics-datarow'>
                                        <td className='logistics-data log-inpu'><input type="checkbox" /></td>
                                        <td className='logistics-data '>Sushil Buyer</td>
                                        <td className='logistics-data '>Mumbai, MH</td>
                                        <td className='logistics-data '>1/2</td>
                                        <td className='logistics-data '>View Product</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="btn-con">
                            <div className="backbtn-g">Back</div>
                            <div className="conbtn-g">Continue</div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}

export default RfqSelection;