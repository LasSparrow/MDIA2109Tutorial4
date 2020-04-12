//use same component to change fontSize
//text color of header
//change onMouseOver

import React from 'react';
import './header.css';

const Header = ({text, fontSize, color, onMouseOver}) => <div>
    <h1 style={{fontSize:fontSize}}>{text}</h1>
</div>

function MouseOver(){
    alert("mouse is over");
}

Header.defaultProps = {
    fontSize: 12,
    color: "#000",
    onMouseOver: MouseOver,
    text: "Header"
}

export default Header;