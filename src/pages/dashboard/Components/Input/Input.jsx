import './input.css' ;

function Input(props) {
    return ( 
        <div className="min-input-form">
            <label htmlFor={props.name}>{props.label}</label>
            <input type="text" name={props.name} id={props.name} />
        </div>
     );
}

export default Input;