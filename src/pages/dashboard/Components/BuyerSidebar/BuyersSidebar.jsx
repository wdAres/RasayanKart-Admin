import './buyerssidebar.css';
import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from "react-router-dom";
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';

// import * as React from 'react';
import { styled } from '@mui/material/styles';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
// import Stack from '@mui/material/Stack';
// import Typography from '@mui/material/Typography';

const IOSSwitch = styled((props) => (
    <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
    width: 42,
    height: 26,
    padding: 0,
    '& .MuiSwitch-switchBase': {
        padding: 0,
        margin: 2,
        transitionDuration: '300ms',
        '&.Mui-checked': {
            transform: 'translateX(16px)',
            color: '#fff',
            '& + .MuiSwitch-track': {
                backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#65C466',
                opacity: 1,
                border: 0,
            },
            '&.Mui-disabled + .MuiSwitch-track': {
                opacity: 0.5,
            },
        },
        '&.Mui-focusVisible .MuiSwitch-thumb': {
            color: '#33cf4d',
            border: '6px solid #fff',
        },
        '&.Mui-disabled .MuiSwitch-thumb': {
            color:
                theme.palette.mode === 'light'
                    ? theme.palette.grey[100]
                    : theme.palette.grey[600],
        },
        '&.Mui-disabled + .MuiSwitch-track': {
            opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
        },
    },
    '& .MuiSwitch-thumb': {
        boxSizing: 'border-box',
        width: 22,
        height: 22,
    },
    '& .MuiSwitch-track': {
        borderRadius: 26 / 2,
        backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
        opacity: 1,
        transition: theme.transitions.create(['background-color'], {
            duration: 500,
        }),
    },
}));


function BuyersSidebar(props) {

    const [Sidebar, setSidebarActive] = useState(false)

    const SidebarFunc = () => {
        Sidebar ? setSidebarActive(false) : setSidebarActive(true);
    }


    return (

        <div className={Sidebar === true ? "buyers-sidebar active-sidebar" : "buyers-sidebar"}>


            <div className="buyers-sidebar-heading">Buyer's Profile</div>
            <Link to="/busers" className={props.n === 1 ? "buyers-options active-opn" : "buyers-options"}>Edit Profile</Link>
            <Link to="/bh" className={props.n === 2 ? "buyers-options active-opn" : "buyers-options"}>Buyer's History</Link>
            <Link to="/br" className={props.n === 3 ? "buyers-options active-opn" : "buyers-options"}>Request for Quote</Link>
            <Link to="/bw" className={props.n === 4 ? "buyers-options active-opn" : "buyers-options"}>Wallet</Link>
            <Link to="/bd" className={props.n === 5 ? "buyers-options active-opn" : "buyers-options"}>Documents</Link>

            <FormGroup className='df'>
                
                <FormControlLabel
                className='hehe-form'
                    control={<IOSSwitch sx={{ m: 1 }}  />}
                    label="Switch to Seller"
                    // defaultChecked
                /> 
            </FormGroup>


            <button onClick={SidebarFunc} className={Sidebar === true ? 'callbtn active-callbtn' : 'callbtn'}>
                <AddIcon className='callbtn-i' />
            </button>

        </div>

    );
}

export default BuyersSidebar;