import './rfq.css';
import '../Buyers/buyers.css';
import Navbar from '../Components/Navbar/Navbar';
import RfqSidebar from '../Components/RfqSidebar/RfqSidebar';
import Input from '../Components/Input/Input';
import Radio from '../Components/Radio/Radio';


function Rfqbasic() {


    return (
        <section className="buyers-section rfq-sec">
            <Navbar />
            <div className="buyers-section-div">
                <div className="bsd-left">
                    <RfqSidebar n={1} />
                </div>
                <div className="bsd-right">
                    <div className="buyers-profile-box">
                        <div className="rfq-box">
                            <div className="df jcb min-input-c">
                                <Input label="RFQ Name" name="rfq-name" />
                                <Input label="Response Open Till" name="response-till" />
                            </div>
                            <Radio
                                heading="Order Type"
                                label1="One-Time Order"
                                label2="Rate-Master"
                                name="order-type"
                            />
                            <Radio
                                heading="Product Price Type"
                                label1="Landing Price"
                                label2="Ex Work Price"
                                name="order-type2"
                            />
                            <Radio
                                heading="Payment Type"
                                label1="Immediate Payment"
                                label2="Credit Card"
                                name="order-type3"
                            />
                            <Radio
                                heading="Payment Details"
                                label1="Milestone"
                                func1={true}
                                func2={true}
                                isc='true'
                                label2="Data based"
                                name="order-type4"
                            />

                            <div className="btn-con">
                                <div className="backbtn-g">Back</div>
                                <div className="conbtn-g">Continue</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}



export default Rfqbasic;