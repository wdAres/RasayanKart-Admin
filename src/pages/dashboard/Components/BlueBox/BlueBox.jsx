import './bluebox.css';


function BlueBox(props) {
    return (
        <div className="regi-form-left">
            <h1>{props.hd}.</h1>
            <p>{props.p}</p>
            <img src={props.img} alt="" />
        </div>
    );
}

export default BlueBox;