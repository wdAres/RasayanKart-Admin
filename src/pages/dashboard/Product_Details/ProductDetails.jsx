import './productdetails.css';
import Navbar from '../Components/Navbar/Navbar';
import SearchIcon from '@mui/icons-material/Search';
import StarIcon from '@mui/icons-material/Star';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
// 
import * as React from 'react';
// import Box from '@mui/material/Box';
// // import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';
import Pd from '../Components/Pd/Pd';
import Slider from "../Components/Slider/Slider";

import Img from '../../../assets/product.png';
import Img2 from '../../../assets/product2.png';

function Product_Details() {
    const [size, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const [value, setValue] = React.useState(0);
    function Add() {
        setValue(value + 1);
    }
    function Sub() {
        setValue(value - 1);
    }

    return (
        <>
            <section className="product-details-container">
                <Navbar />
                <div className="pd-divider">
                    <div className="pd-left">
                        <div><Pd img={Img} img2={Img2} /></div>
                    </div>
                    <div className="pd-right">
                        <div className='pd-right-details'>
                            <div className="product-name">ICFS CM 350VESF Mortar Bonding Chemical</div>
                            <div className="product-rate-avail">
                                <div className='product-availibility'>In Stock</div>
                                <div className="product-rating">
                                    <div className='rating-heading'>Ratings</div>
                                    <div className='stars-div'>
                                        <div className="ratings-stars">
                                            <StarIcon className="start-b" />
                                            <StarIcon className="start-b" />
                                            <StarIcon className="start-b" />
                                            <StarIcon className="start-b" />
                                            <StarIcon className="start-g" />
                                        </div>
                                        <div className="ratings-numbers">140,52</div>
                                    </div>
                                </div>
                            </div>
                            <div className="product-des">
                                <div className="uni-heading">Description</div>
                                <p className="">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, velit nihil? Laudantium architecto ut in facere corporis. Commodi dolorem accusamus dolore laborum explicabo expedita porro qui consequatur dicta quidem, ab nobis, exercitationem unde aliquid! Corrupti?
                                </p>
                            </div>
                            <div className="product-size">
                                <div className="uni-heading">
                                    Packed Size
                                </div>
                                {/* <div className="size-dropdown">320ml</div> */}
                                <select className='size-dropdown' name="" id="">
                                    <option value="320ml">320ml</option>
                                    <option value="500ml">500ml</option>
                                    <option value="750ml">750ml</option>
                                    <option value="1000ml">1000ml</option>
                                </select>
                                {/* <Box className='dd-box'>
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label" className='product-size-label'>Size</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={size}
                                            // label="Size",
                                            onChange={handleChange}
                                            className='select-size'
                                        >
                                            <MenuItem value={350}>350ml</MenuItem>
                                            <MenuItem value={500}>500ml</MenuItem>
                                            <MenuItem value={1000}>1000ml</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Box> */}
                            </div>
                            <div className="product-qty-pincode">
                                <div className="product-qty">
                                    <div className="uni-heading">Quantity</div>
                                    <div className="product-qty-input">
                                        <button onClick={Sub}><RemoveIcon /></button>
                                        <div className="show-qty">{value < 0 ? 0 : value}</div>
                                        <button onClick={Add}><AddIcon /></button>
                                    </div>
                                </div>
                                <div className="product-pincode">
                                    <div className="uni-heading">Pincode Check</div>
                                    <form className="product-pincode-input">
                                        <input type="text" placeholder='110064' />
                                        <button><SearchIcon /></button>
                                    </form>
                                </div>
                            </div>
                            <table className="seller-price-table">
                                <tr className='tablerow-head'>
                                    <th className='table-head'></th>
                                    <th className='table-head'>Seller</th>
                                    <th className='table-head'>Price</th>
                                </tr>
                                <tr className='tablerow-data'>
                                    <td className='table-data inp-td'><input type="checkbox" /></td>
                                    <td className='table-data'>Burhani Trader</td>
                                    <td className='table-data'>₹50</td>
                                </tr>
                                <tr className='tablerow-data'>
                                    <td className='table-data inp-td'><input type="checkbox" /></td>
                                    <td className='table-data'>Shakti Trader</td>
                                    <td className='table-data'>₹50</td>
                                </tr>
                            </table>
                            <div className="price-desc">
                                <div className="price-heading">Price</div>
                                <div className="ite-price-container">
                                    <span className="price old-price">₹60</span>
                                    <span className="price new-price">₹60</span>
                                    <span className="price-span">Per Piece</span>
                                </div>
                                <div className="discount-percentage">(10% Off)</div>
                                <div className="price-btn-container">
                                    <button className="price-btn">Buy Now</button>
                                    <button className="price-btn">RFQ</button>
                                </div>
                            </div>
                            <div className="logistics-table-container">
                                <table className='logistics-table'>
                                    <thead>
                                        <tr className='logistics-headrow'>
                                            <th className='logistics-head'></th>
                                            <th className='logistics-head'>Logistics Provider</th>
                                            <th className='logistics-head'>Logistics Price(INR)</th>
                                            <th className='logistics-head'>Landing Price(INR)</th>
                                            <th className='logistics-head'>Delivery TAT(Day)</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className='logistics-datarow'>
                                            <td className='logistics-data log-inpu'><input type="checkbox" /></td>
                                            <td className='logistics-data '>Logistics Partner</td>
                                            <td className='logistics-data '>12000</td>
                                            <td className='logistics-data '>10000</td>
                                            <td className='logistics-data '>2-4</td>
                                        </tr>
                                        <tr className='logistics-datarow'>
                                            <td className='logistics-data log-inpu'><input type="checkbox" /></td>
                                            <td className='logistics-data '>Logistics Partner</td>
                                            <td className='logistics-data '>12000</td>
                                            <td className='logistics-data '>10000</td>
                                            <td className='logistics-data '>2-4</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <h2 className='h2-heading'>Related Products</h2>
                <Slider />
            </section>
        </>
    );
}

export default Product_Details;