import * as React from 'react';

import './navfilters.css'
import ClearIcon from '@mui/icons-material/Clear';
import SortIcon from '@mui/icons-material/Sort';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


function Navfilters() {




    return (
        <div className="navfilters">
            <div className="navfilters-top">
                <div className="navfilters-left">
                    <div className="navfilters-heading">Applied Filters</div>
                    <div className="navfilters-tags">
                        <div className="tag">
                            All India <ClearIcon className='tag-icon' />
                        </div>
                        <div className="tag">
                            Adhesive <ClearIcon className='tag-icon' />
                        </div>
                        <div className="tag">
                            Burhani Suppliers <ClearIcon className='tag-icon' />
                        </div>
                    </div>
                </div>
                <div className="navfilters-right">
                    <div className="navfilters-heading">Sort by <SortIcon /></div>
                    <div className="navfilters-dropdown-btn">

                        {/* <button>Relevence <ExpandMoreIcon/></button> */}
                        <select name="" id="">
                            <option value="">Revelence</option>
                            <option value="A">A</option>
                            <option value="B">B</option>
                            <option value="C">C</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="navfilters-down">
                <div className="navfilters-heading">Results</div>
                <div className="navfilters-down-result">1-20 OF 120</div>
            </div>
        </div>
    );
}

export default Navfilters;