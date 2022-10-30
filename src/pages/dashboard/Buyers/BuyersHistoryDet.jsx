import './buyers.css';
import './bhd.css';
import Navbar from '../Components/Navbar/Navbar';
import BuyersSidebar from '../Components/BuyerSidebar/BuyersSidebar';
import Vec1 from '../../../assets/Vector.png'
import Vec2 from '../../../assets/Vector1.png'
import Vec3 from '../../../assets/Vector2.png'
import Vec4 from '../../../assets/Vector3.png'
import Doc from '../../../assets/doc.png';

function Info({ title, array, istrue }) {
    return (
        <div className='spl-list-c'>
            <div className="spl-list-t">{title}</div>
            <ul className='spl-list-ul'>
                {array.map((array) => (
                    <li className="spl-list-li"><div>{array.bluetxt}</div> {istrue === true ? `: ${array.value}` : ' '}</li>
                ))}
            </ul>
        </div>
    );
}

function BhdCard({ name, size }) {
    return (
        <div className="bhd-doc">
            <img src={Doc} alt="" />
            <div className="doc-name">{name}</div>
            <div className="doc-size">{size}</div>
            <button className='doc-btn'>Download</button>
        </div>
    );
}


function Total({left,right}) {
    return (
        <div className="total-div">
            <div className="total-div-left">{left}</div>
            <div className="total-div-right">{right}.00</div>
        </div>
    );
}




export default function BuyersHistoryDet() {
    let arr1 = [

        {
            bluetxt: "Order Date",
            value: "Aug 30, 2022"
        },
        {
            bluetxt: "Order Status",
            value: "Pending"
        },
        {
            bluetxt: "Shipping Method",
            value: "Free Shipping"
        },
        {
            bluetxt: "Payment Method",
            value: "Check / Money Order"
        },
        {
            bluetxt: "Currency",
            value: "USD"
        },
        {
            bluetxt: "Currency Rate",
            value: "1.0000"
        }
    ]

    let arr2 = [
        {
            bluetxt: "Customer Name ",
            value: "Adani"
        },
        {
            bluetxt: "Customer Email",
            value: "admin@email.com"
        },
        {
            bluetxt: "Customer Phone",
            value: "12345678"
        },
        {
            bluetxt: "Customer Group",
            value: "Registered"
        }
    ]

    let arr3 = [
        { bluetxt: "among us" },
        { bluetxt: "kumanska" },
        { bluetxt: "ksisisi" },
        { bluetxt: "opa., Delaware 283293" },
        { bluetxt: "United States" }
    ]

    // let arrdata1 = [
    // {
    //     name: 'Camlin Engineers Blue Pastes 20 ml',
    //     price: 399.0,
    //     quantity: 1
    // }
    // ]

    // let arrhead1 = [{ name: 'Product' }, { name: 'Price' }, { name: 'Quantity' }, { name: 'Total' }];
    // let arrhead1 = ['Product', 'Price', 'Quantity', 'Total']

    return (
        <section className="buyers-section">
            <Navbar />
            <div className="buyers-section-div">
                <div className="bsd-left">
                    <BuyersSidebar n={2} />
                </div>
                <div className="bsd-right">
                    <div className="buyers-profile-box">
                        <div className="bhd-container">
                            <div className="bhd-header df jcb aic">
                                <div className="bhd-heading">Order Details</div>
                                <button className='bhd-header-btn'>Chat with Seller</button>
                            </div>
                            <strong className='bhd-sub-heading'>Delivery Status</strong>
                            <div className="delivery-status-box">
                                <div className="delivery-status">
                                    <div className="ds-box">
                                        <div className="ds-box-img"><img src={Vec1} alt="" /></div>
                                        <div>
                                            <div className="ds-heading">Packaging</div>
                                            <div className="ds-date">28/10/2022</div>
                                        </div>
                                    </div>
                                    <div className="connector acive-connector"></div>
                                    <div className="ds-box">
                                        <div className="ds-box-img"><img src={Vec2} alt="" /></div>
                                        <div>
                                            <div className="ds-heading">Shipped</div>
                                            <div className="ds-date">28/10/2022</div>
                                        </div>
                                    </div>
                                    <div className="connector"></div>
                                    <div className="ds-box">
                                        <div className="ds-box-img"><img src={Vec3} alt="" /></div>
                                        <div>
                                            <div className="ds-heading">In-transit</div>
                                            <div className="ds-date">-</div>
                                        </div>
                                    </div>
                                    <div className="connector"></div>
                                    <div className="ds-box">
                                        <div className="ds-box-img"><img src={Vec4} alt="" /></div>
                                        <div>
                                            <div className="ds-heading">Deliverd</div>
                                            <div className="ds-date">-</div>
                                        </div>
                                    </div>

                                </div>

                                <div className="log-box">
                                    <strong>Logs</strong>
                                    <div className="log-line">Odered was shipped on 3:32pm <span>20/08/202</span></div>
                                    <div className="log-line">Odered was shipped on 3:32pm <span>20/08/202</span></div>
                                </div>
                            </div>

                            <strong className="bhd-sub-heading">Documents</strong>
                            <div className="bhd-doc-box">
                                <BhdCard name={"Invoice"} size={"1.2mb"} />
                                <BhdCard name={"Invoice 2"} size={"5.2mb"} />
                                <BhdCard name={"Invoice 3"} size={"4.2mb"} />
                            </div>

                            <strong className="bhd-sub-heading">Order & Account Information</strong>
                            <div className="spl-list-box">
                                <Info array={arr1} title={"Order Information"} istrue={true} />
                                <Info array={arr2} title={"Account Information"} istrue={true} />
                            </div>

                            <strong className="bhd-sub-heading">Address Information</strong>
                            <div className="spl-list-box">
                                <Info array={arr3} title={"Billing Address"} istrue={false} />
                                <Info array={arr3} title={"Shipping Address"} istrue={false} />
                            </div>

                            <strong className="bhd-sub-heading">Items Ordered</strong>
                            <div className="bhd-orders">
                                <table className="seller-price-table bhd-table">
                                    <tr className='tablerow-head'>
                                        <th className='table-head'>Product</th>
                                        <th className='table-head'>Unit Price</th>
                                        <th className='table-head'>Quantity</th>
                                        <th className='table-head'>Total</th>
                                    </tr>
                                    <tr className='tablerow-data'>
                                        <td className='table-data'>1.Camlin Engineers Blue Pastes 20 ml</td>
                                        <td className='table-data'>399.0</td>
                                        <td className='table-data'>1</td>
                                        <td className='table-data'>399.0</td>
                                    </tr>
                                </table>
                            </div>

                            <div className="bhd-total">
                                <Total left={'Sub Total'} right={399.0} />
                                <Total left={'Logistics Charge'} right={300.0} />
                                <Total left={'Total'} right={699.0} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );

}




