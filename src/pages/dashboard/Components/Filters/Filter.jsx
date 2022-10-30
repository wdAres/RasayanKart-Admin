import './filter.css';
// Icons
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CategoryIcon from '@mui/icons-material/Category';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import StoreIcon from '@mui/icons-material/Store';
import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import { useState } from 'react';

export default function Filter() {

    const [activeMenu, setActiveMenu] = useState('');

    // Using this one for dropdown 
    // const [dd, setDropdown] = useState(true);

    // Its for input .. Ignore this one 
    const [checked, setChecked] = React.useState(true);

    const handleChange = (index) => {
        setChecked(index.target.checked[index]);
    };

    return (
        <>
            <h1 className='filter-heading'>Filters</h1>

            {/* #1 Dropdown */}
            <div className="accordian">
                {/* Here is button */}
                <button onClick={() => setActiveMenu('')} className="accordian-btn"><div><LocationOnIcon className='btn-icons' fontSize="small" />City </div> <ExpandLessIcon className={activeMenu === '' ? '' : 'rotated'} /></button>

                {/* content of DropDown */}
                <div className={activeMenu === '' ? "accordian-data " : "accordian-data fold"}>
                    <div className='ad-con'>
                        <div className="accordian-form">
                        <Checkbox
                                checked={checked[1]}
                                onChange={()=>{handleChange(1)}}
                                inputProps={{ 'aria-label': 'controlled' }}
                            />
                            <label htmlFor="">All India</label>
                        </div>
                        <div className="accordian-form">
                            <Checkbox
                                checked={checked[2]}
                                onChange={()=>{handleChange(2)}}
                                inputProps={{ 'aria-label': 'controlled' }}
                            />
                            <label htmlFor="">Mumbai</label>
                        </div>
                    </div>
                </div>
            </div>

            {/* #2 Dropdown */}
            <div className="accordian">
                {/* Here is button */}
                <button onClick={() => setActiveMenu('category')} className="accordian-btn"><div><CategoryIcon className='btn-icons' fontSize="small" />Category </div> <ExpandLessIcon className={activeMenu === 'category' ? '' : 'rotated'} /> </button>

                {/* content of DropDown */}
                <div className={activeMenu === 'category' ? "accordian-data " : "accordian-data fold"}>
                    <div className='ad-con'>
                        <div className="accordian-form">
                            <Checkbox
                                checked={checked[3]}
                                onChange={()=>{handleChange(3)}}
                                inputProps={{ 'aria-label': 'controlled' }}
                            />
                            <label htmlFor="">All India</label>
                        </div>
                        <div className="accordian-form">
                            <Checkbox
                                checked={checked[4]}
                                onChange={()=>{handleChange(4)}}
                                inputProps={{ 'aria-label': 'controlled' }}
                            />
                            <label htmlFor="">Mumbai</label>
                        </div>
                    </div>
                </div>
            </div>

            {/* #3 Dropdown */}
            <div className="accordian">
                {/* Here is button */}
                <button onClick={() => setActiveMenu('seller')} className="accordian-btn"><div><StoreIcon className='btn-icons' fontSize="small" />Seller </div> <ExpandLessIcon className={activeMenu === 'seller' ? '' : 'rotated'} /> </button>

                {/* content of DropDown */}
                <div className={activeMenu === 'seller' ? "accordian-data " : "accordian-data fold"}>
                    <div className='ad-con'>
                        <div className="accordian-form">
                            <Checkbox
                                checked={checked[5]}
                                onChange={()=>{handleChange(5)}}
                                inputProps={{ 'aria-label': 'controlled' }}
                            />
                            <label htmlFor="">All India</label>
                        </div>
                        <div className="accordian-form">
                            <Checkbox
                                checked={checked[6]}
                                onChange={()=>{handleChange(6)}}
                                inputProps={{ 'aria-label': 'controlled' }}
                            />
                            <label htmlFor="">Mumbai</label>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}
