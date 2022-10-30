import "./shop.css";
import Navbar from '../Components/Navbar/Navbar';
import Filter from '../Components/Filters/Filter';
import Navfilters from "../Components/Navfilters/Navfilters";
import Product from "../Components/Product/Product";
import ProductImg from '../../../assets/product.png';
import AddIcon from '@mui/icons-material/Add';
import { useState } from "react";

function Shop() {
    const [Sidebar, setSidebarActive] = useState(false)

    const SidebarFunc = ()=>{
        Sidebar ? setSidebarActive(false) : setSidebarActive(true);
    }

    return (
       
        <section className="main-section">
            <Navbar />
            <div className="divider">
                <div className={Sidebar === true ?  "left-part active-sidebar" : "left-part"}>
                    <Filter />
                    <button onClick={SidebarFunc} className="callbtn2"><AddIcon className="callbtn2-i" /></button>
                </div>
                <div className="right-part">
                    <Navfilters />
                    <div className="shop-card-container">
                        <Product img={ProductImg} />
                        <Product img={ProductImg} />
                        <Product img={ProductImg} />
                        <Product img={ProductImg} />
                    </div>
                </div>

            </div>
        </section>
       
    );
}

export default Shop;