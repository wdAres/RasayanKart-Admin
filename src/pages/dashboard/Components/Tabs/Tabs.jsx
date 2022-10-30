import './tabs.css';
import { useState } from 'react';
import Pdf from '../Pdf/Pdf';
import Product from "../Product/Product";
import ProductImg from '../../../../assets/product.png';
import Sellerbanner from '../../../../assets/sellerbanner.png';
import Conbanner from '../../../../assets/contactbanner.png';

function Tabs(props) {

    const [toggleState, setToggleState] = useState(2);
    const toggleTab = (index) => {
        setToggleState(index);
    }


    return (
        <div className="seller-tabs-content-container">
            <div className="seller-tab-btn-container">
                <div className="dp-img-c">
                    <img src={props.img} alt="" />
                </div>
                <div className='df stbc-c'>
                <div onClick={() => { toggleTab(2) }} className={toggleState === 2 ? "seller-tab-btn tab-active" : "seller-tab-btn"}>About us</div>
                <div onClick={() => { toggleTab(1) }} className={toggleState === 1 ? "seller-tab-btn tab-active" : "seller-tab-btn"}>Contact us</div>
                <div onClick={() => { toggleTab(3) }} className={toggleState === 3 ? "seller-tab-btn tab-active" : "seller-tab-btn"}>Products</div>
                <div onClick={() => { toggleTab(4) }} className={toggleState === 4 ? "seller-tab-btn tab-active" : "seller-tab-btn"}>Documents</div>
                </div>
            </div>

            <div className="seller-content-container">
                <div className={toggleState === 1 ? "seller-content content-active" : "seller-content"}>
                        <img src={Conbanner} alt="" className="seller-banner" />
                    <div className="seller-det">
                        <div className="seller-det-left">
                            Address
                        </div>
                        <div className="seller-det-right">
                            304, WESTERN EDGE 1, ABOVE METRO SHOPPING, WESTERN EXPRESS HIGHWAY, BORIVALI (E) MUMBAI-400066
                        </div>
                    </div>
                    <div className="seller-det">
                        <div className="seller-det-left">Mobile No.</div>
                        <div className="seller-det-right">9702946450</div>
                    </div>
                    <div className="seller-det">
                        <div className="seller-det-left">Telephone No.</div>
                        <div className="seller-det-right">9820990618</div>
                    </div>
                    <div className="seller-det">
                        <div className="seller-det-left">Email id</div>
                        <div className="seller-det-right">Info@VOXCO.com</div>
                    </div>

                    <div className="seller-btn-c df aic jcc">
                        <button className='conbtn-g'>Contact Form</button>
                    </div>
                    {/* <form action="" className='seller-form'>
                        <h1>Fill up this form to reach us</h1>
                        <div className="seller-input-c">
                            <input type="text" placeholder="Name" required />
                        </div>
                        <div className="seller-input-c">
                            <input type="number" placeholder="Mobile No." required />
                        </div>
                        <div className="seller-input-c">
                            <input type="email" placeholder="Email" required />
                        </div>
                        <div className="seller-input-c">
                            <input type="text" placeholder="Company" required />
                        </div>
                        <div className="seller-input-c">
                            <input type="text" placeholder="Subject" required />
                        </div>
                        <div className="seller-input-c">
                            <textarea name="" placeholder='Description'></textarea>
                        </div>
                        <button>Send</button>
                    </form> */}
                </div>
                <div className={toggleState === 2 ? "seller-content content-active" : "seller-content"}>
                    
                        <img className="seller-banner" src={Sellerbanner} alt="" />
                        <h1>VOXCO Pigments And Chemicals Pvt Ltd.</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quidem itaque, esse eos dignissimos ducimus voluptatum non quam magni fuga qui rem facilis quos ullam dolores hic tempore ipsam veniam beatae perspiciatis corporis obcaecati ipsum ad minus! Corrupti, quas non temporibus error laboriosam laudantium obcaecati saepe repellat rem expedita quis iure amet labore nam ex!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit delectus porro ex sunt. Numquam soluta nihil inventore? Dolor corporis qui veritatis ut, amet cumque voluptas odio id dolorem molestias ea?
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error ipsa sit dicta accusamus minima ut ullam distinctio facere neque natus nam tempore, reprehenderit laudantium possimus! Quasi ipsa qui doloremque eveniet!
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut corporis cum voluptatum sapiente, laudantium vero dolorum voluptatem itaque delectus, voluptatibus quis deserunt! Magnam cum impedit voluptatem odit, aliquam officiis iusto?
                        </p>
                        <h1>Foundation</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quidem itaque, esse eos dignissimos ducimus voluptatum non quam magni fuga qui rem facilis quos ullam dolores hic tempore ipsam veniam beatae perspiciatis corporis obcaecati ipsum ad minus! Corrupti, quas non temporibus error laboriosam laudantium obcaecati saepe repellat rem expedita quis iure amet labore nam ex!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit delectus porro ex sunt. Numquam soluta nihil inventore? Dolor corporis qui veritatis ut, amet cumque voluptas odio id dolorem molestias ea?
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error ipsa sit dicta accusamus minima ut ullam distinctio facere neque natus nam tempore, reprehenderit laudantium possimus! Quasi ipsa qui doloremque eveniet!
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut corporis cum voluptatum sapiente, laudantium vero dolorum voluptatem itaque delectus, voluptatibus quis deserunt! Magnam cum impedit voluptatem odit, aliquam officiis iusto?
                        </p>
                
                    {/* <button className='seller-about-btn'>Contact us</button> */}
                </div>
                <div className={toggleState === 3 ? "seller-content content-active" : "seller-content"}>
                    <div className="shop-card-container">
                        <Product img={ProductImg} />
                        <Product img={ProductImg} />
                        <Product img={ProductImg} />
                        <Product img={ProductImg} />
                    </div>
                </div>
                <div className={toggleState === 4 ? "seller-content content-active" : "seller-content"}>
                <img src={Sellerbanner} alt="" className="seller-banner" />
                    <div className="pdf-container">
                        <Pdf name="pdf-1" size="2.5mb" />
                        <Pdf name="pdf-2" size="2.5mb" />
                        <Pdf name="pdf-3" size="2.5mb" />
                        <Pdf name="pdf-4" size="2.5mb" />
                        <Pdf name="pdf-5" size="2.5mb" />
                        <Pdf name="pdf-5" size="2.5mb" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Tabs;