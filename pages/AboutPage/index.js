import React, {useEffect} from 'react';
import './about.css';
import CustomButton from '../../comps/CustomButton';
import Header from '../../comps/Header';
import {GiWhiteCat} from 'react-icons/gi';

function MoreInfo(){
    document.querySelector(".showtext").style.display = "flex";
}

const About = () => {

useEffect(()=>{
    setTimeout(()=>{
        document.querySelector("#aboutpage").style.opacity = 1;
    }, 100);
}, []);

return <div id="aboutpage">
    <div id="welcomeabout">
        <GiWhiteCat size="3em"/><Header fontSize={24} text="About Me" />
    </div>
    <div>This is some info about me.</div>
    <CustomButton onClick={MoreInfo} text="Click for more info!"/>
    <div class="showtext">Here is more info about me!</div>
</div>
}

export default About;