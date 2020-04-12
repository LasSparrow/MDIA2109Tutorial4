import React, {useState} from 'react';
import './input.css';
import CustomButton from '../CustomButton';

const Input = ({placeholder, onClick}) => {
    const [val, setVal] = useState("");

    return <div className="input_cont">
        <input onChange={(e)=>{
            setVal(e.target.value);
        }} type="text" placeholder={placeholder} />
        <CustomButton onClick={()=>{
            //alert(val);
            onClick(val);
        }} text="send" color="#58F" />
    </div>
}

Input.defaultProps = {
    placeholder:"Type your chat here!",
    onClick: ()=>{}
}

export default Input;