import React, {useState, useEffect} from 'react';
import './contact.css';
import CustomButton from '../../comps/CustomButton';
import Header from '../../comps/Header';
import {AiOutlineMail} from 'react-icons/ai';
import {data, ChangeData} from '../data';
console.log(data);

var index = 0;
const headers_arr = [
    "Thanks for contacting me!",
    "Goodbye!",
    "Let me know if you have other questions.",
    // {
    //     text:"Texty text",
    //     img:"http://img.jpg"
    // }
]

const Contact = () => {
    console.log("contact page", data);
    var text = "";
    switch (data.lastaction){
        case "":
            text = "Please chat with me first";
            break;
        default:
            text = "Thanks for chatting!";
            break;
    }

    if(data.numClicks > 0 && data.numClicks < 10){
        text += "Chat more with me!";
    } else if(data.numClicks >= 10 && data.numClicks < 20){
        text += "You are a chatterbox!";
    }
    // if(data.lastaction === ""){
    //     text="Please go to chat first before contacting me!"
    // }

    // step 1 - create the state variable and the function to update it, put a default inside
    // const [state variable, function] = default("info");
    const [header_text, setHeader] = useState("Contact me!");
    // const [img_url, setImg] = useState("");
    const [pageleft, setLeft] = useState("-100%");
    //const [index, setIndex] = useState(0);


//useEffect has three states, birth, change, death
//useState/useEffect in pages only
useEffect(()=>{
    setTimeout(()=>{
        //document.querySelector("#contactpage").style.left = 0;
        setLeft(0);
    }, 50);

    return ()=>{
        // what to do when the component dies
    }
}, []);

useEffect(()=>{
    // what to do when it's created/born/beginning of the life cycle
    // use as many useEffect as you want
}, []);

useEffect(()=>{
    // what to do when a state in the page/component updates
    // alert("Header text has changed!");
    setLeft(20);
    setTimeout(()=>{
        setLeft(0);
    }, 500)
}, [header_text]);


// step 2 - connect the state variable to the UI
return <div id="contactpage" style={{left:pageleft}}>
    <div id="welcomecontact">
        <AiOutlineMail size="2em"/><Header text={header_text} fontSize={24} />

        {/* <img src={img_url} /> */}

    </div>
    <br />
    {text}
    {data.lastaction !== "" ? <CustomButton text="Email" onClick={()=>{
        // step 3 - connect the state function to an interaction or figure out when you want to update the interface
        setHeader(headers_arr[index]);
        // setHeader(headers_arr[index].text);
        // setImg(header_arr[index].img);
        index++;
        if(index > headers_arr.length-1){
            index = 0;
        }
    }} /> : null}
</div>
}

export default Contact;