import React, {useState} from 'react';
import'./cb.css';

//Made the UI
const CustomButton = ({text, color, onClick}) => {

return <div 
style={{backgroundColor:color, boxShadow:"1px 1px 5px "+color}}
className="custom_button_box"
onClick={onClick}
>
    <div className="custom_button_box_inner">
        {text}
    </div>
</div>
}

function ButtonClick(){
    alert("clicked");
}

CustomButton.defaultProps = {
    text:"Default Button",
    color:"#DAB",
    onClick:ButtonClick
}

//exporting default means that importing that item will have the default information (ex. UI above)
export default CustomButton;