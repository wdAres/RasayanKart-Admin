import './pdf.css' ;
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';


function Pdf(props) {
    return ( 
        <div className="pdf-card">
            <div className="pdf-header">
                <PictureAsPdfIcon fontSize="large"/>
            </div>
            <div className="pdf-details">
                <div className="pdf-name">{props.name}</div>
                <div className="pdf-size">{props.size}</div>
                <button>Download</button>
            </div>
        </div>
     );
}

export default Pdf;