import React, {useStates, useEffect} from 'react';
import './contact.css';
import CustomButton from '../../comps/CustomButton';
import Header from '../../comps/Header';
import { useState } from 'react';
import {AiOutlineMail} from 'react-icons/ai';

const Contact = () => {

useEffect(()=>{
    setTimeout(()=>{
        document.querySelector("#contactpage").style.left = 0;
    }, 50);
}, []);

return <div id="contactpage">
    <div id="welcomecontact">
        <AiOutlineMail size="2em"/><Header fontSize={24} text="Contact me!" />
    </div>
    <br />
    <CustomButton text="Email"/>
</div>
}

export default Contact;