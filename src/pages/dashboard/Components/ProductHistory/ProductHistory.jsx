import './producthistory.css' ;
import CloseIcon from '@mui/icons-material/Close';

function ProductHistory(props) {
    return ( 
        <div className="ph-card df ">
            <img src={props.img} alt="" />
            <div className="df fdc">
                <div className="ph-name">Camlin Engineers Blue Pastes 20 ml</div>
                <div className="df jcb aic ph-detb">
                    <p>Burhani suppliers</p>
                    <p>Chennai</p>
                </div>
                <div className="df jcb aic ph-detb">
                    <div className='ph-price'>₹50 - ₹65</div>
                    <p>20 ml</p>
                </div>
            </div>
            <button className="delete">
                <CloseIcon/>
            </button>
        </div>
     );
}

export default ProductHistory;