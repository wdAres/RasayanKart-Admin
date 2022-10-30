import './rfq.css';
import '../Buyers/buyers.css';
import Navbar from '../Components/Navbar/Navbar';
import RfqSidebar from '../Components/RfqSidebar/RfqSidebar';
import SearchIcon from '@mui/icons-material/Search';
import ProductHistory from '../Components/ProductHistory/ProductHistory';
import ProductImg from '../../../assets/product.png';

function RfqRequest() {
    return (
        <section className="buyers-section rfq-sec">
            <Navbar />
            <div className="buyers-section-div">
                <div className="bsd-left">
                    <RfqSidebar n={2} />
                </div>
                <div className="bsd-right">
                    <div className="buyers-profile-box">
                        <div className="greyblue-box">
                            <div className="greypart">
                                Add Product
                            </div>
                            <div className="bluepart">
                                <div className="rfq-searchbox">
                                    <input type="text" />
                                    <button><SearchIcon /></button>
                                </div>
                                <p>You can add Product by typing in the searchbar mentioned </p>
                                <form className="select-tag-container">
                                    <select name="category" id="category">
                                        <option value="">Category</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                    </select>
                                    <select name="sub-category" id="sub-category">
                                        <option value="">Sub-category</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                    </select>
                                    <select name="products" id="products">
                                        <option value="">Products</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                    </select>
                                </form>
                                <button className='rfqreq-btn'>Add Product</button>
                            </div>
                        </div>
                        <div className="m-20">
                        <ProductHistory img={ProductImg}/>
                        </div>
                        <div className="m-20">
                        <ProductHistory img={ProductImg}/>
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

export default RfqRequest;