import './radio.css'

import AddIcon from '@mui/icons-material/Add';

import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';

function Pop({ fun, name, val }) {
    return (
        <div className={val ? "popupbox active-popup" : "popupbox"}>
            <div className="popup-overlay"></div>
            <div className="popup-content">
                <div className='df fdc'>
                    <CloseIcon className='popup-i' onClick={fun} />
                    <h1>{name}</h1>
                    <div className="input-heading-container">
                        <div className="input-heading">S.no</div>
                        <div className="input-heading">Percentage</div>
                        <div className="input-heading">Payment</div>
                    </div>
                    <div className="input-rows">
                        <div className='sno'>1</div>
                        <input type="text" className="ir1" />
                        <input type="text" className="ir1" />
                    </div>
                    <div className="input-rows">
                        <div className="sno">2</div>
                        <input type="text" className="ir1" />
                        <input type="text" className="ir1" />
                    </div>
                    <div className="input-rows">
                        <div className="sno">3</div>
                        <input type="text" className="ir1" />
                        <input type="text" className="ir1" />
                    </div>

                    <button className='c-p-i-b'>Add More <AddIcon /></button>
                </div>
                <button onClick={fun} className="contbtn">Continue</button>
            </div>

        </div>
    );
}



function Radio(props) {

    const [isActive, setisActive] = useState(false);
    const [isPopup, setisPopup] = useState(false);
    const [isPopup2, setisPopup2] = useState(false);


    return (
        <>
            <div className={props.mt === 0 ? "radiobox mt0" : "radiobox"} >
                <div className="radio-heading">{props.heading}</div>
                <div className="df jcb radio-con">
                    <div className="df rad-box">
                        <div className='block-label'><input type="radio" name={props.name} id={props.label1} /></div>
                        <div className="df fdc rad-box-child">
                            <label onClick={props.func1 ? () => setisPopup(!isPopup) : () => { }} htmlFor={props.label1}>{props.label1}</label>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                            </p>
                        </div>
                    </div>
                    <div className="df rad-box">
                        <div className='block-label'><input type="radio" name={props.name} id={props.label2} /></div>
                        <div className="df fdc">
                            <label onClick={props.func2 ? () => setisPopup2(!isPopup2) : () => { }} htmlFor={props.label2}>{props.label2}</label>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
                        </div>
                    </div>
                </div>
            </div>


            {
                props.isc ?
                    <>
                        <Pop val={isPopup} fun={() => setisPopup(!isPopup)} name={props.label1} />
                        <Pop val={isPopup2} fun={() => setisPopup2(!isPopup2)} name={props.label2} />
                    </>
                    : ''
            }



        </>
    );
}

export default Radio;