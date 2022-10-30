import { Link } from 'react-router-dom';
import './rfqcard.css' ;

export default function RfqCard(props) {
    return (
        <div className="rfq-card">
            <div className=""><strong>RFQ Name :</strong>{props.name}</div>
            <div className=""><strong>RFQ Till Date :</strong>{props.date}</div>
            <Link to='/brd'>View</Link>
        </div>
    ) ;
};
