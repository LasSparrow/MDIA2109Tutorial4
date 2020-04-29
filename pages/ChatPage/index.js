import React, {useState, useEffect} from 'react';
import './chatpage.css';
import Chat from '../../comps/Chat';
import CustomButton from '../../comps/CustomButton';
import Header from '../../comps/Header';
import Input from '../../comps/Input';
import {TiMessages} from 'react-icons/ti';
import {data, ChangeData} from '../data';

console.log("doesn't reload, loads only once", data);

/*
var welcome = "Welcome to my App!";
function setWelcome(){
    welcome = "Start with sending a message.";
    document.querySelector("#welcome").innerText = welcome;
}
*/

const ChatPage = ({}) => {
    console.log("reloads every time component is used", data);
    const [welcome, setWelcome] = useState("Welcome to my App!"); //same as var and function above
    const [msg, setMsg] = useState("Please type something!");
    const [resp, setResp] = useState("Let me respond to you!");
    const [color, setColor] = useState("#60D");
    const [text, setText] = useState("Weird Button?");

    useEffect(()=>{
        setTimeout(()=>{
            document.querySelector("#chatpage").style.left = 0;
        }, 50);
    }, []);

    return <div id="chatpage">
        <div id="welcomechat">
            <TiMessages size="4em" /><Header fontSize={32} text={welcome} />
        </div>
        <div id="chats" onClick={()=>{ //shortest way of writing function (nameless)
            setWelcome("Start with sending a message."); //stating the function
        }}>
            <Chat name={"User 1"} msg={msg} />
            <p />
            <Chat name={"Chat Bot"} img={"https://www.clipartmax.com/png/middle/96-968421_space-and-astronomy-robot-icon-transparent-background.png"} backgroundColor={"#FAB"} msg={resp} />
        </div>
        <div id="controls">
            <Input onClick={(val)=>{
                setMsg(val);
                var newresp = CheckResponse(val);
                setResp(newresp);
                /*if(val === "hi"){
                    setResp("I love pie");
                }*/
            }}/>
        </div>
        <div id="custom_button">
            <CustomButton color={color} text={text} onClick={()=>{
                setText("Interesting!");
                setColor("#0F0");
            }}/>
        </div>
    </div>
}

function CheckResponse(inp){
    var num = data.numClicks;
    ChangeData({
        lastaction:"Clicked send",
        numClicks:num+1
    })
    switch(inp.toLowerCase()){
        case "hi":
            return "I love pie";
        case "how are you?":
            return "Great!";
        default:
            return "I don't understand what you are trying to say";
    }
}

ChatPage.defaultProps = {

}

export default ChatPage;