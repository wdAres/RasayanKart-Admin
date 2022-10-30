import './navbar.css'
import Vs from '../../../../assets/vs.png';
import Rklogo from '../../../../assets/rklogo.png';

import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// import AddIcon from '@mui/icons-material/Add';
import MoreVertIcon from '@mui/icons-material/MoreVert';

// 
import * as React from 'react';
// import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
// bACKDROP 
import Backdrop from '@mui/material/Backdrop';

// import React from 'react';
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";
import { useState } from 'react';

function Navbar() {

    const [Sidebar, setSidebarActive] = useState(false)

    const SidebarFunc = () => {
        Sidebar ? setSidebarActive(false) : setSidebarActive(true);
    }

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [open1, setOpen] = React.useState(false);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        setOpen(!open1);
    };
    const handleClose = () => {
        setAnchorEl(null);
        setOpen(false);
    };

    return (
        <nav className='dashboard-nav'>
            <Link to='/' className="nav-brand">
                <img src={Rklogo} className='rklogo' alt="" />
                <span>Rasayan</span>Kart
            </Link>

            <div className="nav-searchbox">
                <input placeholder='Search Product By name & CAS number' type="text" />
                <button><SearchIcon /></button>
            </div>
            <div className="nav-spans">
                <Link to='/busers'>Buy</Link>
                <Link to='/seller'>Sell</Link>
                {/* <span>Fourms</span> */}
            </div>
            <div className="nav-corner">
                <div className="nav-dropdown">
                    <button className="" id="basic-button"

                    >
                        <PersonIcon
                            aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                        />
                        <img className='vs-img' src={Vs} alt="" />
                        <Backdrop
                            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                            open={open1}
                            onClick={handleClose}
                        >
                            <Menu
                                id="basic-menu"
                                className="basic-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                MenuListProps={{
                                    'aria-labelledby': 'basic-button',
                                }}
                            >
                                <Link to='/rfqbasic' className='nav-list' onClick={handleClose}>Rfq Pages</Link>
                                <Link to="/cart" className='nav-list' onClick={handleClose}>Cart</Link>
                                <Link to='/shop' className='nav-list' onClick={handleClose}>Shop</Link>
                                <Link to='/login' className='nav-list' onClick={handleClose}>Logout</Link>
                            </Menu>
                        </Backdrop>
                        <KeyboardArrowDownIcon
                            aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                        />
                    </button>
                </div>
                <div onClick={SidebarFunc} className="nav-slider-btn"><MoreVertIcon className="slider-btn" /></div>
            </div>

            {/* SIDEBAR */}

            <div className={Sidebar === true ? "nav-sidebar df fdc nav-sidebar-active" : "nav-sidebar df fdc "}>
                <Link to='/shop' className="nav-brand">
                    <span>Rasayan</span>Kart
                </Link>
                <div className="nav-searchbox">
                    <input type="text" />
                    <button><SearchIcon /></button>
                </div>
                <div className="nav-spans df fdc">
                    <Link to='/bp' className="nav-sidebar-spans">Buy</Link>
                    <Link to='/seller' className="nav-sidebar-spans">Sell</Link>
                    {/* <span className="nav-sidebar-spans">Fourms</span> */}
                </div>
            </div>


        </nav>
    );
}


export default Navbar;
